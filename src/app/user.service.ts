import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl = 'http://localhost:/api/users';
private loginUrl = 'http://localhost:/api';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http:HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`)
    .pipe(
       tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsersList', []))
    );
  }
  private  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


}
