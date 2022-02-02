import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes : Routes =[{
  path:'',
  component: LoginComponent
},
{
  path:'registration',
  loadChildren: () => import('../registration/registration.module').then(_ => _.RegistrationModule)
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
