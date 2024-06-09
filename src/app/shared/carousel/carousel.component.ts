import { Component, Input, OnInit, inject } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Song } from '../../core/interfaces/song';
import { Router } from '@angular/router';
import { IAlbum, IArtist, ISong } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit {
  @Input() title?: string = '';
  @Input() nameArtist: string = '';
  @Input() img?: string = '';
  @Input() url: string = '';
  @Input() type?: string = '';
  private router = inject(Router);
  private firestore = inject(FirestoreService);
  artist: IArtist = {} as IArtist;
  constructor() {}

  ngOnInit() {
    if (this.type === 'song') {
      this.firestore.getOneArtist(this.nameArtist).subscribe((data) => {
        this.artist = data;
      });
    }
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
