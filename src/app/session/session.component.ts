import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  constructor(private userService: UserService) { }
  loged = false

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.getUser()
  }

  getUser(){
    this.loged = this.userService.getProfile()
    console.log(this.loged)
  }
}
