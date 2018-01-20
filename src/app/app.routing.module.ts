import { LoginComponent } from './login-page/login.component';
import { SettingsComponent } from './app/settings/settings.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { AboutComponent } from './page/about/about.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const appRoutes: Routes = [
    { path: '', loadChildren: './page/page.module#PageModule' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: HomeComponent, canActivate: [AuthGuard] }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})


export class AppRoutingModule {

}