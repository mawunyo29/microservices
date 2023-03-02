import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authUser: any;

  formLogin : FormGroup;

  constructor(private authService: AuthService , private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required] ),
    });
  }

  login(){
    this.authService.loginGuard(this.formLogin.value).pipe().subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.oauth_token);
        this.authService.hasToken = data.oauth_token;
        this.authService.isLoggedIn = true;
       
        this.authUser = data;
      },);
     
      
      this.formLogin.reset();
     

    }
 
}
