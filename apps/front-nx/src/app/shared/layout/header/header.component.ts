import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from '../../UI/user-menu/user-menu.component';
import { SearchComponent } from '../../UI/search/search.component';
import { UserIconComponent } from '../../UI/user-icon/user-icon.component';

@Component({
  selector: 'front-nx-header',
  standalone: true,
  imports: [CommonModule, UserMenuComponent, SearchComponent, UserIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
