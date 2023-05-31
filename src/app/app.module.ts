import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { RecuperarSenhaModule } from './modules/recuperar-senha/recuperar-senha.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { PesquisarModule } from './modules/pesquisar/pesquisar.module';
import { ContatoModule } from './modules/contato/contato.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // modulos angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // modulos da aplicação
    AppRoutingModule,
    LoginModule,
    HomeModule,
    CadastroModule,
    RecuperarSenhaModule,
    PerfilModule,
    PesquisarModule,
    ContatoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
