import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,HttpClientModule,ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private formBuilder:FormBuilder,private router:Router,private authService:AuthService,private toastr:ToastrService){}

  userData:any;

  loginForm=this.formBuilder.group({
    email:this.formBuilder.control('',Validators.required),
    password:this.formBuilder.control('',Validators.required),
  })

  doLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.router.navigate(['questions'])
    }
  }

  openModal(){
    const modal= document.querySelector(".modal") as HTMLElement
    if(modal!==null){
      modal.style.display='block'
    }
  }
  closeModal(){
    const modal= document.querySelector(".modal") as HTMLElement
    if(modal!==null){
      modal.style.display='none'
    }
  }
  resetPassword(){
    this.closeModal()
  }
}
