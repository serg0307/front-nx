import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../shared/component/message/message.component';
import { Observable } from 'rxjs';
import { DiaryService } from './diary.service';
import { RepostComponent } from '../shared/component/repost/repost.component';
import { DiaryItem } from './diary.interface';

@Component({
  selector: 'front-nx-diary',
  standalone: true,
  imports: [CommonModule, MessageComponent, RepostComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
})
export class DiaryComponent implements OnInit {
  dataService = inject(DiaryService);
  diary$: Observable<DiaryItem[]> = new Observable;

  ngOnInit(): void {
    this.diary$ = this.dataService.getDiary();
    this.diary$.subscribe(data=>console.log(data));
  }
}
