import { Component, Input, OnInit, inject } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Song } from '../../core/interfaces/song';
import { Router } from '@angular/router';
import { IAlbum, IArtist, ISong } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit {


  private router = inject(Router);

  constructor() {}

  ngOnInit() {}

  @Input() songs: ISong[] = [];
  @Input() artists: IArtist[] = [];
  @Input() albums: IAlbum[] = [];
  
  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
