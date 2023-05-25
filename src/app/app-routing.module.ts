import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RecuperacaoSenhaComponent } from './components/recuperacao-senha/recuperacao-senha.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'contato',
    title: 'Contato',
    component: ContatoComponent,
    data: { animation: 'home' },
    canActivate: [authGuard],
  },
  {
    path: 'pesquisar',
    title: 'Pesquisar',
    component: PesquisarComponent,
    data: { animation: 'home' },
    canActivate: [authGuard],
  },
  {
    path: 'home',
    title: 'Loja N-1',
    component: HomeComponent,
    data: { animation: 'home' },
    canActivate: [authGuard],
  },
  {
    path: 'recuperacao-senha',
    title: 'Recuperação de senha',
    component: RecuperacaoSenhaComponent,
    data: { animation: 'home' },
  },
  {
    path: 'cadastro',
    title: 'Cadastro',
    component: CadastroComponent,
    data: { animation: 'home' },
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  { path: '*', title: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
