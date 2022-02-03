import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationDataRoutingModule } from './destination-data-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DestinationDataComponent } from './destination-data.component';



@NgModule({
  declarations: [DestinationDataComponent],
  imports: [
    CommonModule,
    DestinationDataRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ]
})
export class DestinationDataModule { }
