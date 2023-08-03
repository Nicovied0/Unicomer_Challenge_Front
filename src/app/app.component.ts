import { Component, OnInit,HostListener  } from '@angular/core';
import { UserService } from './Services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unicomer';
  loged = false;
  isSidebarHidden: boolean = false;
  isSidebarActive = false; // Agrega esta línea

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.loged = this.userService.getProfile();
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
    console.log(this.isScrolled)
  }
}

