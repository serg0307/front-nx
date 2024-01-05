import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { IMessage } from "../shared/component/message/message.interface";

@Injectable()
export class MessageService {
  http = inject(HttpClient);
  public getByUuid(uuid: string): Observable<IMessage> {
    return this.http.get<IMessage>('/api/post/'+uuid);
  }
}
