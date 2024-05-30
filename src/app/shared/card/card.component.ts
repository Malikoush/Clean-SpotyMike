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
  @Input() title?: string = '';
  name: string = '';
  items: string[] = [];
  isSelected = false;
  isHidden = false;

  private router = inject(Router);

  constructor() {
    addIcons({ heartOutline, shareSocialOutline, ellipsisVerticalOutline });
  }

  ngOnInit() {
    this.generateItems();

    if (this.title === 'music') {
      this.name = 'music';
    } else {
      this.name = 'playlist';
    }
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 20; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onSelect(url: string) {
    this.isSelected = true;

    if (this.name === 'music') {
      this.router.navigate(['/play-music/' + url]);
    } else {
      this.router.navigate(['/music/' + url]);
    }
    // 2 secondes pour l'animation de disparition
  }
}
