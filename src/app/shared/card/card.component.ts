import { Component, Input, OnInit, inject } from '@angular/core';
import {
  IonList,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonAvatar,
  IonImg,
  IonIcon,
} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { NgClass, NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  ellipsisVerticalOutline,
  heartOutline,
  shareSocialOutline,
} from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { IPlaylist, ISong } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    IonIcon,
    IonImg,
    IonAvatar,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonItem,
    IonList,
    IonList,
    IonLabel,
    IonLabel,
    NgFor,
    RouterLink,
    NgClass,
  ],
})
export class CardComponent implements OnInit {
  @Input() styles?: string = '';
  @Input() title?: string = '';
  @Input() nameArtist?: string = '';
  @Input() nbre?: number;
  @Input() idDocument?: string = '';
  name: string = '';
  isSelected = false;
  isHidden = false;

  private router = inject(Router);

  constructor() {
    addIcons({ heartOutline, shareSocialOutline, ellipsisVerticalOutline });
  }

  ngOnInit() {
    console.log(this.idDocument);

    if (this.styles === 'music') {
      this.name = 'music';
    } else {
      this.name = 'playlist';
    }
  }

  onSelect(url?: string) {
    this.isSelected = true;

    if (this.name === 'music') {
      this.router.navigate(['/play-music/' + url]);
    } else {
      this.router.navigate(['/music/' + url]);
    }
    // 2 secondes pour l'animation de disparition
  }
}
