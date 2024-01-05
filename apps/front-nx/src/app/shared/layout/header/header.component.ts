import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from '../../UI/user-menu/user-menu.component';
import { SearchComponent } from '../../UI/search/search.component';

@Component({
  selector: 'front-nx-header',
  standalone: true,
  imports: [CommonModule, UserMenuComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
