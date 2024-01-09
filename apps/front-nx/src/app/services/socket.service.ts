import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  readonly uri = '/sock/';
  constructor() {
    this.socket = io(this.uri);
  }
  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: unknown) => {
        subscriber.next(data);
      })
    })
  }
  emit(eventName: string, data: unknown) {
    this.socket.emit(eventName, data);
  }

}
