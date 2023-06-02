import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: string = 'Usuário';
  routeSubscription: Subscription = new Subscription;
  showMenuItems: boolean = true;

  constructor(public userService: UserService, private router: Router) {
    this.userService.isLoggedIn();
  }

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/login' ||
          event.url === '/cadastro' ||
          event.url === '/recuperacao-de-senha'
        ) {
          this.showMenuItems = false;
        } else {
          this.showMenuItems = true;
        }
      }
    });
  }

  openSearch() {
    return console.log(0);
  }

  openCart() {
    return console.log(0);
  }
}
