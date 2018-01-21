import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageRoutingModule } from './page.routing.module';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],

  declarations: [HomeComponent, AboutComponent, PricingComponent]
})
export class PageModule { }
