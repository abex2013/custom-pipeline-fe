import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ]
})
export class RegistrationModule { }
