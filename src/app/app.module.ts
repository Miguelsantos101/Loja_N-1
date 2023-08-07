import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';
import { PesquisarModule } from './pages/pesquisar/pesquisar.module';
import { ContatoModule } from './pages/contato/contato.module';
import { PerfilModule } from './pages/perfil/perfil.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,

    // Application modules
    LoginModule,
    HomeModule,
    PesquisarModule,
    ContatoModule,
    PerfilModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
