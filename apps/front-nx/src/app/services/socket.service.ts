import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SocketService {

  constructor() {


  }
  sendMessage(message: string) {
    console.log(message);
  }

}
