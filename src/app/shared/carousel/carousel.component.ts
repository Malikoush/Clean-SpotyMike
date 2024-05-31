import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Song } from '../../core/interfaces/song';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() songs: Song[] = [];
}
