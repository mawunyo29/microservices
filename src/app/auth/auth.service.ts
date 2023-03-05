import { Injectable, Output ,EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  @Output() hasToken: EventEmitter<boolean> = new EventEmitter();
  baseUrl = 'http://localhost/api';

  tokenPayload = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}` ).set('X-CSRF-TOKEN', '{{ csrf_token() }}'),
    withCredentials: true
  }
  private autUser: any;

  

  httpOptions = {
    headers: new HttpHeaders().set('X-CSRF-TOKEN', '{{ csrf_token() }}'),
    withCredentials: true
  }


  constructor(private http: HttpClient) { 
    this.getHeaders();
    
  }
  ngOnInit(): void {
    this.getHeaders();
  }

  authenticate(user: User): Observable<any> {
     return this.http.post(`${this.baseUrl}/login`, user).pipe(
      map((response: any) => {
        
        console.log(response);
        localStorage.setItem('token', response.oauth_token);
        this.hasToken.emit(true);
        return response;
      }),
     );
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

 
  



  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-TOKEN': '{{ csrf_token() }}',
      Authorization: `Bearer ${this.authToken}`,
    });
  }

  public logout() {
    const auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      withCredentials: 'true',
      Accept: 'application/json',
      'X-CSRF-TOKEN': '{{ csrf_token() }}',
      Authorization: `Bearer ${auth_token}`,
    });
    console.log(this.authToken);
    
    return this.http.post(`${this.baseUrl}/logout`, {}, { headers });
  }

  store(user: any): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}/register`, user, this.httpOptions ).pipe(
    
    
      catchError(this.handleError<any>('store'))
    );
  }
 
  private getToken() {
    return localStorage.getItem('token');
  }

 isLoggedIn() {
    return this.getToken() !== null;
  }

  getAuthUser() {
    return this.autUser;
  }

  getUser() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/user`, { headers }).subscribe({
      next: (data) => {
        this.autUser = data;
        console.log(data);
      }
    })
  }
  private readonly authToken = localStorage.getItem('authToken');
  }


