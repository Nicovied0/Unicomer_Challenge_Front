import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private userService: UserService) { }

  profile: any = {}

  ngOnInit() {
    this.getProfile()
    console.log(this.profile.name)
  }

  getProfile() {
    this.profile = this.userService.getData()
  }
}
