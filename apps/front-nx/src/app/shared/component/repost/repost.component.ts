import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEntity } from '../../interface/entity';

@Component({
  selector: 'front-nx-repost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repost.component.html',
  styleUrl: './repost.component.scss',
})
export class RepostComponent {
  @Input() entity: IEntity = <IEntity>{};
}
