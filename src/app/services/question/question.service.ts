import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../mockdata/questionslist';
import { Question } from '../../classes/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[];

  getQuestions() : Question[] {
    return  QUESTIONS;
  }

  constructor() { }
}
