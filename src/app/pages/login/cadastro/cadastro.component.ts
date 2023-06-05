import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { Register } from 'src/app/models/register.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup = this.formBuilder.group({});
  showPassword: boolean = false;
  showPasswordConfirmation: boolean = false;

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
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmaSenha: ['', [Validators.required]],
    });
  }

  // Refatorar esse código depois kk
  formValid(): boolean {
    if (!this.cadastroForm.valid) {
      if (
        !this.cadastroForm.controls['nome'].valid &&
        !this.cadastroForm.controls['email'].valid &&
        !this.cadastroForm.controls['senha'].valid &&
        !this.cadastroForm.controls['confirmaSenha'].valid
      ) {
        alert('Preencha todos os campos corretamente antes de continuar');
        return false;
      }
      if (!this.cadastroForm.controls['nome'].valid) {
        alert('Por favor verifique o campo de nome');
        return false;
      }
      if (!this.cadastroForm.controls['email'].valid) {
        alert('Por favor verifique o campo de email');
        return false;
      }
      if (!this.cadastroForm.controls['senha'].valid) {
        alert('Por favor verifique o campo de senha');
        return false;
      }
      if (!this.cadastroForm.controls['confirmaSenha'].valid) {
        alert('Por favor verifique o campo de confirmação de senha');
        return false;
      }
    }
    if (
      this.cadastroForm.controls['senha'].value !==
      this.cadastroForm.controls['confirmaSenha'].value
    ) {
      alert('A senha e a confirmação de senha devem ser iguais!');
      return false;
    }
    return true;
  }

  createAccount(): void {
    if (this.formValid()) {
      var dtoRegister: Register = new Register(this.cadastroForm.value);
      this.userService.register(dtoRegister);
      this.router.navigate(['/login']);
    }
  }

  showOrHidePassword(field: number): void {
    if (field == 1) {
      this.showPassword = !this.showPassword;
    } else if (field == 2) {
      this.showPasswordConfirmation = !this.showPasswordConfirmation;
    }
  }
}
