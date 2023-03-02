import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost/api';
  isLoggedIn = false;
  hasToken =''
  

  httpOptions = {
    headers: new HttpHeaders().set('X-CSRF-TOKEN', '{{ csrf_token() }}'),
    withCredentials: true
  }


  constructor(private http: HttpClient) { }

  loginGuard(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user).pipe(
      tap(_ => this.isLoggedIn = true),
      catchError(this.handleError('loginGuard', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  logout(): Observable<Object> {
    return this.http.post(`${this.baseUrl}/logout`, {}).pipe(
      tap(_ => this.isLoggedIn = false),
      catchError(this.handleError('logout', []))
    );
  }

  store(user: any): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}/register`, user, this.httpOptions ).pipe(
      tap((newUser: any) => console.log(`added user w/ id=${newUser.token}`)),
      tap(_ => this.isLoggedIn = true),
      catchError(this.handleError<any>('store'))
    );
  }
 

      
  }

