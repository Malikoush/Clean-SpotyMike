import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon, IonText, IonButton } from '@ionic/angular/standalone';
import { ellipsisHorizontal } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import { ModalController } from '@ionic/angular';
import { ModalArtistComponent } from 'src/app/shared/modal/modal-artist/modal-artist.component';
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
  }

}
