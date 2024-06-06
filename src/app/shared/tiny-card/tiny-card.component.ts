import {
  IonItem,
  IonLabel,
  IonThumbnail,
  IonIcon,
} from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';
import { ellipsisHorizontal } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Song } from '../../core/interfaces/song';

@Component({
  selector: 'app-tiny-card',
  templateUrl: './tiny-card.component.html',
  styleUrls: ['./tiny-card.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonThumbnail, IonIcon],
})
export class TinyCardComponent implements OnInit {
  @Input() title?: string = '';
  @Input() nameArtist?: string = '';
  @Input() duration?: string = '';
  @Input() img?: string = '';
  constructor() {
    addIcons({ ellipsisHorizontal });
  }

  ngOnInit() {}

  @Input() song!: Song;
}
