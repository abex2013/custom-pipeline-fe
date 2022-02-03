import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  validateForm!: FormGroup;
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
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

  constructor(private authService:AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value=>{
      if(value)
      {
        this.user.id=value.userId;
        this.user.username=value.userName;
      }

    })
    this. createRegistration();
  }
  createRegistration(){
      this.validateForm = this.fb.group({
      userId: [null, [Validators.required]],
      storageAccount: [null, [Validators.required]],
      containerName: [null, [Validators.required]],
      accessKey: [null, [Validators.required]],

    });
    }
}
