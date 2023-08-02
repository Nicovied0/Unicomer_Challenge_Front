import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  profile: any = {}

  ngOnInit() {
    this.getProfile()
    console.log(this.profile.name)
  }

  getProfile() {
    this.profile = this.userService.getData()
  }
  
}
