import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IAlbum, IArtist, ISong } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-infoalbum',
  templateUrl: './infoalbum.page.html',
  styleUrls: ['./infoalbum.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class InfoalbumPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  private fireStoreService = inject(FirestoreService);
  album: IAlbum = {} as IAlbum;
  songs: ISong[] = [];
  idDocument: string = '';
  artist: IArtist = {} as IArtist;
  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.idDocument = this.activetedRoute.snapshot.params['id'];
    this.fireStoreService.getOneAlbum(this.idDocument).subscribe((res) => {
      this.album = res;
      console.log(this.album);

      this.fireStoreService
        .getOneArtist(this.album.idArtist)
        .subscribe((res) => {
          this.artist = res;
        });
    });
  }
}
