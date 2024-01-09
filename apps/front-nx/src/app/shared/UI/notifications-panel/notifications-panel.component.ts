import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'front-nx-notifications-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-panel.component.html',
  styleUrl: './notifications-panel.component.scss',
})
export class NotificationsPanelComponent {
  items: NotificationItem[] = [
    {
      name: 'Друзі',
      icon: 'bi-people'
    }, {
      name: 'Я читаю',
      icon: 'bi-person'
    }, {
      name: 'Новини',
      icon: 'bi-globe2'
    }, {
      name: 'Дії',
      icon: 'bi-arrows'
    }, {
      name: 'Сповіщення',
      icon: 'bi-bell'
    }, {
      name: 'Згадування',
      icon: 'bi-at'
    }, {
      name: 'Коментарі',
      icon: 'bi-chat-left-text'
    }, {
      name: 'Запити',
      icon: 'bi-people-fill'
    }, {
      name: 'Особисті повідомлення',
      icon: 'bi-envelope'
    }
  ]
}

interface NotificationItem {
  name: string;
  icon: string;
}
