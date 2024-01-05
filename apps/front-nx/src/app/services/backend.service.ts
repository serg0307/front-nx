import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BackendService {
  http = inject(HttpClient);
  public getByUuid(type: string, uuid: string): Observable<unknown> {
    return this.http.get(`/api/${type}/${uuid}`);
  }
}
