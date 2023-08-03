import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    localStorage.removeItem('userUnicomer')
    localStorage.removeItem('tokenUnicomer')

    this.router.navigate(["/"])
    setTimeout(() => {
      window.location.reload()
    })
  }
}
