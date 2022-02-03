import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from '../models/post/login-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  userLoginUrl = 'https://kafka-producer.herokuapp.com/api/v1/users/login';
  jwtHelper = new JwtHelperService();

  constructor(protected _httpClient: HttpClient) {
    this.loadUserInfo();
  }


  loadUserInfo() {
    const userData = this.userInfo.getValue();
    if (!userData) {
      const accesstoken = localStorage.getItem('access_token');
      if (accesstoken) {
        const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
        console.log(decryptedUser);
        const data = {
          access_token: accesstoken,
          userName: localStorage.getItem('user_name'),
          userId: decryptedUser.id,
          userIat: decryptedUser.iat,
          tokenExpiration: decryptedUser.exp,
        };
        this.userInfo.next(data);
      }
    }
  }

  userLogin(userPayload: any):Observable<boolean> {
    console.log(userPayload);
    return this._httpClient.post(this.userLoginUrl, userPayload).pipe(
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
          this.userInfo.next(data);
          return true;
        }
        return false;
      })
    );
    // this is only for the constant jwt token
    // console.log(userPayload);
    // const accesstoken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjhkYzcyYTY1ZTQwODI3MjIzZTBjNiIsImlhdCI6MTY0MzgwNTY4NzQ5NSwiZXhwIjoxNjQzODA1Njk2NDk1fQ.KG0O7T1K99Ou2bNJxmETBAsNOg3TZs7wlaEoGcRo2i8";
    // const refreshtoken = 'dummy';

    // localStorage.setItem('access_token', accesstoken);
    // localStorage.setItem('refresh_token', refreshtoken);

    // const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
    // console.log(decryptedUser);

    // const data = {
    //   access_token: accesstoken,
    //   refresh_token: refreshtoken,
    //   userId: decryptedUser.id,
    //   userIat: decryptedUser.iat,
    //   tokenExpiration: decryptedUser.exp,
    // };
    // this.userInfo.next(data);
  }
}
