import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegisterMode: boolean = true;
  documentType: string = 'DNI';
  documentNumber: string = '';
  password: string = '';
  name: string = '';
  email: string = '';

  // Agregar un FormGroup para la validación
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    // Inicializar el FormGroup en el constructor
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      documentType: ['DNI', Validators.required],
      documentNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[\\W_]).{8,}$')]]
    });
  }

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
            this.router.navigate(['/'])
            console.log('Login successful', response);
            setTimeout(() => {
              window.location.reload()
            })

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
    if (this.registerForm.valid) {
      const newUser = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        documentType: this.registerForm.value.documentType,
        documentNumber: this.registerForm.value.documentNumber,
        password: this.registerForm.value.password
      };

      this.authService.register(newUser).subscribe(
        response => {
          // Manejar la respuesta del servidor aquí
          console.log('Registration successful', response);

          // También podrías hacer un inicio de sesión automático aquí
          this.login();
          window.location.reload();
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }

}



