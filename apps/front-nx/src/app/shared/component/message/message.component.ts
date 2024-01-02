import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMessage } from './message.interface';
import { UserComponent } from '../../../user/user.component';
import { CarouselComponent } from '../../UI/carousel/carousel.component';

@Component({
  selector: 'front-nx-message',
  standalone: true,
  imports: [CommonModule, UserComponent, CarouselComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() message: IMessage = <IMessage>{};
}
