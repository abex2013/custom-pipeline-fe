import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalFormRoutingModule } from './final-form-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FinalFormComponent } from './final-form.component';



@NgModule({
  declarations: [FinalFormComponent],
  imports: [
    CommonModule,
    FinalFormRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
  ]
})
export class FinalFormModule { }
