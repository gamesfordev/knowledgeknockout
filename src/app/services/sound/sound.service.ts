import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private start: HTMLMediaElement;
  private warning: HTMLMediaElement;
  private success: HTMLMediaElement;

  constructor() {
    this.start = new Audio('assets/sounds/start.ogg');
    this.warning = new Audio('assets/sounds/warning.mp3');
    this.success = new Audio('assets/sounds/success.mp3');
    this.start.load();
    this.warning.load();
    this.success.load();
  }

  playStart() {
    return this.start.play();
  }

  playWarning() {
    return this.warning.play();
  }

  playSuccess() {
    return this.success.play();
  }
}
