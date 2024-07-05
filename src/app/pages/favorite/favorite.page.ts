import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FavoritePage implements OnInit {
  private localStorageService = inject(LocalstorageService);
  private firebase = inject(FirestoreService);
  listSongs: any[] = [];
  constructor() {}

  ngOnInit() {
    this.listSongs = this.localStorageService.getElement('like') as any;

    this.listSongs.forEach((song) => {
      console.log(song);
    });
  }
}
