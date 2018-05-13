import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {Userdata} from '../leaderboardscreen/leaderboardscreen.component';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartscreenComponent implements OnInit {

  username: string = null;
  error: string = null;
  allusers = [];
  constructor(protected localStorage: LocalStorage,
              private router: Router,
              private route: ActivatedRoute,
              private af: AngularFireDatabase,
             ) { }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.username = user;
    });





  }

  userExists(func) {
    this.af.list('score', ref => ref.equalTo(this.username).orderByChild('user')).valueChanges().subscribe((data) => {
      const exists = data.length > 0 ? true : false;
      console.log(data.length);
      func(exists);
    });
  }

  startGame(event) {
    this.error = null;
    if (this.username.length > 4) {

      this.userExists((exists) => {
        if (!exists) {
          this.localStorage.setItem('currentUser', this.username).subscribe(() => {
            this.router.navigateByUrl('/game');
          });
        } else {
          this.error = 'Oopss, Username already taken :-(  ';
        }
      });


    } else {
      this.error = 'Username should have at least 5 characters ';
    }
  }

  voteUs(): void {
    window.open('http://www.angularattack.com/entries/169-nullpointer/vote', '_blank');
  }
}
