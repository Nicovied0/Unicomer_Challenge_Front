import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) { }


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUserByDocumentNumber(documentNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${documentNumber}`);
  }

  register(newUser: any): Observable<any> {
    const url = `${this.apiUrl}/register`; // Cambia esto a la URL para el registro en tu backend
    return this.http.post(url, newUser);
  }
}
