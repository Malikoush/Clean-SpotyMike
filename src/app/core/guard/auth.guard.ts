import { jwtDecode } from 'jwt-decode';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Injecter le service de local storage
  const localStore = inject(LocalstorageService);
  const router = inject(Router);

  // Récupérer le token depuis le local storage
  const token = localStore.getElement('token');
  console.log(token);

  // Si aucun token n'est trouvé, rediriger ou refuser l'accès
  if (token === null || token === undefined || !token) {
    console.log(1);

    router.navigate(['/login']);
    return false;
  }

  // Déchiffrer le token pour obtenir son payload
  const decodedToken: any = jwtDecode(token);
  console.log(2);
  // Vérifier si le token contient une date d'expiration
  if (!decodedToken || !decodedToken.exp) {
    router.navigate(['/login']);

    return false;
  }

  // Vérifier si le token est expiré
  const currentTime = Math.floor(Date.now() / 1000); // Temps actuel en secondes
  if (decodedToken.exp < currentTime) {
    router.navigate(['/login']);

    return false; // Token expiré
  }

  // Si le token est valide, permettre l'accès
  return true;
};
