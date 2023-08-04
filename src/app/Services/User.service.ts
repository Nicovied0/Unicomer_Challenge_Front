import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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

  getInfo() {
    const profile = localStorage.getItem('userUnicomer');
    if (profile) {
      const profileJson = JSON.parse(profile);
      return of(profileJson); // Importa 'of' desde 'rxjs' si no lo tienes importado
    }
    return of(null);

  }




}
