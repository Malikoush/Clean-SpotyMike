import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IArtist, IPlaylist, ISong } from 'src/app/core/interfaces/user';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { EMPTY, Observable, map } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterOutlet,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    IonIcon,
  ],
})
export class MusicPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  idDocument = '';
  userIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  private firebase = inject(FirestoreService);
  songs: ISong[] = [];
  artist: IArtist[] = [];
  playlist: IPlaylist = {} as IPlaylist;
  infoArtist: IArtist = {} as IArtist;

  idDocumentSongs: string[] = [];
  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.userIdDocument = this.localStorageService.getElement('userIdDocument');
    this.idDocument = this.activetedRoute.snapshot.params['name'];

    this.firebase
      .getUserPlaylistsById(this.userIdDocument, this.idDocument)
      .subscribe((res) => {
        this.playlist = res;
        this.idDocumentSongs = this.playlist.song.map((element: string) =>
          element.trim()
        );
        this.localStorageService.setElement(
          'playlist',
          JSON.stringify(this.idDocumentSongs)
        );
        if (this.idDocumentSongs.length > 0) {
          this.firebase.getSongsByIds(this.idDocumentSongs).subscribe((res) => {
            this.songs = res;
          });
        }
      });
  }

  fullNameArtist(idDocument: string) {
    this.firebase.getOneArtist(idDocument).subscribe((res) => {
      this.infoArtist = res;
      return this.infoArtist.fullname.toString();
    });
  }
}
