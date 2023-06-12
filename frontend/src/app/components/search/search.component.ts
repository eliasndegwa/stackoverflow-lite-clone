import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
search=''
constructor(activatedRoute:ActivatedRoute,private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.search){
      this.search=params.search
    }
  })
}

doSearch():void{
  // if(term){
  //   this.router.navigateByUrl('/search/' + term)
  // }
}
}