import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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


  // async updateUser(id: string, userData: any) {
  //   const url = `https://bvscback.vercel.app/users/${id}`;
  //   return this.http.put(url, userData).toPromise();
  // }


}
