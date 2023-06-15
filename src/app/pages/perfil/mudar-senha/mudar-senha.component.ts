import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mudar-senha',
  templateUrl: './mudar-senha.component.html',
  styleUrls: ['./mudar-senha.component.css'],
})
export class MudarSenhaComponent {
  passwordForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newPasswordConfirmation: ['', [Validators.required]],
    });
  }

  formValid(): boolean {
    if (!this.passwordForm.valid) {
      if (!this.passwordForm.controls['oldPassword'].valid) {
        alert('Por favor verifique o campo de senha antiga');
        return false;
      }
      if (!this.passwordForm.controls['newPassword'].valid) {
        alert('Por favor verifique o campo de senha nova');
        return false;
      }
      if (!this.passwordForm.controls['newPasswordConfirmation'].valid) {
        alert('Por favor verifique o campo de confirmar senha nova');
        return false;
      }

      alert('Algo deu errado');
      return false;
    }
    if (
      this.passwordForm.controls['newPassword'].value !==
      this.passwordForm.controls['newPasswordConfirmation'].value
    ) {
      alert('A senha e a confirmação de senha devem ser iguais!');
      return false;
    }
    return true;
  }

  changePassword(): void {
    if (this.formValid()) {
      var dtoChangePassword = {};

    }
  }
}
