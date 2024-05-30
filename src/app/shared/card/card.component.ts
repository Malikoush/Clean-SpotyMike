import { Component, OnInit, inject } from '@angular/core';
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
import { heartOutline, shareSocialOutline } from 'ionicons/icons';
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
  items: string[] = [];
  isSelected = false;
  isHidden = false;

  private router = inject(Router);

  constructor() {
    addIcons({ heartOutline, shareSocialOutline });
  }

  ngOnInit() {
    this.generateItems();
    console.log('items', this.items);
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 20; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  // onIonInfinite(ev: Event) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }
  onSelect(name: string) {
    this.isSelected = true;

    this.isHidden = true;
    this.router.navigate(['/play-music/' + name]);
    // 2 secondes pour l'animation de disparition
  }
}
