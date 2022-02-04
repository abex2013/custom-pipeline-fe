import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  userConnectionUrl = 'https://kafka-producer.herokuapp.com/api/v1/pipeline/';
   access_token: any;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.access_token
  //   }),
  // };


  constructor(
    protected _httpClient: HttpClient,
    private authService: AuthService
  ) {}

  connection(userPayload: any): Observable<any> {
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
    console.log(this.access_token);
    console.log(userPayload);

    return this._httpClient
      .post(this.userConnectionUrl, userPayload, httpOptions)
      .pipe(catchError(this.handleError));
    //return this._httpClient.post(this.userConnectionUrl,userPayload);
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
