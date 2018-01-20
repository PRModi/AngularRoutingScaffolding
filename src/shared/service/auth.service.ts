import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService {
    public isLoggedIn: boolean = false;

    constructor() { }


    public isUserAuthenticated = (username: string, password: string): Observable<boolean> => {
        return Observable.create((observer => {
            if (username === "testUser" && password === "testPassword") {
                this.isLoggedIn = true;
                observer.next(true);
            }
            else {
                observer.next(false);
            }

        }))
    }

    public isUserLoggedIn = (): boolean => {
        return this.isLoggedIn;
    }


}