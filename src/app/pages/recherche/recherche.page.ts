import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TabsPage } from "../../shared/tabs/tabs.page";

@Component({
    selector: 'app-recherche',
    templateUrl: './recherche.page.html',
    styleUrls: ['./recherche.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsPage]
})
export class RecherchePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
