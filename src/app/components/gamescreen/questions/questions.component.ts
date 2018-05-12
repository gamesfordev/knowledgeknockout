import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../classes/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() question: Question;
  @Input() introtext:string;
  
  constructor() { }

  ngOnInit() {
  }

}
