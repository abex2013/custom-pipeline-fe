import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-destination-data',
  templateUrl: './destination-data.component.html',
  styleUrls: ['./destination-data.component.scss']
})
export class DestinationDataComponent implements OnInit {
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.validateForm = this.fb.group({
    //   accountIdentifier: [null, [Validators.required]],
    //   user: [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    //   databaseName: [null, [Validators.required]],
    //   schemaName: [null, [Validators.required]],
    //   warehouseName: [null, [Validators.required]],
    // });
    this.validateForm = this.fb.group({
      accountIdentifier: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      databaseName: [null, [Validators.required]],
      schemaName: [null, [Validators.required]],
      warehouseName: [null, [Validators.required]],
    });
  }

}
