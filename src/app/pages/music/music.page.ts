import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IArtist, IPlaylist, ISong } from 'src/app/core/interfaces/user';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterOutlet,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    IonIcon,
  ],
})
export class MusicPage implements OnInit {
  private activetedRoute = inject(ActivatedRoute);
  title = '';
  userIdDocument: string = '';
  private localStorageService = inject(LocalstorageService);
  private firebase = inject(FirestoreService);
  songs: ISong[] = [];
  artist: IArtist[] = [];
  playlist: IPlaylist[] = [];

  ok: string[] = [];
  constructor() {
    addIcons({
      ellipsisHorizontalOutline,
    });
  }

  ngOnInit() {
    this.userIdDocument = this.localStorageService.getElement('userIdDocument');
    this.title = this.activetedRoute.snapshot.params['name'];
    console.log(this.title);

    // this.firebase
    //   .getUserPlaylistsById(this.userIdDocument, this.title)
    //   .subscribe((res) => {
    //     this.playlist = res;
    //     this.playlist.map((playlist) => {
    //       this.ok = playlist.song;

    //       this.ok.map((song) => {

    //       });
    //     });
    //   });
    // this.firebase.getSongsByIds('1').subscribe((res) => {
    //   this.songs = res;
    //   console.log(this.songs);
    // });

    // this.firebase.getUserArtist(this.userIdDocument).subscribe((res) => {
    //   this.artist = res;
    //   console.log(this.artist);
    // });

    // this.firebase
    //   .getUserPlaylistsById(this.userIdDocument, this.title)
    //   .subscribe((res) => {
    //     res.map((playlist) => {
    //       this.song = playlist.song;
    //       console.log(this.song);
    //     });
    //   });

    this.firebase. getAllSong().subscribe((res) => {
      this.songs = res;
      console.log(this.songs);
    });
    this.firebase.getSongsByIds(["4I8eu6xxOOtU44CgIBXc","oo1JYDAgz8Wm2YyHcGh6"]).subscribe((res) => {
      this.songs = res;
      console.log(this.songs);
    });
    
  }
}
