import { Injectable, inject } from '@angular/core';
import { IUser } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  public getUserByUid(uid: number): Observable<IUser> {
    return this.http.get<IUser>('/api/users/'+uid);
  }
  public getUserByUuid(uuid: string): Observable<IUser> {
    return this.http.get<IUser>('/api/users/by_uuid/'+uuid);
  }
}
