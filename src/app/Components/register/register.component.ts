import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    // fname: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
    username: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]*')]],
    password2: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]*')]]
  })

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    // var fname = this.registerForm.value.fname;
    var username = this.registerForm.value.username;
    var email = this.registerForm.value.email;
    var password = this.registerForm.value.password;
    var password2 = this.registerForm.value.password2;



    if (this.registerForm.valid) {
      this.auth.register(username,email,password,password2).subscribe((result: any) => {
        if (result) {
          // alert(result.message)
          alert("register success")
          this.router.navigateByUrl("/login")
        }
      },
        result => {
          // alert("result.error.message")
          alert("user already exist")
        }
      )
      // alert("Register success")
    }
    else {
      alert("invalid form")
    }
  }

}
