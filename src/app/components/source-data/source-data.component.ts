import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-source-data',
  templateUrl: './source-data.component.html',
  styleUrls: ['./source-data.component.scss']
})
export class SourceDataComponent implements OnInit {

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
    this.validateForm = this.fb.group({
      userId: [null, [Validators.required]],
      storageAccount: [null, [Validators.required]],
      containerName: [null, [Validators.required]],
      accessKey: [null, [Validators.required]],

    });
  }

}
