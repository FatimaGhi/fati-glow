import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   private apiUrl = 'http://localhost:3000/register';

  constructor(private http: HttpClient) { }
  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

   login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/login', { email, password });
  }
}
