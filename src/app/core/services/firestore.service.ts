import { IAlbum, IArtist } from './../interfaces/user';
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
  orderBy,
  limit,
  or,
  and,
} from 'firebase/firestore/lite';
import { Observable, combineLatest, from, map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPlaylist, ISong, IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);
  constructor() {}

  /**
   *
   *    USERS
   *
   */

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

  getUserPlaylistsById(
    idDocumentUser: string,
    id: string
  ): Observable<IPlaylist> {
    const playlistsCol = doc(this.db, `users/${idDocumentUser}/playlist`, id);
    const playlistsSnapshot = from(getDoc(playlistsCol));
    return playlistsSnapshot.pipe(
      map(
        (snapshot) =>
          ({
            idDocument: snapshot.id,
            ...snapshot.data(),
          } as IPlaylist)
      )
    );
  }

  /**
   *
   *    ARTISTES
   *
   */
  getAllArtist(): Observable<IArtist[]> {
    const groupCollection = collectionGroup(this.db, 'artist');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IArtist[]
      )
    );
  }

  getTopArtist(): Observable<IArtist[]> {
    const topArtisteCollection = collectionGroup(this.db, 'artist');
    const topArtisteQuery = query(
      topArtisteCollection,
      orderBy('like', 'desc'),
      limit(3)
    );
    const querySnapshot = from(getDocs(topArtisteQuery));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IArtist[]
      )
    );
  }

  getOneArtist(artistId: string): Observable<IArtist> {
    const artistCollection = collectionGroup(this.db, 'artist');
    const querySnapshot = from(getDocs(artistCollection));
    return querySnapshot.pipe(
      map((snapshot) => {
        const doc = snapshot.docs.find((doc) => doc.id === artistId);
        return {
          idDocument: doc?.id,
          ...doc?.data(),
        } as IArtist;
      })
    );
  }

  /**
   *
   *    SONGS
   *
   */

  getSongsByIds(songIds: string[] | string): Observable<ISong[]> {
    const songCollection = collectionGroup(this.db, 'song');
    const querySnapshot = from(getDocs(songCollection));
    return querySnapshot.pipe(
      map((snapshot) =>
        snapshot.docs
          .filter((doc) => songIds.includes(doc.id))
          .map(
            (doc) =>
              ({
                idDocument: doc.id,
                ...doc.data(),
              } as ISong)
          )
      )
    );
  }

  getOneSong(songIds: string): Observable<ISong> {
    const songCollection = collectionGroup(this.db, 'song');
    const querySnapshot = from(getDocs(songCollection));
    return querySnapshot.pipe(
      map((snapshot) => {
        const doc = snapshot.docs.find((doc) => doc.id === songIds);
        return {
          idDocument: doc?.id,
          ...doc?.data(),
        } as ISong;
      })
    );
  }

  getAllSong(): Observable<ISong[]> {
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
  getTopSongs(): Observable<ISong[]> {
    const groupCollection = collectionGroup(this.db, 'song');
    const topSongsQuery = query(
      groupCollection,
      orderBy('like', 'desc'),
      limit(3)
    );
    const querySnapshot = from(getDocs(topSongsQuery));
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

  /**
   *
   *    ALBUMS
   *
   */

  getAllAlbum(): Observable<IAlbum[]> {
    const groupCollection = collectionGroup(this.db, 'album');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IAlbum[]
      )
    );
  }
  getTopAlbum(): Observable<IAlbum[]> {
    const groupCollection = collectionGroup(this.db, 'album');
    const topAlbumsQuery = query(
      groupCollection,
      orderBy('like', 'desc'),
      limit(3)
    );
    const querySnapshot = from(getDocs(topAlbumsQuery));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IAlbum[]
      )
    );
  }

  /**
   *
   *    SEARCH
   *
   */

  getSearchAlbum(filterText?: string): Observable<IAlbum[]> {
    const groupCollection = collectionGroup(this.db, 'album');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IAlbum[]
      ),
      map((albums) => {
        // Filtre les albums par visibilité et par nom, year ou catégories si filterText est défini
        return albums.filter(
          (album) =>
            album.visibility &&
            (!filterText ||
              album.nom.toLowerCase().includes(filterText.toLowerCase()) ||
              album.year.includes(filterText) ||
              album.categ.some((category) =>
                category.toLowerCase().includes(filterText.toLowerCase())
              ))
        );
      })
    );
  }
  getSearchSong(filterText?: string): Observable<ISong[]> {
    const groupCollection = collectionGroup(this.db, 'song');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as ISong[]
      ),
      map((songs) => {
        // Filtre les songs par visibilité et par nom, year ou catégories si filterText est défini
        return songs.filter(
          (song) =>
            song.visibility &&
            (!filterText ||
              song.title.toLowerCase().includes(filterText.toLowerCase()))
        );
      })
    );
  }
  getSearchArtist(filterText?: string): Observable<IArtist[]> {
    const groupCollection = collectionGroup(this.db, 'artist');
    const querySnapshot = from(getDocs(groupCollection));
    return querySnapshot.pipe(
      map(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            idDocument: doc.id,
            ...doc.data(),
          })) as IArtist[]
      ),
      map((artits) => {
        // Filtre les artits par visibilité et par nom, year ou catégories si filterText est défini
        return artits.filter(
          (artist) =>
            artist.active &&
            (!filterText ||
              artist.fullname.toLowerCase().includes(filterText.toLowerCase()))
        );
      })
    );
  }

  getSearchResults(
    filterText: string
  ): Observable<{ albums: IAlbum[]; songs: ISong[]; artists: IArtist[] }> {
    const albumCollection = collectionGroup(this.db, 'album');
    const songCollection = collectionGroup(this.db, 'song');
    const artistCollection = collectionGroup(this.db, 'artist');

    const albumQuery = from(getDocs(albumCollection)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({
          albumId: doc.id,
          ...(doc.data() as IAlbum),
        }))
      )
    );

    const songQuery = from(getDocs(songCollection)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({
          songId: doc.id,
          ...(doc.data() as ISong),
        }))
      )
    );
    const artistQuery = from(getDocs(artistCollection)).pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({
          arttistId: doc.id,
          ...(doc.data() as IArtist),
        }))
      )
    );

    return combineLatest([albumQuery, songQuery, artistQuery]).pipe(
      map(([albums, songs, artists]) => ({
        albums: albums.filter(
          (album) =>
            album.visibility &&
            (album.nom.toLowerCase().includes(filterText.toLowerCase()) ||
              album.year.includes(filterText) ||
              album.categ.some((category) =>
                category.toLowerCase().includes(filterText.toLowerCase())
              ))
        ),
        songs: songs.filter(
          (song) =>
            song.visibility &&
            song.title.toLowerCase().includes(filterText.toLowerCase())
        ),
        artists: artists.filter(
          (artist) =>
            artist.active &&
            artist.fullname.toLowerCase().includes(filterText.toLowerCase())
        ),
      }))
    );
  }

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
