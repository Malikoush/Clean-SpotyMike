import { IArtist } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  collectionGroup,
} from 'firebase/firestore/lite';
import { Observable, from, map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPlaylist, ISong, IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);
  constructor() {}

  getUser(idDocument: string): Observable<IUser> {
    const userDoc = doc(this.db, 'users', idDocument);
    const userSnapshot = from(getDoc(userDoc));
    return userSnapshot.pipe(
      map(
        (snapshot) =>
          ({
            idDocument: snapshot.id,
            ...snapshot.data(),
          } as IUser)
      )
    );
  }
  getUserPlaylists(idDocument: string): Observable<IPlaylist[]> {
    const playlistsCol = collection(this.db, `users/${idDocument}/playlist`);
    const q = query(playlistsCol, where('public', '==', true));
    const playlistsSnapshot = from(getDocs(q));
    return playlistsSnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IPlaylist[]
      )
    );
  }

  getUserArtist(idDocument: string): Observable<IArtist[]> {
    const artistsCol = collection(this.db, `users/${idDocument}/artist/`);
    const artistSnapshot = from(getDocs(artistsCol));
    return artistSnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IArtist[]
      )
    );
  }

  // getUserPlaylistsById(
  //   idDocumentUser: string,
  //   title: string
  // ): Observable<IPlaylist[]> {
  //   const playlistsCol = collection(
  //     this.db,
  //     `users/${idDocumentUser}/playlist`
  //   );
  //   const q = query(playlistsCol, where('_id', '==', title));
  //   const playlistsSnapshot = from(getDocs(q));
  //   return playlistsSnapshot.pipe(
  //     map(
  //       (snapshot) =>
  //         snapshot.docs.map((doc) => ({
  //           idDocument: doc.id,
  //           ...doc.data(),
  //         })) as IPlaylist[]
  //     )
  //   );
  // }
  getPlaylistByUserIdAndPlaylistId(
    userId: string,
    playlistId: string
  ): Observable<IPlaylist> {
    const playlistDoc = doc(this.db, `users/${userId}/playlist/${playlistId}`);
    const playlistSnapshot = from(getDoc(playlistDoc));
    return playlistSnapshot.pipe(
      map((snapshot) => {
        if (snapshot.exists()) {
          return {
            idDocument: snapshot.id,
            ...snapshot.data(),
          } as IPlaylist;
        } else {
          throw new Error('Playlist not found');
        }
      })
    );
  }

  getDocumentsFromGroupCollection(): Observable<ISong[]> {
    const groupCollection = collectionGroup(this.db, 'song');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as ISong[]
      )
    );
  }
  // getSongsByIds(songIds: string[]): Observable<ISong[]> {
  //   const groupCollection = collectionGroup(this.db, 'song');
  //   const q = query(groupCollection, where('idDocument', 'in', songIds));
  //   const querySnapshot = from(getDocs(q));
  //   console.log(
  //     querySnapshot.pipe(
  //       map((snapshot) =>
  //         snapshot.docs.map(
  //           (doc) =>
  //             ({
  //               idDocument: doc.id,
  //               ...doc.data(),
  //             } as ISong)
  //         )
  //       )
  //     )
  //   );
  //   return querySnapshot.pipe(
  //     map((snapshot) =>
  //       snapshot.docs.map(
  //         (doc) =>
  //           ({
  //             idDocument: doc.id,
  //             ...doc.data(),
  //           } as ISong)
  //       )
  //     )
  //   );
  // }

  // getSongsById(idSong: string): Observable<ISong[]> {
  //   const groupCollection = collectionGroup(this.db, 'song');
  //   const q = query(groupCollection, where('title', '==', idSong));
  //   const querySnapshot = from(getDocs(q));
  //   return querySnapshot.pipe(
  //     map(
  //       (snapshot) =>
  //         snapshot.docs.map((doc) => ({
  //           idDocument: doc.id,
  //           ...doc.data(),
  //         })) as ISong[]
  //     )
  //   );
  // }

  login($email: string, $password: string): Observable<IUser> {
    const userCol = collection(this.db, 'users');
    const q = query(
      userCol,
      where('email', '==', $email),
      where('password', '==', $password)
    );
    const userSnapshot = from(getDocs(q));
    return userSnapshot.pipe(
      map(
        (snapshot) =>
          ({
            idDocument: snapshot.docs[0]?.id,
            ...snapshot.docs[0]?.data(),
          } as IUser)
      )
    );
  }
}
