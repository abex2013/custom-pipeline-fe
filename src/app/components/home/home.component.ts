import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
  };
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private http:HttpClient,
    private notification: NzNotificationService
  ) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  userLogin() {
    this.authService.userLogin(this.loginData).subscribe((value: boolean) => {
      if (value && this.validateForm.valid) {
        this.notification.success("User logged in successfully","",
      // { nzPlacement: 'bottomRight' }

      );
        this.route.navigate(['/source-data']);
      } else {
        this.notification.error("User logged in failed","",
      // { nzPlacement: 'bottomRight' }
      );
        // alert('failed');
      }
    },
    (error) => {
      this.notification.error("User logged in failed","",
      // { nzPlacement: 'bottomRight' }
      );
      // alert('faild');
    }
  );

  }
}
