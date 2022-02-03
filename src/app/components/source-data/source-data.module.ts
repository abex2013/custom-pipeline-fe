import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceDataRoutingModule } from './source-data-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceDataComponent } from './source-data.component';



@NgModule({
  declarations: [SourceDataComponent],
  imports: [
    CommonModule,
    SourceDataRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ]
})
export class SourceDataModule { }
