import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  constructor(private authser: AuthService) {
    
  }
  ngOnInit(): void {
    this.user = this.authser.getUser();
    console.log(this.user.name);
  }
  onload() {
  
  }


}
