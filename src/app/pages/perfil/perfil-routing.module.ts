import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './perfil.component';
import { InfomacoesComponent } from './infomacoes/infomacoes.component';
import { AlterarInfomacoesComponent } from './alterar-infomacoes/alterar-infomacoes.component';
import { MudarSenhaComponent } from './mudar-senha/mudar-senha.component';

const perfilRoutes: Routes = [
  {
    path: '',
    title: 'Perfil',
    component: PerfilComponent,
    data: { animation: '*' },
    children: [
      {
        path: 'informacoes',
        title: 'Informações',
        component: InfomacoesComponent,
      },
      {
        path: 'alterar-informacoes',
        title: 'Alterar informações',
        component: AlterarInfomacoesComponent,
      },
      {
        path: 'mudar-senha',
        title: 'Mudar senha',
        component: MudarSenhaComponent,
      },
      {
        path: '',
        component: InfomacoesComponent,
      },
      {
        path: '*',
        component: InfomacoesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(perfilRoutes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
