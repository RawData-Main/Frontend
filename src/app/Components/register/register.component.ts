import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    lname:['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    email:['',[Validators.required,Validators.email]],
    pwd:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]]
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var fname = this.registerForm.value.fname;
    var lname = this.registerForm.value.lname;
    var email = this.registerForm.value.email;
    var pwd = this.registerForm.value.pwd;

    if(this.registerForm.valid){
      alert("Register success")
        this.router.navigateByUrl("/login")
    }
    else{
      alert("invalid form")
    }
  }

}
