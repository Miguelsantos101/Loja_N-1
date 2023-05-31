import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guard/auth.guard';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { RecuperacaoSenhaComponent } from './modules/recuperar-senha/recuperacao-senha.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { PesquisarComponent } from './modules/pesquisar/pesquisar.component';
import { ContatoComponent } from './modules/contato/contato.component';


const routes: Routes = [
  {
    path: 'perfil',
    title: 'Perfil',
    component: PerfilComponent,
    data: { animation: '*' },
    canActivate: [authGuard],
  },
  {
    path: 'contato',
    title: 'Contato',
    component: ContatoComponent,
    data: { animation: '*' },
    canActivate: [authGuard],
  },
  {
    path: 'pesquisar',
    title: 'Pesquisar',
    component: PesquisarComponent,
    data: { animation: '*' },
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
    data: { animation: '*' },
  },
  {
    path: 'cadastro',
    title: 'Cadastro',
    component: CadastroComponent,
    data: { animation: '*' },
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  { path: '', title: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', title: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
