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
    birthday: '02/03/1998',
    firstAddress: 'Rua de exemplo, Nº 1213',
    secondAddress: 'Rua de exemplo2, Nº 1213',
  };

  saveChanges(): void {
    console.log('Dados salvos com sucesso!');
  }
}
