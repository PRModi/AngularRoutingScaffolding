import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PricingComponent } from "./pricing/pricing.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pricing', component: PricingComponent },
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})


export class PageRoutingModule {

}