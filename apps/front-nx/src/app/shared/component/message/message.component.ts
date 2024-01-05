import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMessage } from './message.interface';
import { CarouselComponent } from '../../UI/carousel/carousel.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'front-nx-message',
  standalone: true,
  imports: [CommonModule, CarouselComponent, UserCardComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  @Input() message: IMessage = <IMessage>{};
  ngOnInit(): void {
    console.log(this.message);
  }
}
