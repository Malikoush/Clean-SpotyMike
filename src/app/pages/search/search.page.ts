import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonModal,
  IonLabel,
  IonToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IAlbum, IArtist, ISong } from 'src/app/core/interfaces/user';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonLabel,
    IonModal,
    IonButton,
    IonButtons,
    IonSearchbar,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonModal,
    IonLabel,
    CardComponent,
  ],
})
export class SearchPage implements OnInit {
  categories = [
    {
      image: 'assets/rap.jpeg',
      name: 'RAP',
    },
    {
      image: 'assets/r&b.webp',
      name: 'R&B',
    },
    {
      image: 'assets/soul.jpeg',
      name: 'Soul',
    },
    {
      image: 'assets/hiphop.jpeg',
      name: 'Hiphop',
    },
    {
      image: 'assets/jazz.jpeg',
      name: 'Jazz',
    },
    {
      image: 'assets/rap.jpeg',
      name: 'Le Mike',
    },
    {
      image: 'assets/country.jpeg',
      name: 'Country',
    },
    {
      image: 'assets/gospel.png',
      name: 'Gospel',
    },
    {
      image: 'assets/rnb.jpeg',
      name: "R'n'B",
    },
  ];
  searchInput: string = '';
  showResults = false;
  private firebase = inject(FirestoreService);

  constructor() {
    addIcons({
      optionsOutline,
    });
  }
  selectedFilter: string = '';

  artist: IArtist = {} as IArtist;
  searchResults: { albums: IAlbum[]; songs: ISong[]; artists: IArtist[] } = {
    albums: [],
    songs: [],
    artists: [],
  };

  ngOnInit() {}

  onFilterChange(filterName: string, event: any) {
    if (event.detail.checked) {
      this.selectedFilter = filterName;
    }
  }
  search() {
    if (this.searchInput.trim() === '') {
      this.showResults = false;
      return;
    }
    this.showResults = true;
    this.firebase.getSearchResults(this.searchInput).subscribe((data) => {
      this.searchResults = data;
      console.log(this.searchResults);

      if (this.searchResults.songs.length > 0) {
        this.searchResults.songs.forEach((song) => {
          this.firebase.getOneArtist(song.idArtist).subscribe((data) => {
            this.artist = data;
          });
        });
      }
    });
  }
}
