import { IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  ellipsisHorizontalOutline,
  expandOutline,
  heartOutline,
  pauseOutline,
  playSkipBackOutline,
  playSkipForwardOutline,
  repeatOutline,
  shapesOutline,
  shareSocialOutline,
  shuffleOutline,
} from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ISong } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.page.html',
  styleUrls: ['./play-music.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
  ],
})
export class PlayMusicPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  private firebase = inject(FirestoreService);
  song: ISong = {} as ISong;
  id: string = '';
  nameArtist: string = '';
  constructor() {
    addIcons({
      heartOutline,
      shareSocialOutline,
      playSkipForwardOutline,
      playSkipBackOutline,
      pauseOutline,
      repeatOutline,
      shuffleOutline,
      expandOutline,
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.id = this.activetedRoute.snapshot.params['name'];

    this.firebase.getOneSong(this.id).subscribe((data) => {
      this.song = data;
      this.firebase.getOneArtist(this.song.idArtist).subscribe((data) => {
        this.nameArtist = data.fullname;
      });
    });
  }
}
