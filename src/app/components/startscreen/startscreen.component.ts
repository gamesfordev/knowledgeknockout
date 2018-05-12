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
  constructor(protected localStorage: LocalStorage,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  startGame(event) {
    if (event.keyCode === 13) {
      // whatever validation
      this.localStorage.setItem('currentUser', this.username ).subscribe(() => {
        this.router.navigateByUrl('/game');
      });
    }
  }
}
