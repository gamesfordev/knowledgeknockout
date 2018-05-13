import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreupdateService {

  public score: number = 0;
  public MAX_SCORE: number = 10;

  constructor() { }
}
