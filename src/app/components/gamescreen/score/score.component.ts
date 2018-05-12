import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {QuestionService} from '../../../services/question/question.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnChanges {

  @Input() time = 0;
  @Input() score = 0;

  private mins = '';
  private secs = '';
  public user = null;

  public finalScore = 0;
  public max = 0;

  constructor(protected localStorage: LocalStorage,
              private questionservice: QuestionService
              ) { }

  ngOnInit() {
    this.localStorage.getItem('currentUser').subscribe((user) => {
      this.user = user;
    });

    this.max = this.questionservice.getMax();


  }

  ngOnChanges() {
    this.finalScore = (100 - ((this.score / this.max) * 100));

    console.log('score' + (100 - ((this.score / this.max) * 100)));
     this.mins = (Math.floor(this.time / 60)).toString().padStart(2, '0');
     this.secs = (this.time % 60).toString().padStart(2, '0');
  }

}
