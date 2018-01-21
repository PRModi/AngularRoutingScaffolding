import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageRoutingModule } from './page.routing.module';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],

  declarations: [HomeComponent, AboutComponent, PricingComponent, LoginComponent]
})
export class PageModule { }
