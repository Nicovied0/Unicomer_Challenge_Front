import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
