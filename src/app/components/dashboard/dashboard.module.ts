import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
