import { Component, OnInit } from '@angular/core';
import { Question } from '../../classes/question';
import { QuestionService } from '../../services/question/question.service';
import { ScoreComponent } from '../../components/gamescreen/score/score.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessage } from '../../classes/errormessage';

const INTERVAL:number = 1000;

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
  timetogo: number = 120;
  errormessages: ErrorMessage[] = new Array();
  wronngtimes: number = 0;
  gamestatus: string = 'intro';
  effect1:string;
  effect2:string;
  introtext:string;

  intro:any = [
    {
      action : () => {
        this.introtext = "Enter commands in terminal ⌨";
        console.log(this.introtext);
        this.effect1 = 'blink';
      }
    },
    {
      action : () => {
        this.introtext = "See your score and time 🔥";
        this.effect1 = '';
        this.effect2 = 'blink';
      }
    },    
    {
      action : () => {
        this.introtext = "Let's Start";
        this.effect2 = '';
      }
    }
    ,    
    {
      action : () => {
        this.startGame();
      }
    }
  ];
  

  constructor(private questionservice: QuestionService, private router: Router) { 
  }

  getQuestions() :void {
    this.questions = this.questionservice.getQuestions();
  }

  randomQuestion(): void {
    this.question = this.questions[Math.trunc((Math.random() * 10000) % this.questions.length)];
    console.log(this.question);
  }

  clearErrorMessages() : void {
    this.errormessages = new Array();
  }

  addErrorMessage(error : ErrorMessage) : void {
    this.errormessages.push(error);
  }

  processChildInput(input: string): void {
    if(this.question.answer == input) {
      this.score += this.question.points;
      this.randomQuestion();
      this.wronngtimes = 0;
      this.addErrorMessage({
        type : 'SUCCESS',
        content : 'Perfect!! You did it.' 
      });
    }
    else {
      if(this.wronngtimes < 2) {
        this.wronngtimes++;
        this.addErrorMessage({
          type : 'ERROR',
          content : 'The command you entered is incorrect. ' + this.wronngtimes + ' of 3 incorrect tries.' 
        });
      }
      else{
        this.score = this.score > 0 ? (this.score - 1) : this.score;
        this.addErrorMessage({
          type : 'WARNING',
          content : 'The command you entered is incorrect. 1 point is reduced due to 3 incorrect tries.'
        });
        this.randomQuestion();
        this.wronngtimes = 0;
      }
    }
    
  }

  clearHint(): void {
    if(this.errormessages.length > 10) {
      this.addErrorMessage({
        type : 'INFO',
        content : 'The command you entered is incorrect. 1 point is reduced due to 3 incorrect tries.'
      });
    }
  }

  startGame(): void {
    
    this.getQuestions();
    this.randomQuestion();
    this.timer = setInterval(()=> {
      console.log(this.timetogo);
      if(this.timetogo == 0) {
        clearInterval(this.timer);
        this.router.navigateByUrl('/finish');
      }
      this.timetogo --;
    },
    INTERVAL);
  }

  ngOnInit() {
    for(let i = 0; i < this.intro.length; i++) {
      setTimeout(() => {
        this.intro[i].action();
      }, 1500 * (i+1) );
    }

    
  }

}
