export class User {
  email: string = '';
  senha: string = '';

  constructor(dto?: any) {
    if (dto) {
      this.email = dto.email;
      this.senha = dto.senha;
    }
  }
}
