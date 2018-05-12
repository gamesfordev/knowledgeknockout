import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { ScoreupdateService } from '../../../services/scoreupdate/scoreupdate.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public time = 0;
  public user = null;

  constructor(protected localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.user = user;
    });

  }

}
