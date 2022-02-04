import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userSignupUrl = 'https://kafka-producer.herokuapp.com/api/v1/users/signup';
  userSignupInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor(protected _httpClient: HttpClient) { }

  userLogin(userPayload: any):Observable<boolean> {
    console.log(userPayload);
    return this._httpClient.post(this.userSignupUrl, userPayload).pipe(
      map((value:any) => {
        if (value) {

          localStorage.setItem('access_token', value.token);
          localStorage.setItem('user_name', value.data.user.name);
          const decryptedUser = this.jwtHelper.decodeToken(value.token);
          console.log(decryptedUser);

          const data = {
            access_token: value.token,
            userName: value.data.user.name,
            userId: decryptedUser.id,
            userIat: decryptedUser.iat,
            tokenExpiration: decryptedUser.exp,
          };
          this.userSignupInfo.next(data);
          return true;
        }
        return false;
      })
    );
  }
}
