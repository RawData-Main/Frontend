import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      this.auth.login(username, password).subscribe((result: any) => {
        if (result) {
          // store token to localstorage

          // localStorage.setItem("token",JSON.stringify(result.token))

          // alert(result.message)
          alert("login success")
          this.router.navigateByUrl("")
        }
      },
        (result) => {
          // alert(result.error.message);
          alert("invalid password")
        }
      )
    }
    else {
      alert("invalid form")
    }

  }

}
