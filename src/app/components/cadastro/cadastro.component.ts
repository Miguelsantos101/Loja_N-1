import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmaSenha: ['', [Validators.required]],
    });
  }

  formValid(): boolean {
    if (!this.cadastroForm.valid) {
      if (!this.cadastroForm.controls['nome'].valid) {
        alert('Por favor verifique o campo de nome');
        return false;
      }
    }
    return true;
  }

  createAccount(): void {
    if (this.formValid()) {
      this.router.navigate(['/login']);
    }
  }
}
