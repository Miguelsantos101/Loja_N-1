import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.css'],
})
export class RecuperacaoSenhaComponent {
  recuperaSenhaForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.recuperaSenhaForm = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  formValid(): boolean {
    if (!this.recuperaSenhaForm.valid) {
      return false;
    }

    return true;
  }

  sendEmail(): void {
    if (this.formValid()) {
      this.router.navigate(['/login']);
    }
  }
}
