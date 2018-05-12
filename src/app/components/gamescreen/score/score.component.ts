import { Component, OnInit } from '@angular/core';
import { ScoreupdateService } from '../../../services/scoreupdate/scoreupdate.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public score = 0;

  constructor(private scoreupdateservice: ScoreupdateService) { }

  ngOnInit() {
    
  }

}
