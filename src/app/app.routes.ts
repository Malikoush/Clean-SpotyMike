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
    path: 'profil',
    loadComponent: () =>
      import('./pages/profil/profil.page').then((m) => m.ProfilPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'favorite',
    loadComponent: () =>
      import('./pages/favorite/favorite.page').then((m) => m.FavoritePage),
  },
  {
    path: 'playlist',
    loadComponent: () =>
      import('./pages/playlist/playlist.page').then((m) => m.PlaylistPage),
  },
  {
    path: 'recherche',
    loadComponent: () =>
      import('./pages/recherche/recherche.page').then((m) => m.RecherchePage),
  },

  {
    path: 'categorie',
    loadComponent: () =>
      import('./pages/categorie/categorie.page').then((m) => m.CategoriePage),
  },

  {
    path: 'historique',
    loadComponent: () =>
      import('./pages/historique/historique.page').then(
        (m) => m.HistoriquePage
      ),
  },
  {
    path: 'topsong',
    loadComponent: () =>
      import('./pages/topsong/topsong.page').then((m) => m.TopsongPage),
  },
  {
    path: 'topartist',
    loadComponent: () =>
      import('./pages/topartist/topartist.page').then((m) => m.TopartistPage),
  },
  {
    path: 'topalbum',
    loadComponent: () =>
      import('./pages/topalbum/topalbum.page').then((m) => m.TopalbumPage),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./pages/account/account.page').then((m) => m.AccountPage),
  },

  {
    path: 'infoalbum/:id',
    loadComponent: () =>
      import('./pages/infoalbum/infoalbum.page').then((m) => m.InfoalbumPage),
  },

  {
    path: 'infoartist/:id',
    loadComponent: () =>
      import('./pages/infoartist/infoartist.page').then(
        (m) => m.InfoartistPage
      ),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
