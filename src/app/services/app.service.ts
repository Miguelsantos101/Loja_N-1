import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public path: string = window.location.hostname;
  public href: string = window.location.href;
  public apiUrl: string = environment.apiUrl[0];

  constructor(private httpClient: HttpClient) {}

  getItems(path: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + `${path}`);
  }

  postItems(path: string, object: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + `${path}`, object);
  }

  putItems(path: string, object: any): Observable<any> {
    return this.httpClient.put(this.apiUrl + `${path}`, object);
  }

  deleteItems(path: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl + `${path}`);
  }
}
