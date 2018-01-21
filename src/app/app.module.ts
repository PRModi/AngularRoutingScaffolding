import { PageModule } from './main/page/page.module';
import { FooterComponent } from './../shared/component/footer/footer.component';
import { HeaderComponent } from './../shared/component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from '../shared/service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';
import { UserModule } from './main/user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent],
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
