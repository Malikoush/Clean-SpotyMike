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
    path: '',
    loadChildren: () =>
      import('./shared/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
