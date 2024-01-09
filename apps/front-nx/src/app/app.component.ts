import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooterComponent, HeaderComponent],
  selector: 'front-nx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-nx';
  authService = inject(AuthService);
  userService = inject(UserService);
  constructor() {
    this.authService.isTokenValid();
    effect(() => {
      if (this.authService.status()) {

        this.userService.getUserByUuid(this.authService.getUserUuidFromLocalStorage()).subscribe(data => {
          this.authService.updateUserSignal(data);
        });
      }
    })
  }
}
