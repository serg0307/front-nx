import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'front-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  authService = inject(AuthService);
  login() {
    this.authService.login({username: 'dev', password: '1q2w3e4r' });
  }
  checkToken() {
    console.log(this.authService.token());
  }
  checkUser() {
    console.log(this.authService.isTokenValid());
  }
  logout() {
    this.authService.logout();
  }
  sendSocketEvent() {

  }
}
