import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare const Swal: any;
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
        localStorage.setItem('tokenUnicomer', response.token);

        this.authService.getUserByDocumentNumber(this.documentNumber).subscribe(
          user => {
            localStorage.setItem('userUnicomer', JSON.stringify(user));
            this.router.navigate(['/']);
            setTimeout(() => {
              window.location.reload();
            });
          },
          error => {
            console.error('Error getting user information', error);
          }
        );
      },
      error => {
        Swal.fire({
          title: 'Error de Inicio de Sesión',
          text: 'Las credenciales proporcionadas no son válidas.',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'Aceptar'
        });

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
          // Mostrar una alerta SweetAlert para el registro exitoso
          Swal.fire({
            title: '¡Registro Exitoso!',
            text: 'Tu cuenta ha sido registrada correctamente.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
          console.log('Registration successful', response);
          this.login();
          setTimeout(() => {
            window.location.reload();
          });
        },
        error => {
          Swal.fire({
            title: 'Error de Registro',
            text: 'No se pudo completar el registro. Inténtalo nuevamente.',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Aceptar'
          });

          console.error('Registration failed', error);
        }
      );
    }
  }

}



