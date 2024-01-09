import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../user.interface';

@Component({
  selector: 'front-nx-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() id = '';
  profile: IUser = <IUser>{};
}
