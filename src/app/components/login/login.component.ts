import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
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

  onSubmit(): void {
    this.login();
  }

  login(): void {
    if (this.loginForm.valid) {
      var dtoUser = new User(this.loginForm.value);
      this.userService.logIn(dtoUser);
    }

    this.loginForm.reset();
    this.router.navigate(['home']);
  }
}
