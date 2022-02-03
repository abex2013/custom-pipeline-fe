import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingGaurd } from './core/guards/auth.routing.guard';

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
  loadChildren: () => import('./components/registration/registration.module').then(_ => _.RegistrationModule),
  canActivate: [AuthRoutingGaurd]
},
{
  path:'dashboard',
  loadChildren: () => import('./components/dashboard/dashboard.module').then(_ => _.DashboardModule),
  canActivate: [AuthRoutingGaurd]
},
{
  path:'source-data',
  loadChildren: () => import('./components/source-data/source-data.module').then(_ => _.SourceDataModule),
  canActivate: [AuthRoutingGaurd]
},
{
  path:'destination-data',
  loadChildren: () => import('./components/destination-data/destination-data.module').then(_ => _.DestinationDataModule),
  canActivate: [AuthRoutingGaurd]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
