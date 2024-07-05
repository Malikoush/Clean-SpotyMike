import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { ellipsisHorizontal, idCard } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalArtistComponent } from 'src/app/shared/modal/modal-artist/modal-artist.component';
import { IArtist, IPlaylist, IUser } from 'src/app/core/interfaces/user';
import { IAlbum } from 'src/app/core/interfaces/user';
import { ISong } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { CardComponent } from 'src/app/shared/card/card.component';
import { switchMap, tap } from 'rxjs';
import { TinyCardComponent } from 'src/app/shared/tiny-card/tiny-card.component';

@Component({
  selector: 'app-profilartist',
  templateUrl: './profilartist.page.html',
  styleUrls: ['./profilartist.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonAvatar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    TinyCardComponent,
  ],
  providers: [ModalController],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilartistPage implements OnInit {
  private firebase = inject(FirestoreService);
  private modalCtl = inject(ModalController);
  selectedIndex: number | null = 0;
  componentToShow: string | null = 'album';
  userIdDocument: string = '';
  artistIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  playlists: IPlaylist[] = [];
  albums: IAlbum[] = [];
  songs: ISong[] = [];
  
  artist: IArtist = {} as IArtist;
  user: IUser = {} as IUser;
  followers: IUser[] = [];
  followersids: String[] | undefined = [];
  followings: IUser[] = [];
  followingsids: String[] | undefined = [];
  constructor() {
    addIcons({ ellipsisHorizontal });
  }
  async onPasswordLostModal() {
    const modal = await this.modalCtl.create({
      component: ModalArtistComponent,
    });
    await modal.present();
  }
  ngOnInit() {
    this.userIdDocument = this.localStorageService.getElement('userIdDocument');
    this.artistIdDocument = this.localStorageService.getElement('artistId');
    //console.log(this.userIdDocument);

    //get albumby idartist
    //get song by idartist
    //get follower by id 
    //get following by id
    //this.albumService.getAlbumsByArtist(artistId);
  
    this.firebase.getArtistAlbums(this.artistIdDocument).subscribe((res) => {
   
      
      this.albums = res;
    });
    
    this.firebase.getArtistSongs(this.artistIdDocument).subscribe((res) => {
     
      this.songs = res;
   
      console.log(res);
      
    });

    //Récupérer info user et following
    this.firebase
      .getUser(this.userIdDocument)
      .pipe(
        tap((user) => {
          if (user && user.following) {
            this.followersids = user.following;
            this.user = user;
          }
        }),
        switchMap((user) => {
          if (user && user.following && user.following.length > 0) {
            return this.firebase.getUsersByIds(user.following);
          } else {
            return [];
          }
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.followings = res;
      });
    //Récupérer info artiste et follower
    this.firebase.getOneArtist(this.artistIdDocument).pipe(
      tap(artist => {
        if (artist && artist.follower) {
          this.followersids = artist.follower;
          this.artist = artist;
        }
      }),
      switchMap(artist => {
        if (artist && artist.follower && artist.follower.length > 0) {
          return this.firebase.getUsersByIds(artist.follower);
        } else {
          return ([]);
        }
      })
    ).subscribe((res) => {
      console.log(res);
      this.followers = res;
    });

 
  }

  onItemClick(index: number) {
    this.selectedIndex = index;
    switch (index) {
      case 0:
        this.componentToShow = 'album';
        break;
      case 1:
        this.componentToShow = 'song';
        break;
      case 2:
        this.componentToShow = 'follower';
        break;
      case 3:
        this.componentToShow = 'following';
        break;

      default:
        this.componentToShow = null;
        break;
    }
  }
}
