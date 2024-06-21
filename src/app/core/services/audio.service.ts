import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IPlaylistMusic {
  audio: HTMLAudioElement;
  position: number;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement;
  private playlist$: BehaviorSubject<IPlaylistMusic[]>;
  private isPlay$: BehaviorSubject<boolean>;

  constructor() {
    this.audio = new Audio();
    this.playlist$ = new BehaviorSubject<IPlaylistMusic[]>([]);
    this.isPlay$ = new BehaviorSubject<boolean>(false);
  }

  load(id: string = '') {
    this.audio = new Audio(`url/${id}`);
    this.audio.load();
  }

  play() {
    this.audio.play();
    this.isPlay$.next(true);
  }

  stop() {
    this.pause();
    this.audio.currentTime = 0; // Time playing song zero
    this.isPlay$.next(false);
  }
  pause() {
    this.audio.pause();
  }
  next() {}
  prev() {}
  loop() {}
}
