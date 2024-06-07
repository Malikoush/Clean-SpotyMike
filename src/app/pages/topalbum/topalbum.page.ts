import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-topalbum',
  templateUrl: './topalbum.page.html',
  styleUrls: ['./topalbum.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TopalbumPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
