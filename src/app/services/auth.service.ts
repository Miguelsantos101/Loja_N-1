import { Injectable, inject } from '@angular/core';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  canActivate() {
    if (inject(UserService).isLoggedIn()) {
      return true;
    } else {
      inject(UserService).logOut();
      return false;
    }
  }
}
