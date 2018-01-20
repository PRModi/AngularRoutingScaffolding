import { AuthService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(public fb: FormBuilder,
        public authService: AuthService,
        public router: Router) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    submit() {
        if (this.loginForm.valid) {
            const username = this.loginForm.value.userName;
            const password = this.loginForm.value.password;
            this.authService.isUserAuthenticated(username, password).subscribe((data) => {
                console.log(data);

                if (data) {
                    swal({
                        showCancelButton: false,
                        showConfirmButton: false,
                        type: 'success',
                        title: 'Logged in Successfully !',
                        timer: 1000
                    }).then(() => {
                        this.router.navigate(['home']);
                    })
                }
                else {
                    swal({
                        title: 'Invalid credentials',
                        type: 'error',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            }),
                (err => {
                    console.log(err);
                })

        } else {
            this.loginForm.get('userName').markAsTouched();
            this.loginForm.get('password').markAsTouched();
        }

    }

}
