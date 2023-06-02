import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  shopItems: any[] = [
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
    { image: 'Imagem', title: 'Título', description: 'Descrição rápida do produto', price: '10,00' },
  ];

  constructor(private userService: UserService) { }

  logOut(): void {
    this.userService.logOut();
  }
}
