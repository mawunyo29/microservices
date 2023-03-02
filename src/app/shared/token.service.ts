import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private issuer = {
    login: 'http://localhost/api/login',
    register: 'http://localhost/api/register'
  }
  constructor() { }

  handleData(token:any){
    
  }
}
