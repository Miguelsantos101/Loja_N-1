import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    AlterarInfomacoesComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule { }
