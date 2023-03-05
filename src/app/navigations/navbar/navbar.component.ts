import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  loginStatus: boolean = false;
 user: any;
  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit(): void {
    this.authService.hasToken.subscribe((data: boolean) => {
      
      this.loginStatus = data;
      this.user = this.authService.getUser();
      console.log('hasToken', data);
      console.log(this.user);
      
    });
    this.loginStatus = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        console.log(data);
        localStorage.removeItem('token');
        this.authService.hasToken.emit(false);
        this.router.navigate(['/login']);
      }
    });
  }

}
