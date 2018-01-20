import { LoginComponent } from './login-page/login.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from '../shared/component/header/header.component';

import { AuthGuard } from '../shared/guards/auth-guard.service';
import { Routes } from '@angular/router';
import { PageModule } from './page/page.module';
import { AppRoutingModule } from './app.routing.module';
import { UserModule } from './app/app.module';
import { AuthService } from '../shared/service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PageModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
