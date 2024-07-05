import { PlaylistPage } from './../../pages/playlist/playlist.page';
import { FavoritePage } from './../../pages/favorite/favorite.page';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Component } from '@angular/core';
import { authGuard } from 'src/app/core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then((m) => m.HomePage),
        canActivate: [authGuard],
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('../../pages/favorite/favorite.page').then(
            (m) => m.FavoritePage
          ),
        canActivate: [authGuard],
      },
      {
        path: 'playlist',
        loadComponent: () =>
          import('../../pages/playlist/playlist.page').then(
            (m) => m.PlaylistPage
          ),
        canActivate: [authGuard],
      },
      {
        path: 'music/:name',
        loadComponent: () =>
          import('../../pages/music/music.page').then((m) => m.MusicPage),
        canActivate: [authGuard],
      },
      {
        path: 'profils',
        loadComponent: () =>
          import('../../shared/profils/profils.page').then(
            (m) => m.ProfilsPage
          ),
        canActivate: [authGuard],
      },

      {
        path: 'search',
        loadComponent: () =>
          import('../../pages/search/search.page').then((m) => m.SearchPage),
        canActivate: [authGuard],
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
