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
    this.authService.authenticate(this.formLogin.value).pipe().subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/dashboard']);

      },);
     
      // this.formLogin.reset();
    }
 
}
