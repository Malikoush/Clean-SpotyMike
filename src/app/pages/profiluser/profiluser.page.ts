import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon, IonText, IonButton } from '@ionic/angular/standalone';
import { ellipsisHorizontal } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import { ModalController } from '@ionic/angular';
import { ModalArtistComponent } from 'src/app/shared/modal/modal-artist/modal-artist.component';
import { IUser } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profiluser.page.html',
  styleUrls: ['./profiluser.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonIcon, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormInputComponent]
  ,providers: [ModalController],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ProfilUserPage implements OnInit {
  private modalCtl = inject(ModalController);
  private firebase = inject(FirestoreService);
  userIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  user: IUser = {} as IUser;
  constructor() { 
    addIcons({ ellipsisHorizontal });
  }
  async onPasswordLostModal() {
    const modal = await this.modalCtl.create({
      component: ModalArtistComponent,
    });
    await modal.present();
  }
  ngOnInit() {
    this.userIdDocument = this.localStorageService.getElement('userIdDocument');
    this.firebase.getUser(this.userIdDocument).subscribe((res) => {
     
      this.user = res;
   
      
    });
  }

}
