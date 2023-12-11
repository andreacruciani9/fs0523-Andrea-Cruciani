import { Component } from '@angular/core';
import { Ilogin } from '../module/ilogin';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  loginData: Ilogin = {
    email: '',
    password: '',
  };
  save() {
    this.authSvc.login(this.loginData).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
