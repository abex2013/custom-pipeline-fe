import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { EventService } from 'src/app/core/services/event.service';
import { SourceDataService } from 'src/app/core/services/source-data.service';

@Component({
  selector: 'app-source-data',
  templateUrl: './source-data.component.html',
  styleUrls: ['./source-data.component.scss']
})
export class SourceDataComponent implements OnInit {
isConnected=true;
isRegisterConnection=false;
  user = {
    username: '',
    id: '',
    access_token: '',
  };

  connectionData = {
    storageAccount: '',
    containerName: '',
    accessKey: '',
  };
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
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
    private sourceDataService:SourceDataService,
    private route: Router,
    private notification:NzNotificationService,
    private eventService: EventService
    ) {}

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

this.eventService.getAll(this.connectionData.storageAccount).subscribe((data:any) => {
  if(!data.error){
    this.isRegisterConnection=true;
    this.sourceDataService.connection(this.connectionData).subscribe(
      (value: boolean) => {
        if (value) {
          this.notification.success("Source successfully connected","",
        // { nzPlacement: 'bottomRight' }
        );
        this.isConnected=false;
          this.route.navigate(['/destination-data']);
        } else {
          this.notification.error("Source failed to connect","",
        // { nzPlacement: 'bottomRight' }
        );
          // alert('failed');
        }
      },
      (error) => {
        this.notification.error("Source faild to connect","",
        // { nzPlacement: 'bottomRight' }
        );
        // alert('faild');
      }
    );
  }
  else{
    alert('First please create event for your storage at Azure')
  }

});

  }

  index = 0;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }

}
