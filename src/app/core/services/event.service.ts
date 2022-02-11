import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl="https://kafka-producer.herokuapp.com/event/";
  access_token: any;
    constructor(protected _httpClient: HttpClient, private authService: AuthService, private notification:NzNotificationService,) { }

    getAll(storageAccount:any):Observable<Array<Event>>{

      this.authService.userInfo.subscribe((value) => {
        if (value) {
          this.access_token = value.access_token;
        }
      });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${this.access_token}`
        }),
      };

      return this._httpClient.get<Event[]>(this.eventUrl + storageAccount,httpOptions).pipe(catchError(this.handleError));

    }

    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        alert(error.error.message);

      }
      return throwError(msg);
    }
}
