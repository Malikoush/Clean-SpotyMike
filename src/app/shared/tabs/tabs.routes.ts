import { PlaylistPage } from './../../pages/playlist/playlist.page';
import { FavoritePage } from './../../pages/favorite/favorite.page';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('../../pages/favorite/favorite.page').then(
            (m) => m.FavoritePage
          ),
      },
      {
        path: 'playlist',
        loadComponent: () =>
          import('../../pages/playlist/playlist.page').then(
            (m) => m.PlaylistPage
          ),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('../../pages/profil/profil.page').then((m) => m.ProfilPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
