import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = {
    username:'',
    id:''
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value=>{
      if(value)
      {
        this.user.id=value.userId;
        this.user.username=value.username
      }

    })
  }

}
