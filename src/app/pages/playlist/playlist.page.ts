import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { addIcons } from 'ionicons';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { IPlaylist } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonCardContent,
    IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
  ],
})
export class PlaylistPage {
  private firebase = inject(FirestoreService);
  userIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  playlists: IPlaylist[] = [];
  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.userIdDocument = this.localStorageService.getElement('userIdDocument');
    console.log(this.userIdDocument);
    this.firebase.getUserPlaylists(this.userIdDocument).subscribe((res) => {
      this.playlists = res;
    });
  }
}
