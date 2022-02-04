import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SignupData } from '../models/post/signup-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userSignupUrl = 'https://kafka-producer.herokuapp.com/api/v1/users/signup';
  userSignupInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  
  constructor(protected _httpClient: HttpClient) { }


  register(userPayload: any):Observable<any> {

    console.log(userPayload);
    //console.log( this._httpClient.post(this.userSignupUrl,signupData).pipe(catchError(this.handleError)))//, httpOptions);
    return this._httpClient.post(this.userSignupUrl,userPayload,httpOptions).pipe(catchError(this.handleError));
    return this._httpClient.post(this.userSignupUrl,userPayload);
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
