import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ActivatedRoute, Router } from '@angular/router';
import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css'],
})
export class StartscreenComponent implements OnInit {
  username: string = null;
  error: string = null;
  constructor(
    protected localStorage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private sounds: SoundService
  ) {}

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe(user => {
      this.username = user;
    });
  }

  startGame(event) {
    this.error = null;
    if (this.username.length > 4) {
      this.sounds.playStart();
      this.localStorage.setItem('currentUser', this.username).subscribe(() => {
        this.router.navigateByUrl('/game');
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
