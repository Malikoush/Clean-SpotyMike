import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getElement(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }

  setElement(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  removeElement(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
