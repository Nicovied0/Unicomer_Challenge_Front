import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/cards';

  getProfile() {
    const token = localStorage.getItem('tokenUnicomer');
    if (!token) {
      console.log("No se encontró un token en el localStorage");
      return false;
    }
    return true

  }
  getData() {
    const profile = localStorage.getItem('userUnicomer');
    if (profile) {
      const profileJson = JSON.parse(profile); // Convertir a objeto JSON
      console.log(profileJson);
      return profileJson;
    }
    return false;
  }




}
