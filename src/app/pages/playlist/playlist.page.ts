import { Component, OnInit } from '@angular/core';
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
  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }
}
