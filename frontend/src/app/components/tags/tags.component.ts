import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from 'src/app/services/questionService/question.service';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[]
  constructor( private questionService:QuestionService){
      this.tags=questionService.getAllTags()
    }
}
