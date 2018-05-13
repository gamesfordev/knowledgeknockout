import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {SoundService} from '../../services/sound/sound.service';


@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css'],
})
export class StartscreenComponent implements OnInit {
  username: string = null;
  error: string = null;
  savedUser: string = null;
  key;
  allusers = [];

  constructor(
    protected localStorage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFireDatabase,
    private sounds: SoundService
  ) {}


  ngOnInit() {
    let m1 = new Image();
    m1.src = '/assets/img/chalkboard.jpg';

    this.localStorage.getItem('currentUser').subscribe(user => {
      this.savedUser = user;
      this.username = user;
    });

    this.localStorage.getItem('key').subscribe(key => {
      this.key = key;
    });





  }

  userExists(func) {
    if (this.username !== this.savedUser) {
      this.af.list('score', ref => ref.equalTo(this.username).orderByChild('user')).valueChanges().subscribe((data) => {
        const exists = data.length > 0 ? true : false;
        console.log(data.length);
        this.localStorage.removeItem('key');
        func(exists);
      });
    } else {
      func(false);
    }
  }

  startGame(event) {
    this.error = null;
    if (this.username.length > 4) {
      this.userExists((exists) => {
        if (!exists) {
          this.sounds.playStart();
          this.localStorage.setItem('currentUser', this.username).subscribe(() => {
            this.router.navigateByUrl('/game');
          });
        } else {
          this.sounds.playWarning();
          this.error = 'Oopss, Username already taken :-(  ';
        }

      });


    } else {
      this.sounds.playWarning();
      this.error = 'Username should have at least 5 characters ';
    }
  }

  voteUs(): void {
    window.open(
      'http://www.angularattack.com/entries/169-nullpointer/vote',
      '_blank'
    );
  }
}
