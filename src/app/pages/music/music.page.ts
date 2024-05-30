import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { ellipsisHorizontalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterOutlet,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    IonIcon,
  ],
})
export class MusicPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  title = '';

  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.title = this.activetedRoute.snapshot.params['name'];
  }
}
