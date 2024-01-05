import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaryItem } from './diary.interface';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  http = inject(HttpClient);
  public getDiary(): Observable<DiaryItem[]> {
    return this.http.get<DiaryItem[]>('/api/diary/day');
  }
}

