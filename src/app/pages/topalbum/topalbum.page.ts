import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { IAlbum } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-topalbum',
  templateUrl: './topalbum.page.html',
  styleUrls: ['./topalbum.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
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
export class TopalbumPage implements OnInit {
  private firebase = inject(FirestoreService);
  albums: IAlbum[] = [];
  constructor() {}

  ngOnInit() {
    this.firebase.getAllAlbum().subscribe((data) => {
      this.albums = data;
    });
  }
}
