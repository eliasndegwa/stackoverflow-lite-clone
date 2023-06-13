import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./components/landing/landing.component').then(c=>c.LandingComponent)},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then(c=>c.RegisterComponent)},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)},
  {path:'questions',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'question/:id',loadComponent:()=>import('./components/question/question.component').then(c=>c.QuestionComponent)},
  {path:'search/:search',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'tags',loadComponent:()=>import('./components/tags/tags.component').then(c=>c.TagsComponent)},
  {path:'tag/:tag',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'users',loadComponent:()=>import('./components/users/users.component').then(c=>c.UsersComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
