import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDataComponent } from './destination-data.component';

const routes : Routes =[{
  path:'',
  component: DestinationDataComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DestinationDataRoutingModule { }
