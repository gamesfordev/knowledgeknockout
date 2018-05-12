import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartscreenComponent implements OnInit {

  username: string = null;
  error: string = null;
  constructor(protected localStorage: LocalStorage,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.username = user;
    });
  }

  startGame(event) {
    this.error = null;
    //if (event.keyCode === 13) {
      if (this.username.length > 4) {
        this.localStorage.setItem('currentUser', this.username).subscribe(() => {
          this.router.navigateByUrl('/game');
        });
      } else {
        this.error = 'Username should have at least 5 characters ';
      }
    //}
  }
}
