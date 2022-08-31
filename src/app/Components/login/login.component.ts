import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var email = this.loginForm.value.email;
    var pwd = this.loginForm.value.pwd;

    if(this.loginForm.valid){
      alert("login success")
      this.router.navigateByUrl("")
    }
    else{
      alert("invalid form")
    }

  }

}
