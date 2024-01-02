import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMessage } from '../shared/component/message/message.interface';
import { mockMessages } from './diary.mockdata';
import { MessageComponent } from '../shared/component/message/message.component';

@Component({
  selector: 'front-nx-diary',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
})
export class DiaryComponent {
  messages: IMessage[] = mockMessages;
}
