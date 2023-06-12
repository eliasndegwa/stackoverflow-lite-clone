import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, RouterModule, SearchComponent]
})
export class HomeComponent {
questions:Question[]=[]

constructor( private questionService:QuestionService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.search){
        this.questions=questionService.getBySearch(params.search)
      }else if(params.tag){
        this.questions=this.questionService.getByTag(params.tag)
      }
      else{
        this.questions=questionService.getAll()
      }

    })
  }
}
