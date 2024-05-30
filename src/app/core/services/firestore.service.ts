import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 // private app = initializeApp(environment.firebase);
  //private db = getFirestore(this.app);
  constructor() { }

/*
  // Get a list of cities from your database
async getAlbums() {
  const albumsCol = collection(this.db, 'albums');
  const albumSnapshot = await getDocs(albumsCol);
  const albumList = albumSnapshot.docs.map(doc => doc.data());
  return albumList;
}
*/
}
