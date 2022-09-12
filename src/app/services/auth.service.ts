import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(username:any,email:any,password:any,password2:any){
    
    const data = {
      username,
      email,
      password,
      password2
    }

    return this.http.post('https://empty-sites-show-202-164-133-86.loca.lt/user/signup/customer/',data)
  }


  login(username:any,password:any){

    const data = {
      username,
      password
    }
    localStorage.setItem("CurrentUname",username)

    return this.http.post('https://empty-sites-show-202-164-133-86.loca.lt/user/login/',data)
  }
  
}


