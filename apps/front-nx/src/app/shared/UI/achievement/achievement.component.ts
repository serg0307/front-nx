import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAchievement } from './achievement.interface';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'front-nx-achievement',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss',
})
export class AchievementComponent implements OnInit {
  @Input() achievement: IAchievement = <IAchievement> {};

  ngOnInit(): void {
    console.log(this.achievement.badge);
  }
}
