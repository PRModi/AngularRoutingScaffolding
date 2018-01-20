import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { PageRoutingModule } from './page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent, PricingComponent,FooterComponent]
})
export class PageModule { }
