import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../mockdata/questionslist'
import { Question } from '../../classes/question'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() : Question[] {
    return QUESTIONS;
  }

  constructor() { }
}
