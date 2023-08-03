import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.loged = this.userService.getProfile();
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
  
}

