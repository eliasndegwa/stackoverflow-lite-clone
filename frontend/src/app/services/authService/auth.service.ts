import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/user'
  getAll(){
    return this.http.get(this.apiUrl)
  }

  getByCode(code:any){  
    return this.http.get(this.apiUrl + '/' + code)
  }

  registerUser(inputData:any){
    return this.http.post(this.apiUrl,inputData)
  }

  updateUser(code:string,inputData:any){
    return this.http.put(this.apiUrl+'/'+code,inputData) 
  }
}
