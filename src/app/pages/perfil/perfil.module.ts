import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';
import { InfomacoesComponent } from './infomacoes/infomacoes.component';
import { MudarSenhaComponent } from './mudar-senha/mudar-senha.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { AlterarInfomacoesComponent } from './alterar-infomacoes/alterar-infomacoes.component';

@NgModule({
  declarations: [
    PerfilComponent,
    InfomacoesComponent,
    MudarSenhaComponent,
    AlterarInfomacoesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PerfilRoutingModule],
  exports: [PerfilComponent],
})
export class PerfilModule {}
