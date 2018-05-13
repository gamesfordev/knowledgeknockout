import { Injectable } from '@angular/core';

const VOLUME = 0.2;

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private start: HTMLMediaElement;
  private warning: HTMLMediaElement;
  private success: HTMLMediaElement;
  private error: HTMLMediaElement;
  private geekMaster: HTMLMediaElement;
  private gameOver: HTMLMediaElement;
  private ticking: HTMLMediaElement;
  private submit: HTMLMediaElement;

  constructor() {
    this.start = new Audio('assets/sounds/start.ogg');
    this.warning = new Audio('assets/sounds/warning.mp3');
    this.success = new Audio('assets/sounds/success.mp3');
    this.error = new Audio('assets/sounds/error.mp3');
    this.geekMaster = new Audio('assets/sounds/geekMaster.mp3');
    this.gameOver = new Audio('assets/sounds/Game-over-sound.mp3');
    this.ticking = new Audio('assets/sounds/ticking.mp3');
    this.submit = new Audio('assets/sounds/add.ogg');
    Object.keys(this).map(prop => {
      this[prop].load();
      this[prop].volume = VOLUME;
      console.log(this[prop]);
    });
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

  playError() {
    return this.error.play();
  }

  playGeekMaster() {
    return this.geekMaster.play();
  }

  playGameOver() {
    return this.gameOver.play();
  }

  playTicking() {
    return this.ticking.play();
  }

  playSubmit() {
    return this.submit.play();
  }
}
