import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperacaoSenhaComponent } from './recuperar-senha/recuperacao-senha.component';


const loginRoutes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  {
    path: 'recuperacao-de-senha',
    title: 'Recuperação de senha',
    component: RecuperacaoSenhaComponent,
    data: { animation: '*' },
  },
  {
    path: 'cadastro',
    title: 'Cadastro',
    component: CadastroComponent,
    data: { animation: '*' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
