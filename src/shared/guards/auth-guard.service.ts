import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../service/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService) { }
    canActivate() {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            return false;
        }
    }

}