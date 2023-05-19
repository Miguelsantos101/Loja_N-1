import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.css']
})
export class RecuperacaoSenhaComponent {
  recuperaSenhaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.recuperaSenhaForm = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  onSubmit() {
    window.location.assign('/login');
  }
}
