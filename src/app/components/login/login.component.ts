import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    if (this.loginForm.valid) {
      alert('Logado com sucesso');
    }

    localStorage.setItem('token', 'token_valido');
    this.loginForm.reset();
    this.router.navigate(['/home']);
  }
}
