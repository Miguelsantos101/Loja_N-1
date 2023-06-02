import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guard/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { ContatoComponent } from './pages/contato/contato.component';


const routes: Routes = [
  {
    path: 'contato', title: 'Contato',
    component: ContatoComponent, data: { animation: '*' }
  },
  {
    path: 'pesquisar', title: 'Pesquisar',
    component: PesquisarComponent, data: { animation: '*' }
  },
  {
    path: 'home', title: 'Loja N-1',
    component: HomeComponent, data: { animation: 'home' },
  },
  { path: '', title: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', title: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
