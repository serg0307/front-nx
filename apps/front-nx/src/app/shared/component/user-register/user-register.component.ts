import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserRegisterData } from './user-register.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'front-nx-user-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent {
  cred: IUserRegisterData = <IUserRegisterData>{};
  ok() {

  }
}
