import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabBar, IonTabs, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLinkActive } from '@angular/router';
import { ProfilUserPage } from 'src/app/pages/profiluser/profiluser.page';
import { ProfilartistPage } from 'src/app/pages/profilartist/profilartist.page';
@Component({
  selector: 'app-profils',
  templateUrl: './profils.page.html',
  styleUrls: ['./profils.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonButton,
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonContent, 
    IonHeader, 
    IonTitle,
    IonToolbar, 
    CommonModule,
    FormsModule,
    RouterLinkActive,
  ProfilUserPage
  ,ProfilartistPage]
})
export class ProfilsPage implements OnInit {
  private router = inject(Router);
  currentView: 'user' | 'artist' = 'user';
  constructor() { }

  ngOnInit() {
  }

  showUserProfile() {
    this.currentView = 'user';
  }

  showArtistProfile() {
    this.currentView = 'artist';
  }

}
