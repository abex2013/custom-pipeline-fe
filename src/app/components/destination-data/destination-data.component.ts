import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/core/services/auth.service';
import { DestinationDataService } from 'src/app/core/services/destination-data.service';

@Component({
  selector: 'app-destination-data',
  templateUrl: './destination-data.component.html',
  styleUrls: ['./destination-data.component.scss']
})
export class DestinationDataComponent implements OnInit {
  inputValue?: string;
  user = {
    username: '',
    id: '',
    access_token: '',
  };

  connectionData = {
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



  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private destinationDataService:DestinationDataService,
    private notification: NzNotificationService, private route:Router) {}

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
      accountidentifier: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      database_name: [null, [Validators.required]],
      schema_name: [null, [Validators.required]],
      warehouse_name: [null, [Validators.required]],
    });
  }

  registerConnection() {

    this.destinationDataService.connection(this.connectionData).subscribe(
      (value: boolean) => {
        if (value && this.validateForm.valid) {
          this.notification.success("Destination successfully connected","",
        // { nzPlacement: 'bottomRight' }

        );
          this.route.navigate(['/final-form']);
        } else {
          this.notification.error("Destination failed to connect","",
        // { nzPlacement: 'bottomRight' }
        );
          // alert('failed');
        }
      },
      (error) => {
        this.notification.error("Destination faild to connect","",
        // { nzPlacement: 'bottomRight' }
        );
        // alert('faild');
      }
    );
    // alert('user connected successfully');
    // this.route.navigate(['/login']);
  }
  index = 1;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }

}
