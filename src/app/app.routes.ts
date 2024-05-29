import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'favorite',
    loadComponent: () => import('./pages/favorite/favorite.page').then( m => m.FavoritePage)
  },
  {
    path: 'playlist',
    loadComponent: () => import('./pages/playlist/playlist.page').then( m => m.PlaylistPage)
  },
];
