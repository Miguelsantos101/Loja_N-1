export class User {
  email: string = '';
  password: string = '';

  constructor(user?: User) {
    if (user) {
      this.email = user.email;
      this.password = user.password;
    }
  }
}
