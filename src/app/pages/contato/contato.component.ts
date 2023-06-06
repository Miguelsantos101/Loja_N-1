import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  animations: [slideInAnimation],
})
export class ContatoComponent {}
