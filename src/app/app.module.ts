import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';
import { PerfilModule } from './pages/perfil/perfil.module';
import { PesquisarModule } from './pages/pesquisar/pesquisar.module';
import { ContatoModule } from './pages/contato/contato.module';

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
    PerfilModule,
    PesquisarModule,
    ContatoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
