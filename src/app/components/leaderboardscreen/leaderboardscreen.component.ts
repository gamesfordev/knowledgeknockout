import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Observable} from 'rxjs';
import { ScoreupdateService } from '../../services/scoreupdate/scoreupdate.service';

@Component({
  selector: 'app-leaderboardscreen',
  templateUrl: './leaderboardscreen.component.html',
  styleUrls: ['./leaderboardscreen.component.css']
})
export class LeaderboardscreenComponent implements OnInit {

  scores;
  username: string;
  score;
  maxScore;
  constructor(private router: Router,
              private af: AngularFireDatabase,
              private localStorage: LocalStorage,
              private scoreupdate: ScoreupdateService
            ) { }

  startAgain(): void {
    this.router.navigateByUrl('/start');
  }

  ngOnInit() {
    this.score = this.scoreupdate.score;
    this.maxScore = this.scoreupdate.MAX_SCORE;
    
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

  }

  voteUs(): void {
    window.open('http://www.angularattack.com/entries/169-nullpointer/vote', '_blank');
  }

  tweetNow(): void {
    if(this.score >= 100)
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('I got MasterGeek badge on #KnowledgeKnockout ' + window.location.origin) , '_blank');
    else
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('My MasterGeek level is  ' + this.score + '% on #KnowledgeKnockout ' + window.location.origin) , '_blank');
  }

}

export interface Userdata {
  user: string;
  score: number;
}
