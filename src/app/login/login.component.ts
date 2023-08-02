import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegisterMode: boolean = true;
  documentType: string = 'DNI'; // Valor predeterminado
  documentNumber: string = '';
  password: string = '';
  fullName: string = '';
  email: string = '';

  constructor(private authService: AuthService) { }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  login() {
    const credentials = {
      documentType: this.documentType,
      documentNumber: this.documentNumber,
      password: this.password
    };

    this.authService.login(credentials).subscribe(
      response => {
        // Save token to localStorage
        localStorage.setItem('tokenUnicomer', response.token);

        // Get user information by document number
        this.authService.getUserByDocumentNumber(this.documentNumber).subscribe(
          user => {
            // Save user information to localStorage
            localStorage.setItem('userUnicomer', JSON.stringify(user));
            window.location.reload()
            console.log('Login successful', response);
          },
          error => {
            console.error('Error getting user information', error);
          }
        );
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  register() {
    const newUser = {
      fullName: this.fullName,
      email: this.email,
      documentType: this.documentType,
      documentNumber: this.documentNumber,
      password: this.password
    };

    this.authService.register(newUser).subscribe(
      response => {
        // Manejar la respuesta del servidor aquí
        console.log('Registration successful', response);
        // También podrías hacer un inicio de sesión automático aquí
        this.login();
        window.location.reload()
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}



