export class Register {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmaSenha: string = '';

  constructor(register?: Register) {
    if (register) {
      this.nome = register.nome;
      this.email = register.email;
      this.senha = register.senha;
      this.confirmaSenha = register.confirmaSenha;
    }
  }
}
