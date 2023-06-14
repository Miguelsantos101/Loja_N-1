export class Register {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(register?: Register) {
    if (register) {
      this.name = register.name;
      this.email = register.email;
      this.password = register.password;
    }
  }
}
