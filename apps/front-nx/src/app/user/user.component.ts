import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'front-nx-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  userService = inject(UserService);
  user$: Observable<IUser> = new Observable;
  @Input() id = '';
  @Input() user: IUser = <IUser>{};
  ngOnInit(): void {
    if (!this.user) {
      this.userService.getUserByUid(+this.id).subscribe(data => {
        this.user = data;
      });
    }
  }
}
