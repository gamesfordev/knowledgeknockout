import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-leaderboardscreen',
  templateUrl: './leaderboardscreen.component.html',
  styleUrls: ['./leaderboardscreen.component.css']
})
export class LeaderboardscreenComponent implements OnInit {

  scores;
  username: string;
  constructor(private router: Router,
              private af: AngularFireDatabase,
              private localStorage: LocalStorage) { }

  startAgain(): void {
    this.router.navigateByUrl('/start');
  }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.username = user;
    });

    const items = this.af.list('score').valueChanges();

    this.scores= items.map(data => {
      data.sort((a: Userdata, b: Userdata) => {
        return b.score - a.score;
      });
      return data
    });

    this.scores.forEach((v)=>{
      console.log(v)
    })


  }

  voteUs(): void {
    window.open('http://www.angularattack.com/entries/169-nullpointer/vote', '_blank');
  }

}

export interface Userdata {
  user: string;
  score: number;
}
