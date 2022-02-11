import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalFormComponent } from './final-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[{
  path:'',
  component: FinalFormComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FinalFormRoutingModule { }
