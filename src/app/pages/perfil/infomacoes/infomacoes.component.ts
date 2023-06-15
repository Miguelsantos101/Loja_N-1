import { Component } from '@angular/core';

@Component({
  selector: 'app-infomacoes',
  templateUrl: './infomacoes.component.html',
  styleUrls: ['./infomacoes.component.css'],
})
export class InfomacoesComponent {
  user: any = {
    name: 'Usuário',
    email: 'exemplo@teste.com',
    birthday: '02/03/1998',
    firstAddress: 'Rua de exemplo, Nº 0000',
    secondAddress: 'Rua de exemplo 2, Nº 0000',
  };
}
