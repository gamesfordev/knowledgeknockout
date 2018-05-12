import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnChanges {

  @Input() time = 0;
  @Input() score = 0;

  private mins = '';
  private secs = '';
  public user = null;

  constructor(protected localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.user = user;
    });

  }

  ngOnChanges() {
     this.mins = (Math.floor(this.time / 60)).toString().padStart(2, '0');
     this.secs = (this.time % 60).toString().padStart(2, '0');
  }

}
