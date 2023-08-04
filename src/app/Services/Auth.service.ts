import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://unicomer.up.railway.app';

  constructor(private http: HttpClient) { }


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUserByDocumentNumber(documentNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/dni/${documentNumber}`);
  }

  register(newUser: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, newUser);
  }
}
