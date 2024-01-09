import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../user/user.interface';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'front-nx-user-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.scss',
})
export class UserIconComponent {
  user: IUser = <IUser>{};
  auth = inject(AuthService);
  userService = inject(UserService);
  constructor() {
    effect(()=> {
      if (this.auth.user()) {
        this.user = this.auth.user();
      }
    });
  }
  getUserIcon() {
    return this.user.avatar.styles['thumbnail'];
  }
}
