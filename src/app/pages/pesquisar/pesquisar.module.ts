import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarComponent } from './pesquisar.component';



@NgModule({
  declarations: [PesquisarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisarComponent
  ]
})
export class PesquisarModule { }
