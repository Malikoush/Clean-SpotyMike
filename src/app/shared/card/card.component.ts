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
import { NgClass, NgFor, NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  ellipsisVerticalOutline,
  heartOutline,
  shareSocialOutline,
} from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { IArtist, IPlaylist, ISong } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';

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
    NgIf,
  ],
})
export class CardComponent implements OnInit {
  @Input() styles?: string = '';
  @Input() title?: string = '';
  @Input() nameArtist?: string = '';
  @Input() nbre?: number;
  @Input() idDocument?: string;
  @Input() idArtist?: string;

  @Input() img?: string = '';
  name: string = '';
  isSelected = false;
  isHidden = false;
  infosArtist: IArtist = {} as IArtist;

  private router = inject(Router);
  private firestoreService = inject(FirestoreService);
  constructor() {
    addIcons({ heartOutline, shareSocialOutline, ellipsisVerticalOutline });
  }

  ngOnInit() {
    console.log(this.idDocument);

    if (this.styles === 'music' && !this.nameArtist) {
      this.name = 'music';
      this.firestoreService
        .getOneArtist(this.idArtist as string)
        .subscribe((res) => {
          this.infosArtist = res;
          console.log(this.infosArtist);
        });
    } else {
      this.name = 'playlist';
    }
  }

  onSelect(url?: string) {
    this.isSelected = true;

    if (this.name === 'music') {
      this.router.navigate(['/play-music/' + url]);
    }

    if (this.name === 'playlist') {
      this.router.navigate(['/music/' + url]);
    }
    if (this.name === 'artist') {
      this.router.navigate(['/artist/' + url]);
    }

    if (this.styles === 'album') {
      this.router.navigate(['/album/' + url]);
    }

    // 2 secondes pour l'animation de disparition
  }
}
