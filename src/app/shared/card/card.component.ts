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
  headsetSharp,
  heartOutline,
  heartSharp,
  shareSocialOutline,
} from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { IArtist, IPlaylist, ISong } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

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
  listSongs: any[] = [];
  isLike = false;

  private router = inject(Router);
  private firestoreService = inject(FirestoreService);
  private localStorageService = inject(LocalstorageService);
  constructor() {
    addIcons({
      heartOutline,
      shareSocialOutline,
      ellipsisVerticalOutline,
      heartSharp,
    });
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

    this.listSongs = JSON.parse(
      this.localStorageService.getElement('like') as string
    );
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

  likeSong(idDocument: string | undefined) {
    if (this.localStorageService.getElement('like') === null) {
      this.listSongs.push(idDocument as string);
      this.localStorageService.setElement('like', this.listSongs.toString());

      this.isLike = true;
    } else {
      this.listSongs = JSON.parse(this.localStorageService.getElement('like'));

      if (this.listSongs.includes(idDocument as string)) {
        const index = this.listSongs.indexOf(idDocument as string);
        if (index > -1) {
          this.listSongs.splice(index, 1);
          this.isLike = false;
        }
        this.localStorageService.setElement('like', this.listSongs.toString());
      } else {
        this.listSongs.push(idDocument as string);
        this.localStorageService.setElement('like', this.listSongs.toString());

        this.isLike = true;
      }
    }
  }
}
