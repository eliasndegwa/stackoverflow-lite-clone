import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
  {path:'',loadComponent:()=>import('./components/landing/landing.component').then(c=>c.LandingComponent)},
  {path:'questions',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'question/:id',loadComponent:()=>import('./components/question/question.component').then(c=>c.QuestionComponent)},
  {path:'search/:search',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'tags',loadComponent:()=>import('./components/tags/tags.component').then(c=>c.TagsComponent)},
  {path:'tag/:tag',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)}
];

