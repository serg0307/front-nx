import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from './user.interface';

@Component({
  selector: 'front-nx-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user: IUser = {
    id: "07ea8677-ba1e-4743-94a4-228c0aa1f52e",
    uid: 1,
    created: new Date(),
    title: "dev",
    avatar: {
      id: "a6f5ec51-1ec0-469b-ad23-0717fcf825a1",
      fid: 2,
      created: new Date(),
      filemime:	"image/jpeg",
      styles: {
        "thumbnail": "https://backend.yakogo.kh.ua/sites/default/files/styles/thumbnail/public/pictures/2023-12/bender%20square%20logo.jpg?itok=uFr8OiSr"
      }
    }
  }
}
