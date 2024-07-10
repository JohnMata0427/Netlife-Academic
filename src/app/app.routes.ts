import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/auth/registro.component';
import { LoginComponent } from './pages/auth/login.component';
import { HomeComponent } from './pages/home.component';
import { RecoveryPasswordComponent } from './pages/auth/recovery-password.component';
import { VerifyCodeComponent } from './pages/auth/verify-code.component';
import { NewPasswordComponent } from './pages/auth/new-password.component';
import { MisCursosComponent } from './pages/mis-cursos.component';
import { MiPerfilComponent } from './pages/mi-perfil.component';
import { CourseComponent } from './pages/course.component';

export const routes: Routes = [
    { path: 'auth', children: [
        { path: 'register', component: RegistroComponent },
        { path: 'login', component: LoginComponent },
        { path: 'recovery-password', component: RecoveryPasswordComponent },
        { path: 'verify-code', component: VerifyCodeComponent },
        { path: 'new-password', component: NewPasswordComponent },
    ]},
    { path: 'home', component: HomeComponent },
    { path: 'mis-cursos/:id', component: CourseComponent },
    { path: 'mis-cursos', component: MisCursosComponent },
    { path: 'mi-perfil', component: MiPerfilComponent },
    { path: '', redirectTo: '/auth/register', pathMatch: 'full' },
];