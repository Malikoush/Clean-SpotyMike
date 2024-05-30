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
  title = '';
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
    this.title = this.activetedRoute.snapshot.params['name'];
    console.log(this.title);
  }
}
