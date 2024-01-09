import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AchievementComponent } from '../shared/UI/achievement/achievement.component';
@Component({
  selector: 'front-nx-user',
  standalone: true,
  imports: [CommonModule, AchievementComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit{
  @Input() id = '';
  user$: Observable<IUser> = new Observable;
  userService = inject(UserService);
  ngOnInit(): void {
    this.user$ = this.userService.getUserByUid(+this.id);
    this.userService.getUserByUid(+this.id).subscribe(data => {
      console.log(data);
    });
  }
}
