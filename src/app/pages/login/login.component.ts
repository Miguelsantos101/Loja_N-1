import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({});
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Refatorar esse código depois kk
  formValid(): boolean {
    if (!this.loginForm.valid) {
      if (
        !this.loginForm.controls['email'].valid &&
        !this.loginForm.controls['password'].valid
      ) {
        alert('Preencha todos os campos corretamente antes de continuar');
        return false;
      }

      if (!this.loginForm.controls['email'].valid) {
        alert('Por favor verifique o campo de email');
        return false;
      }

      if (!this.loginForm.controls['password'].valid) {
        alert('Por favor verifique o campo de senha');
        return false;
      }
    }
    return true;
  }

  login(): void {
    if (this.formValid()) {
      var dtoUser: User = new User(this.loginForm.value);
      this.userService.logIn(dtoUser).subscribe((data) => {
        if (data) {
          this.router.navigate(['home']);
        }
      });
      this.router.navigate(['home']);
    }
  }

  showOrHidePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
