
import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { LoginComponent } from "./main/login-page/login.component";
import { HomeComponent } from "./main/page/home/home.component";

const appRoutes: Routes = [
    { path: '', loadChildren: './main/page/page.module#PageModule' },
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