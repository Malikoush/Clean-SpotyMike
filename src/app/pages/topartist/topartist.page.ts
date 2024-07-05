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
import { IArtist } from 'src/app/core/interfaces/user';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-topartist',
  templateUrl: './topartist.page.html',
  styleUrls: ['./topartist.page.scss'],
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
export class TopartistPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  private firebase = inject(FirestoreService);
  artists: IArtist[] = [];
  constructor() {}

  ngOnInit() {
    this.firebase.getAllArtist().subscribe((data) => {
      this.artists = data;
    });
  }
}
