import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperacaoSenhaComponent } from './recuperar-senha/recuperacao-senha.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent, CadastroComponent, RecuperacaoSenhaComponent],
  imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule],
  exports: [LoginComponent, CadastroComponent, RecuperacaoSenhaComponent],
})
export class LoginModule {}
