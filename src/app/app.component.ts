import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-pipeline-fe';
  isLogin=false
  constructor(private authService: AuthService, private router:Router ){
     this.authService.userInfo.subscribe((value) => {
      if (value) {
        this.isLogin=true;
      }
    });
    //  if(!this.isLogin){
    //   // window.location.reload();
    //    this.router.navigateByUrl('usermanagement');
    //  }
  }
}
