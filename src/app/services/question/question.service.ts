import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../mockdata/questionslist';
import { Question } from '../../classes/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[];

  getQuestions(): Question[] {
    return  QUESTIONS;
  }

  getMax(): number {
    let max = 0;
    this.getQuestions().forEach((q) => {
      max += q.points;
    });

    return max;
  }

  constructor() { }
}
