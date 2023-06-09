import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { PasswordRecovery } from 'src/app/models/password-recovery.model';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.css'],
})
export class RecuperacaoSenhaComponent {
  passwordRecoveryForm: FormGroup = this.formBuilder.group({});

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
    this.passwordRecoveryForm = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  formValid(): boolean {
    if (!this.passwordRecoveryForm.valid) {
      alert('Por favor verifique o campo de email');
      return false;
    }

    return true;
  }

  sendEmail(): void {
    if (this.formValid()) {
      var dtoPasswordRecovery: PasswordRecovery = new PasswordRecovery(
        this.passwordRecoveryForm.value
      );
      this.userService.passwordRecovery(dtoPasswordRecovery);
      this.router.navigate(['/login']);
    }
  }
}
