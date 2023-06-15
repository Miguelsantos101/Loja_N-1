import { Component } from '@angular/core';

@Component({
  selector: 'app-alterar-infomacoes',
  templateUrl: './alterar-infomacoes.component.html',
  styleUrls: ['./alterar-infomacoes.component.css'],
})
export class AlterarInfomacoesComponent {
  user: any = {
    name: 'Usuário',
    email: 'exemplo@teste.com',
    birthday: '1998-03-02',
    firstAddress: 'Rua de exemplo, Nº 0000',
    secondAddress: 'Rua de exemplo 2, Nº 0000',
  };

  saveChanges(): void {
    console.log('Dados salvos com sucesso!');
  }
}
