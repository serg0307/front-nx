import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../user/user.interface';

import { UserService } from '../../../user/user.service';


@Component({
  selector: 'front-nx-user-card',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: IUser = <IUser>{};
}
