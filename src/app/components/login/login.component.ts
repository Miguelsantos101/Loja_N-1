import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

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
      senha: ['', [Validators.required]],
    });
  }

  formValid(): boolean {
    if (!this.loginForm.valid) {
      if (
        !this.loginForm.controls['email'].valid &&
        !this.loginForm.controls['senha'].valid
      ) {
        alert('Preencha os campos antes de continuar');
        return false;
      }

      if (!this.loginForm.controls['email'].valid) {
        alert('Por favor verifique o campo de email');
        return false;
      }

      if (!this.loginForm.controls['senha'].valid) {
        alert('Por favor verifique o campo de senha');
        return false;
      }
    }
    return true;
  }

  login(): void {
    if (this.formValid()) {
      var dtoUser = new User(this.loginForm.value);
      this.userService.logIn(dtoUser);
      this.router.navigate(['home']);
    }
  }

  showOrHidePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
