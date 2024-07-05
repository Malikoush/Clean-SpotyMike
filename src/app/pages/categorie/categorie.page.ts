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
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ISong } from 'src/app/core/interfaces/user';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
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
export class CategoriePage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  private firebase = inject(FirestoreService);
  songs: ISong[] = [];
  nameCategory = '';
  constructor() {}

  ngOnInit() {
    this.nameCategory = this.activetedRoute.snapshot.params['id'];

    this.firebase
      .getAllSongByCategory(this.nameCategory.toLowerCase())
      .subscribe((data) => {
        this.songs = data;
      });
  }
}
