export class PasswordRecovery {
  email: string = '';

  constructor(passwordRecovery?: PasswordRecovery) {
    if (passwordRecovery) {
      this.email = passwordRecovery.email;
    }
  }
}
