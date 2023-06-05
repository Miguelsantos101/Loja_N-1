import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'contato',
    title: 'Contato',
    component: ContatoComponent,
    data: { animation: '*' },
  },
  {
    path: 'pesquisar',
    title: 'Pesquisar',
    component: PesquisarComponent,
    data: { animation: '*' },
    path: 'contato', title: 'Contato',
    component: ContatoComponent, data: { animation: '*' }
  },
  {
    path: 'home',
    title: 'Loja N-1',
    component: HomeComponent,
    data: { animation: 'home' },
    path: 'pesquisar', title: 'Pesquisar',
    component: PesquisarComponent, data: { animation: '*' }
  },
  {
    path: 'perfil',
    title: 'Perfil',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/perfil/perfil.module').then((x) => x.PerfilModule),
    data: { animation: '*' },
  },
  { path: '', title: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', title: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
