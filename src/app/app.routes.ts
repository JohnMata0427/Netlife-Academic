import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/auth/registro.component';
import { LoginComponent } from './pages/auth/login.component';
import { HomeComponent } from './pages/home.component';
import { RecoveryPasswordComponent } from './pages/auth/recovery-password.component';
import { VerifyCodeComponent } from './pages/auth/verify-code.component';
import { NewPasswordComponent } from './pages/auth/new-password.component';

export const routes: Routes = [
    { path: 'auth', children: [
        { path: 'register', component: RegistroComponent },
        { path: 'login', component: LoginComponent },
        { path: 'recovery-password', component: RecoveryPasswordComponent },
        { path: 'verify-code', component: VerifyCodeComponent },
        { path: 'new-password', component: NewPasswordComponent },
    ]},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/auth/register', pathMatch: 'full' },
];