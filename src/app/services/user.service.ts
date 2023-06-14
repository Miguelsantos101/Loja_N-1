import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, map } from 'rxjs';

import { AppService } from './app.service';
import { User } from '../models/user.model';
import { Register } from '../models/register.model';
import { PasswordRecovery } from '../models/password-recovery.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _loggedOut: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();
  public loggedOut: Observable<boolean> = this._loggedOut.asObservable();

  constructor(private appService: AppService, private router: Router) {}

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem('auth_token');
    if (token) {
      this._loggedIn.next(true);
      this._loggedOut.next(false);
    } else {
      this._loggedIn.next(false);
      this._loggedOut.next(true);
    }

    return !!token;
  }

  logIn(user: User): Observable<any> {
    // Remover essa parte depois
    let teste = true;

    if (teste) {
      this._loggedIn.next(true);
      this._loggedOut.next(false);
      sessionStorage.setItem('auth_token', '12345');
      let a: Observable<any> = new Observable<boolean>();
      return a;
    }
    //Remover essa parte depois

    return this.appService.postItems('login', user).pipe(
      map((response: any) => {
        var data = response;
        if (data.token) {
          this._loggedIn.next(true);
          this._loggedOut.next(false);
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

  register(register: Register): Observable<any> {
    return this.appService.postItems('registrar', register).pipe(
      map((response: any) => {
        var data = response;
        return data;
      })
    );
  }

  passwordRecovery(passwordRecovery: PasswordRecovery): Observable<any> {
    return this.appService.postItems('recuperar-senha', passwordRecovery).pipe(
      map((response: any) => {
        var data = response;
        return data;
      })
    );
  }
}
