import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Source } from '../models/get/source';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetSourceDataService {
sourceUrl="https://kafka-producer.herokuapp.com/api/v1/pipeline/source-data";
access_token: any;
  constructor(protected _httpClient: HttpClient, private authService: AuthService) { }

  getAll():Observable<Array<Source>>{
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
    return this._httpClient.get<Source[]>(this.sourceUrl,httpOptions).pipe(catchError(this.handleError));
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
