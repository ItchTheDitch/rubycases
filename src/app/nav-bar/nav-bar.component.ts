import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppUser} from './../models/app-user';

import {AuthService} from './../services/auth.service';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { ShoppingCart } from './../models/shoping-cart';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private ShoppingCartService: ShoppingCartService) {


  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser)
    this.cart$ = await this.ShoppingCartService.getCart()

  }

  logout(){
    this.auth.logout();
  }

}
