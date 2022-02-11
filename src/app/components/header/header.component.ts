import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'exec-epp-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // index = 0;
  // disable = false;
  // onIndexChange(index: number): void {
  //   this.index = index;
  // }
  user = {
    username: '',
    id: '',
    userNameLetter:'',
  };
  // userNameLetter:string='';
  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe((value) => {
      if (value) {
        this.user.id = value.userId;
        this.user.username = value.userName;
        this.user.userNameLetter=value.userName.charAt(0);
      }
    });
  }

logout(){
    window.location.reload();
    window.sessionStorage.clear();
    window.localStorage.clear();
    localStorage.clear();
    window.localStorage.clear();
    this.route.navigate(['/']);
}
}
