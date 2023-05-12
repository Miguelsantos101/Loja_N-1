import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', title: 'Loja N-1', component: HomeComponent, data: { animation: 'home' } },
  { path: 'login', title: 'Login', component: LoginComponent, data: { animation: 'login' } },
  { path: '', title: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
