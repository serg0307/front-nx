import { Component, TemplateRef, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import {FormsModule} from '@angular/forms';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'front-nx-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule, UserLoginComponent, UserRegisterComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  authService = inject(AuthService);
  isLoggedIn = false;
  private modalService: NgbModal = inject(NgbModal);
  constructor() {
    effect(() => {
      this.isLoggedIn = this.authService.status();
    })
  }
  login() {
  }
  checkToken() {
    console.log(this.authService.token());
    console.log(this.authService.user());
  }
  checkUser() {
    console.log(this.authService.isTokenValid());
  }
  logout() {
    this.authService.logout();
  }
  sendSocketEvent() {

  }


  openLoginForm() {
    this.modalService.open(UserLoginComponent).result.then(
			(result) => {
        console.log(`Closed with: ${result}`);
			},
			(reason) => {
        console.log(`Closed with: ${reason}`);
			},
		);
  }
}
