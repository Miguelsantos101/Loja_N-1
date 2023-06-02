import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../../guard/auth.guard';

import { PerfilComponent } from './perfil.component';
import { InfomacoesComponent } from './infomacoes/infomacoes.component';
import { AlterarInfomacoesComponent } from './alterar-infomacoes/alterar-infomacoes.component';
import { MudarSenhaComponent } from './mudar-senha/mudar-senha.component';


const perfilRoutes: Routes = [
  {
    path: 'perfil', title: 'Perfil',
    component: PerfilComponent, data: { animation: '*' },
    canActivate: [authGuard],
    children: [
      {
        path: 'informacoes',
        component: InfomacoesComponent,
        data: { animation: '*' },
      },
      {
        path: 'alterar-informacoes',
        component: AlterarInfomacoesComponent,
        data: { animation: '*' },
      },
      {
        path: 'mudar-senha',
        component: MudarSenhaComponent,
        data: { animation: '*' },
      },
      {
        path: '',
        component: InfomacoesComponent,
        data: { animation: '*' },
      },
      {
        path: '*',
        component: InfomacoesComponent,
        data: { animation: '*' },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(perfilRoutes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule { }
