import { NgClass, NgFor } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EnvironmentInjector,
  OnInit,
  inject,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLinkActive,
} from '@angular/router';
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
import { FirestoreService } from 'src/app/core/services/firestore.service';

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
    NgClass,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  private albumService = inject(FirestoreService);
  private activetedRoute = inject(ActivatedRoute);
  private router = inject(Router);
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
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveTab();
      }
    });
  }

  ngOnInit() {
    this.updateActiveTab();
  }

  activateTab(tabName: string) {
    this.tabs.forEach((tab) => {
      tab.isActive = tab.name === tabName;
    });
  }
  private updateActiveTab() {
    const currentUrl = this.router.url.split('/')[1];
    this.tabs.forEach((tab) => {
      tab.isActive = tab.name === currentUrl;
    });
  }
}
