import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-close-session',
  templateUrl: './close-session.component.html',
  styleUrls: ['./close-session.component.css']
})
export class CloseSessionComponent {

  constructor(private router: Router) { }

  closeSession() {
    localStorage.removeItem('userUnicomer')
    localStorage.removeItem('tokenUnicomer')

    this.router.navigate(["/"])
    setTimeout(() => {
      window.location.reload()
    })
  }
}
