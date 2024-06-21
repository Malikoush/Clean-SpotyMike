
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IplaylistMusic{
  audio:HTMLAudioElement;
  position:number;
  status:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() {
    this.audio= new Audio();
    this.playlist$ = new BehaviorSubject<IplaylistMusic[]>([]);
    this.isPlay$ = new BehaviorSubject<boolean>(false);
   }

  private audio: HTMLAudioElement;
  private playlist$: BehaviorSubject<IplaylistMusic[]>
  private isPlay$: BehaviorSubject<boolean>

   load(id:string = ''){
      this.audio = new Audio('url/${id}')
      this.audio.load();
   }
  
  play(){

    
    this.audio.play();
    this.isPlay$.next(true);

  }

  pause(){
    this.audio.pause();
}

  stop(){
      this.pause();
      this.audio.currentTime = 0;//time playing song zero
      this.isPlay$.next(false);
  }

  next(){

  }

  prev(){

  }

  loop(){

  }
}
