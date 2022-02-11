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
    // if(userDate && userDate.userId){
    //   if(state.url.indexOf("login") > -1)
    //   {
    //     this.route.navigate(['/dashboard']);
    //     return false;
    //   }
    // }
    // else{
    //   if(state.url.indexOf("dashboard") > -1)
    //   {
    //     this.route.navigate(['/login']);
    //     return false;
    //   }
    // }
    if(userDate && userDate.userId){
      if(state.url.indexOf("login") > -1)
      {
        this.route.navigate(['/source-data']);
        return false;
      }
      // else if(state.url.indexOf("login") > -1)
      // {
      //   this.route.navigate(['/destination-data']);
      //   return false;
      // }
      // else if(state.url.indexOf("login") > -1)
      // {
      //   this.route.navigate(['/final-form']);
      //   return false;
      // }
      // else{

      //   this.route.navigate(['/']);
      //   return false;
      // }
    }
    else{
      if(state.url.indexOf("source-data") > -1)
      {

        this.route.navigate(['/']);
        return false;
      }
      else if(state.url.indexOf("destination-data") > -1)
      {

        this.route.navigate(['/']);
        
        return false;
      }
      else if(state.url.indexOf("final-form") > -1)
      {

        this.route.navigate(['/']);
        return false;
      }
      else{

        this.route.navigate(['/']);
        return false;
      }
    }

// if(userDate && userDate.userId){
        //   if(state.url.indexOf("source-data") > -1)
        //   {
        //     this.route.navigate(['/destination-data']);
        //     if(userDate && userDate.userId){
        //       if(state.url.indexOf("destination-data") > -1)
        //       {
        //         this.route.navigate(['/final-form']);
        //         return false;
        //       }
        //     }
        //     else{
        //       if(state.url.indexOf("final-form") > -1)
        //       {
        //         this.route.navigate(['/']);
        //         return false;
        //       }
        //     }
        //     return false;
        //   }
        // }
        // else{
        //   if(state.url.indexOf("destination-data") > -1)
        //   {
        //     this.route.navigate(['/']);
        //     return false;
        //   }
        // }
    return true;
  }
}
