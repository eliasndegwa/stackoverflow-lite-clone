import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/models/question';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
question!:Question
constructor( private questionService:QuestionService, activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params)=>{
    if(params.id){
      this.question=questionService.getById(params.id)
    }
  })
}
}
