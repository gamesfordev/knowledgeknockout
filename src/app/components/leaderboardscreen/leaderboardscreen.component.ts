import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaderboardscreen',
  templateUrl: './leaderboardscreen.component.html',
  styleUrls: ['./leaderboardscreen.component.css']
})
export class LeaderboardscreenComponent implements OnInit {

  constructor(private router: Router) { }

  startAgain(): void {
    this.router.navigateByUrl('/start');
  }

  ngOnInit() {
  }

}
