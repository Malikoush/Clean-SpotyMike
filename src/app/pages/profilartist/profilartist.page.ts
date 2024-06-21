import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonText, IonButton } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { ellipsisHorizontal, idCard } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalArtistComponent } from 'src/app/shared/modal/modal-artist/modal-artist.component';
import { IPlaylist } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-profilartist',
  templateUrl: './profilartist.page.html',
  styleUrls: ['./profilartist.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,CardComponent]
  ,providers: [ModalController],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilartistPage implements OnInit {
  private firebase = inject(FirestoreService);
  private modalCtl = inject(ModalController);
  selectedIndex: number | null = 0;
  componentToShow: string | null = "album";
  userIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  playlists: IPlaylist[] = [];
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
    console.log(this.userIdDocument);

    //get albumby idartist
    //get song by idartist
    //get follower by id 
    //get following by id

    this.firebase.getUserPlaylists(this.userIdDocument).subscribe((res) => {
      this.playlists = res;
    });
  }

  onItemClick(index: number) {
    this.selectedIndex = index;
    switch (index) {
      case 0:
        console.log('yo');
        
        this.componentToShow = 'album';
        break;
      case 1:
        this.componentToShow = 'DetailComponent';
        break;

      default:
        this.componentToShow = null;
        break;
    }
  }

}
