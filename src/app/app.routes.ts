import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./shared/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '**',
    component:LoginPage
  },


]
