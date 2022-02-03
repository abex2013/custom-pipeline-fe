import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginModule } from './components/login/login.module';
import { RegistrationModule } from './components/registration/registration.module';
import { AuthService } from './core/services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthRoutingGaurd } from './core/guards/auth.routing.guard';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // RegistrationComponent,
    // LoginComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    DashboardModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    DemoNgZorroAntdModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthService, AuthRoutingGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
