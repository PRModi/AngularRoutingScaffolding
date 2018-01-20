import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }
  logout() {

    swal({
      title: 'Do you want to Logout?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.authService.isLoggedIn = false;
        this.router.navigate(['home']);
      } else if (result.dismiss === 'cancel') {
      }
    })
  }

}
