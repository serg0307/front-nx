import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, Cred } from '../../../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../../user/user.interface';

@Component({
  selector: 'front-nx-user-login',
  standalone: true,
  imports: [CommonModule,NgbModule,FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  cred: Cred = <Cred> {};
  name = '';
  auth = inject(AuthService);
  loading = false;
  user: IUser = <IUser> {};
  private modalService: NgbModal = inject(NgbModal);
  constructor() {
    effect(() => {
      const i = `${this.auth.status()} ${this.auth.uuid()}`;
      if (i) {
        this.loading = false;
      }
    })
  }
  ok(){
    this.loading = true;
    this.auth.login(this.cred);
  }
}
