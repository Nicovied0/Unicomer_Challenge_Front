import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const Swal: any;
@Component({
  selector: 'app-close-session',
  templateUrl: './close-session.component.html',
  styleUrls: ['./close-session.component.css']
})
export class CloseSessionComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.closeSession()
  }

  closeSession() {
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Estás seguro que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result:any) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userUnicomer');
        localStorage.removeItem('tokenUnicomer');
        this.router.navigate(['/']);
        setTimeout(() => {
          window.location.reload();
        });
      }
    });
  }
}
