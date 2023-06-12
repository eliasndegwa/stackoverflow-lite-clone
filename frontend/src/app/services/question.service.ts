import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { sampleQuestions, sampleTags } from 'src/data';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getAll():Question[]{
    return sampleQuestions
  }

  getBySearch(search:string){
      return this.getAll().filter(question => question.heading.toLowerCase().includes(search.toLowerCase()))
  }

  getById(questionId:string):Question{
    return this.getAll().find(question=>question.id==questionId)?? new Question()
  }

  getAllTags():Tag[]{
    return sampleTags
  }

  getByTag(tag:string):Question[]{
    return this.getAll().filter(question=>question.tags?.includes(tag))
  }
}
