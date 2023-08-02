import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/User.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'unicomer';

  constructor(private userService: UserService) { }
  loged = false

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.getUser()
  }

  getUser() {
    this.loged = this.userService.getProfile()
    console.log(this.loged)
  }

}
