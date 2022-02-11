import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Destination } from '../models/get/destination';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetDestinationDataService {
destinationUrl="https://kafka-producer.herokuapp.com/api/v1/pipeline/destination-data";
access_token: any;
  constructor(protected _httpClient: HttpClient, private authService: AuthService) { }

  getAll():Observable<Array<Destination>>{
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
    return this._httpClient.get<Destination[]>(this.destinationUrl, httpOptions).pipe(catchError(this.handleError));
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
