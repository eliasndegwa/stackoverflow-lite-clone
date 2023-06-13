import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,HttpClientModule,ToastrModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 constructor(private formBuilder:FormBuilder,private router:Router,private authService:AuthService,private toastr:ToastrService){}


registerForm=this.formBuilder.group({
  name:this.formBuilder.control('',Validators.required),
  email:this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
  password:this.formBuilder.control('',Validators.required),
  isAdmin:this.formBuilder.control(false),
})

doRegister(){
  console.log(this.registerForm.value);
  
  if(this.registerForm.valid){
    this.authService.registerUser(this.registerForm.value).subscribe(res=>{
      this.toastr.success('Registered successfully')
      this.router.navigate(['login'])
    })
  }else{
    this.toastr.warning('Please enter correct details')
  }
}
}
