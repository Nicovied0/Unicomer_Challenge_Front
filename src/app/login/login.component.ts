import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isRegisterMode: boolean = true;

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
  
}
