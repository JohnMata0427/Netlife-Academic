import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro.component';
import { LoginComponent } from './pages/login.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
    { path: 'auth', children: [
        { path: 'registro', component: RegistroComponent },
        { path: 'login', component: LoginComponent },
    ]},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/auth/registro', pathMatch: 'full' },
];
