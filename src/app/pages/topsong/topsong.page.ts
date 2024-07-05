import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ISong } from 'src/app/core/interfaces/user';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-topsong',
  templateUrl: './topsong.page.html',
  styleUrls: ['./topsong.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
  ],
})
export class TopsongPage implements OnInit {
  private fireStoreService = inject(FirestoreService);
  songs: ISong[] = [];
  constructor() {}

  ngOnInit() {
    this.fireStoreService.getAllTopSongs().subscribe((songs) => {
      this.songs = songs;
    });
  }
}
