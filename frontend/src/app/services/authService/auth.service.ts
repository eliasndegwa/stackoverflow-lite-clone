import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/user'
  getAll():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.apiUrl)
  }

  getByCode(code:any):Observable<Iuser[]>{  
    return this.http.get<Iuser[]>(this.apiUrl + '/' + code)
  }

  registerUser(inputData:any){
    return this.http.post(this.apiUrl,inputData)
  }

  updateUser(code:string,inputData:any){
    return this.http.put(this.apiUrl+'/'+code,inputData) 
  }
}
