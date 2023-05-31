import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: string = 'Usuário';
  routeSubscription: any;
  mostrarItensMenu: boolean = true;

  constructor(public userService: UserService, private router: Router) {
    this.userService.isLoggedIn();
  }

  ngOnInit() {
    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/cadastro' || event.url === '/resgatar') {
          this.mostrarItensMenu = false;
        }
        else {
          this.mostrarItensMenu = true;
        }
      }
    });
  }

  abrirPesquisa() {
    return console.log(0);
  }

  abrirCarrinho() {
    return console.log(0);
  }
}
