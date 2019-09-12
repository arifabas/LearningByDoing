import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MandiriLoginComponent } from './mandiri-login/mandiri-login.component';
import { MandiriEmployeeComponent } from './mandiri-employee/mandiri-employee.component';
import { MandiriDetailComponent } from './mandiri-detail/mandiri-detail.component';
import { MandiriAddComponent } from './mandiri-add/mandiri-add.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MandiriLoginComponent,
    MandiriEmployeeComponent,
    MandiriDetailComponent,
    MandiriAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
