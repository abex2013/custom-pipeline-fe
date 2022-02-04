import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user = {
    username: '',
    id: '',
    access_token: '',
  };

  connectionData = {
    storageAccount: '',
    containerName: '',
    accessKey: '',
    accountidentifier: '',
    user: '',
    password: '',
    database_name: '',
    schema_name: '',
    warehouse_name: '',
  };

  validateForm!: FormGroup;
  access_token: any;
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

  // updateConfirmValidator(): void {
  //   /** wait for refresh value */
  //   Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  // }

  // confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { required: true };
  //   } else if (control.value !== this.validateForm.controls.password.value) {
  //     return { confirm: true, error: true };
  //   }
  //   return {};
  // };

  constructor(private authService: AuthService, private fb: FormBuilder, private connectionService:ConnectionService) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((value) => {
      if (value) {
        this.user.id = value.userId;
        this.user.username = value.userName;
        this.access_token = value.access_token;
      }
    });
    this.createRegistration();
  }
  createRegistration() {
    this.validateForm = this.fb.group({
      // userId: [null, [Validators.required]],
      storageAccount: [null, [Validators.required]],
      containerName: [null, [Validators.required]],
      accessKey: [null, [Validators.required]],
      accountidentifier: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      database_name: [null, [Validators.required]],
      schema_name: [null, [Validators.required]],
      warehouse_name: [null, [Validators.required]],
    });
  }

  registerConnection() {
    //   this.signupService.register(this.registerData).subscribe((res) => {
    //     console.log(res.result);
    //     if (res.result) {
    //       //this.validateForm.reset()

    //       this.route.navigate(['login']);
    //     }
    //   })
    // }
    this.connectionService.connection(this.connectionData).subscribe(
      (value: boolean) => {
        if (value) {
          alert('successfully connected');
        } else {
          alert('failed');
        }
      },
      (error) => {
        alert('faild');
      }
    );
    alert('user connected successfully');
    // this.route.navigate(['/login']);
  }
}
