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
import { FinalFormComponent } from './components/final-form/final-form.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { FinalFormModule } from './components/final-form/final-form.module';
import { RegistrationModule } from './components/registration/registration.module';
import { AuthService } from './core/services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthRoutingGaurd } from './core/guards/auth.routing.guard';
import { SourceDataComponent } from './components/source-data/source-data.component';
import { DestinationDataComponent } from './components/destination-data/destination-data.component';
import { SourceDataModule } from './components/source-data/source-data.module';
import { DestinationDataModule } from './components/destination-data/destination-data.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NzNotificationModule } from 'ng-zorro-antd/notification';




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // FinalFormComponent,
    // SourceDataComponent,
    // DestinationDataComponent,
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
    FinalFormModule,
    RegistrationModule,
    DashboardModule,
    FooterModule,
    HeaderModule,
    SourceDataModule,
    DestinationDataModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    DemoNgZorroAntdModule,
    HttpClientModule,
    NzNotificationModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthService, AuthRoutingGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
