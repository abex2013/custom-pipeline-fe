import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  loadChildren: () => import('./components/home/home.module').then(_ => _.HomeModule)
},
{
  path:'login',
  loadChildren: () => import('./components/login/login.module').then(_ => _.LoginModule)
},
{
  path:'registration',
  loadChildren: () => import('./components/registration/registration.module').then(_ => _.RegistrationModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
