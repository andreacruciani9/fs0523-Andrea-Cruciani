import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Iregister } from '../module/i-registe';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  registerData: Iregister = {
    name: '',
    email: '',
    password: '',
  };

  save() {
    this.authSvc.signUp(this.registerData).subscribe((_data) => {
      this.router.navigate(['/auth/login']);
      alert('utente registrato');
    });
  }
}
