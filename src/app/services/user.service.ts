import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, map } from 'rxjs';

import { AppService } from './app.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();

  constructor(private appService: AppService, private router: Router) {}

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem('auth_token');
    if (token) {
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return !!token;
  }

  logIn(user: User): Observable<any> {
    return this.appService.postItems('', user).pipe(
      map((response: any) => {
        var data = response;
        if (data.token) {
          this._loggedIn.next(true);
          sessionStorage.setItem('auth_token', data.token);
        }
        return response;
      })
    );
  }

  logOut(): void {
    sessionStorage.removeItem('auth_token');
    this.isLoggedIn();
    this.router.navigate(['login']);
  }
}
