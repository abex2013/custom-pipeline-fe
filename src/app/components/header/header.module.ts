import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule} from './header-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    FormsModule
  ],
  exports:[
    HeaderComponent]
})
export class HeaderModule { }
