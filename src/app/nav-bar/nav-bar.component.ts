import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppUser} from './../models/app-user';

import {AuthService} from './../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
