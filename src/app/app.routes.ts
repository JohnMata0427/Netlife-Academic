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
import { ActualizarPerfilComponent } from './pages/actualizar-perfi.component';
import { authGuard } from './guard/required-auth.guard';
import { noAuthGuard } from './guard/no-required-auth.guard';
import { MisCertificadosComponent } from './pages/mis-certificados.component';
import { AdminDashboardComponent } from './pages/admin/dashboard.component';
import { adminGuard } from './guard/required-admin.guard';

export const routes: Routes = [
    { path: 'auth', children: [
        { path: 'register', component: RegistroComponent, canActivate: [noAuthGuard] },
        { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
        { path: 'recovery-password', component: RecoveryPasswordComponent, canActivate: [noAuthGuard] },
        { path: 'verify-code', component: VerifyCodeComponent, canActivate: [noAuthGuard] },
        { path: 'new-password', component: NewPasswordComponent, canActivate: [noAuthGuard] },
    ]},
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'mis-cursos/:id', component: CourseComponent, canActivate: [authGuard] },
    { path: 'mis-cursos', component: MisCursosComponent, canActivate: [authGuard] },
    { path: 'mi-perfil', children: [
        { path: '', component: MiPerfilComponent, canActivate: [authGuard] },
        { path: 'actualizar-informacion', component: ActualizarPerfilComponent, canActivate: [authGuard] }
    ] },
    { path: 'mis-certificados', component: MisCertificadosComponent },
    { path: 'admin', canActivate: [authGuard, adminGuard], children: [
        { path: 'dashboard', component: AdminDashboardComponent }
    ] },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];