import { NgFor } from '@angular/common';
import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  heartSharp,
  homeOutline,
  homeSharp,
  musicalNoteSharp,
  musicalNotesOutline,
  personOutline,
  personSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    RouterLinkActive,
    NgFor,
  ],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  tabs = [
    {
      name: 'home',
      iconOutline: 'home-outline',
      iconSharp: 'home-sharp',
      isActive: false,
    },
    {
      name: 'favorite',
      iconOutline: 'heart-outline',
      iconSharp: 'heart-sharp',
      isActive: false,
    },
    {
      name: 'playlist',
      iconOutline: 'musical-notes-outline',
      iconSharp: 'musical-notes-sharp',
      isActive: false,
    },
    {
      name: 'profil',
      iconOutline: 'person-outline',
      iconSharp: 'person-sharp',
      isActive: false,
    },
  ];
  constructor() {
    addIcons({
      homeOutline,
      musicalNotesOutline,
      personOutline,
      heartOutline,
      homeSharp,
      musicalNoteSharp,
      personSharp,
      heartSharp,
    });
  }

  ngOnInit() {
    this.tabs[0].isActive = true;
  }

  activateTab(tabName: string) {
    this.tabs.forEach((tab) => {
      tab.isActive = tab.name === tabName;
    });
  }
}
