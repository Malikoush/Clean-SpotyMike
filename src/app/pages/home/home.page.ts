import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { TinyCardComponent } from 'src/app/shared/tiny-card/tiny-card.component';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonIcon,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonAvatar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { Song } from 'src/app/core/interfaces/song';
import { arrowForwardOutline, searchOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { ISong, IUser } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonCard,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ExploreContainerComponent,
    CarouselComponent,
    TinyCardComponent,
    IonAvatar,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  private auth = inject(AuthentificationService);
  private firebase = inject(FirestoreService);
  songs: ISong[] = [];

  users: IUser[] = [];
  constructor() {
    addIcons({ searchOutline, arrowForwardOutline });
  }

  ngOnInit() {
    this.firebase.getDocumentsFromGroupCollection().subscribe((res) => {
      this.songs = res;
      console.log(this.songs);
    });
  }

  selectedCategory: string = 'All';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
