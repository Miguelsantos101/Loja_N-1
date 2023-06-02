import { Component } from '@angular/core';

@Component({
  selector: 'app-infomacoes',
  templateUrl: './infomacoes.component.html',
  styleUrls: ['./infomacoes.component.css']
})
export class InfomacoesComponent {
  user: any = {
    name: "Usuário",
    email: "exemplo@teste.com",
    birthday: "02/03/1998",
    firstAddress: "Rua de exemplo, Nº 1213",
    secondAddress: "Rua de exemplo2, Nº 1213"
  };
}
