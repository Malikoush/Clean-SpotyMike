import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { TinyCardComponent } from 'src/app/shared/tiny-card/tiny-card.component';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonButton, IonCard, IonIcon, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { Song } from 'src/app/core/interfaces/song';
import { arrowForwardOutline, searchOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonCard, IonButton, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ExploreContainerComponent,
   CarouselComponent,
   TinyCardComponent
  ],
 
})
export class HomePage implements OnInit {
  constructor() {

    addIcons({ searchOutline,arrowForwardOutline});
  }

  ngOnInit() {}

  songs: Song[] = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      duration: '3:45',
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fourplace.co%2Fwp-content%2Fuploads%2Fsites%2F120%2F2020%2F12%2FPink-Floyd.jpg&f=1&nofb=1&ipt=be8598fd4d9ca8ff646f2e592b1d2b3f31f037ca433585456365fded4da43944&ipo=images'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      duration: '4:20',
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2Fu4NFZ3EFUOwjo1_VT8rVpezvpBQ%3D%2F1430x1429%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F2Pac---All-Eyez-On-Me-590b79f15f9b586470a9fc41.jpg&f=1&nofb=1&ipt=0898eaf069f26b55f0ffa1ff7822b5ed2d334ab5494563722dcc9715155bc944&ipo=images'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      duration: '5:10',
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpublic-files.gumroad.com%2Fn6cx6u4llal243c43fmew42xh4yu&f=1&nofb=1&ipt=1a49ab24b32d1a401397810e13ea7a8b40e5105de61e9105fa3722b1b14a7292&ipo=images'
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      duration: '3:10',
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fff%2Fed%2Fdc%2Fffeddc30a42666319454933f5bd990ec.jpg&f=1&nofb=1&ipt=07237d25bcee4ac3f83f10b16d8ce88588b5edf1f582562a64fd24685cb8de20&ipo=images'
    },
    
    
  ];

  selectedCategory: string = 'All';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
