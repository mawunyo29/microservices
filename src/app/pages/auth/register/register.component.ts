import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 
  formRegister : FormGroup;

  passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  constructor(private authService: AuthService , private router: Router) { 
    this.formRegister = new FormGroup({   
      name: new FormControl('' ,Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('' ,Validators.required),
    });

  }

  ngOnInit(): void {

 if(this.formRegister.valid){
   console.log('form is valid', this.formRegister.value);
  }
  }
  
  register(){
   
    console.log(this.formRegister.value);
    
    this.authService.store( this.formRegister.value).pipe().subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
       this.formRegister.reset();
       this.router.navigate(['/dashboard']);
      }
    );
  }
  get name(){
    return this.formRegister.get('name');
  }
  get email(){
    return this.formRegister.get('email');
  }
  get password(){
    return this.formRegister.get('password');
  }
  get password_confirmation(){
    return this.formRegister.get('password_confirmation');
  }
  

  handleErros(controlName: string, errorName: string){
    return this.formRegister.controls[controlName].hasError(errorName);
  }

}
