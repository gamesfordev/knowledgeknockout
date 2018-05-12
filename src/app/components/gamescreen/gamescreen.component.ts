import { Component, OnInit } from '@angular/core';
import { Question } from '../../classes/question';
import { QuestionService } from '../../services/question/question.service';
import { ScoreComponent } from '../../components/gamescreen/score/score.component';

const INTERVAL:number = 5000;

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css']
})
export class GamescreenComponent implements OnInit {

  questions: Question[];
  question: Question = null;
  timer: any;
  score: number = 0;

  

  constructor(private questionservice: QuestionService) { 
  }

  getQuestions() :void {
    this.questions = this.questionservice.getQuestions();
  }

  randomQuestion(): void {
    this.question = this.questions[Math.trunc((Math.random() * 10000) % this.questions.length)];
    console.log(this.question);
  }

  ngOnInit() {
    this.getQuestions();
    this.timer = setInterval(()=> {
      this.randomQuestion();
      this.score ++;
    },
    INTERVAL);
    
  }

}
