import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthRoutingGaurd implements CanActivate {

  constructor(private authService:AuthService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const userDate=this.authService.userInfo.getValue();
    // alert(JSON.stringify(userDate));
    if(userDate && userDate.userId){
      if(state.url.indexOf("login") > -1)
      {
        this.route.navigate(['/dashboard']);
        return false;
      }
    }
    else{
      if(state.url.indexOf("dashboard") > -1)
      {
        this.route.navigate(['/login']);
        return false;
      }
    }
    return true;
  }
}
