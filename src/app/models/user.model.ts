export class User {
  email: string = '';
  senha: string = '';

  constructor(user?: User) {
    if (user) {
      this.email = user.email;
      this.senha = user.senha;
    }
  }
}
