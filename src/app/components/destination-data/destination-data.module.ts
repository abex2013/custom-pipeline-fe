import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationDataRoutingModule } from './destination-data-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DestinationDataComponent } from './destination-data.component';
import { NzInputModule } from 'ng-zorro-antd/input';




@NgModule({
  declarations: [DestinationDataComponent],
  imports: [
    CommonModule,
    DestinationDataRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    NzInputModule,
    FormsModule
  ]
})
export class DestinationDataModule { }
