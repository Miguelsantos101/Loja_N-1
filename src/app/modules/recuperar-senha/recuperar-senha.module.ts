import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecuperacaoSenhaComponent } from './recuperacao-senha.component';

@NgModule({
  declarations: [RecuperacaoSenhaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RecuperacaoSenhaComponent
  ]
})
export class RecuperarSenhaModule { }
