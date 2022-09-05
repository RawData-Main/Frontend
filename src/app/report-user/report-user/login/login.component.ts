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
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    var uname = this.loginForm.value.uname;
    var pwd = this.loginForm.value.pwd;
    
    if(this.loginForm.valid){
      alert("login success")
      this.router.navigateByUrl("/report-user/dashboard")
    }
    else{
      alert("login failed")
    }
  }

}
