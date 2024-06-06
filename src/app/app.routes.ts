import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'play-music/:name',
    loadComponent: () =>
      import('./pages/play-music/play-music.page').then((m) => m.PlayMusicPage),
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.page').then((m) => m.SearchPage),
  },
  {
    path: 'categorie',
    loadComponent: () =>
      import('./pages/categorie/categorie.page').then((m) => m.CategoriePage),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
