import { Routes } from '@angular/router';

import { RegistroPage } from '@/pages/auth/registro.page';
import { LoginPage } from '@/pages/auth/login.page';
import { HomePage } from '@/pages/home.page';
import { RecoveryPasswordPage } from '@/pages/auth/recovery-password.page';
import { VerifyCodePage } from '@/pages/auth/verify-code.page';
import { NewPasswordPage } from '@/pages/auth/new-password.page';
import { MisCursosPage } from '@/pages/mis-cursos.page';
import { MiPerfilPage } from '@/pages/mi-perfil.page';
import { CoursePage } from '@/pages/course.page';
import { ActualizarPerfilPage } from '@/pages/actualizar-perfil.page';
import { MisCertificadosPage } from '@/pages/mis-certificados.page';
import { AdminDashboardPage } from '@/pages/admin/dashboard.page';
import { AdminAnunciosPage } from '@/pages/admin/anuncios.page';
import { NotFoundPage } from '@/pages/not-found.page';
import { TermsPage } from '@/pages/auth/terms.page';
import { ExamenPage } from '@/pages/examen.page';
import { GradePage } from '@/pages/grade.page';
import { VirtualCoursePage } from '@/pages/virtual-course.page';
import { VideoCoursePage } from '@/pages/video-course.page';
import { AdminCoursesPage } from '@/pages/admin/courses.page';
import { AdminCertificatesPage } from '@/pages/admin/certificates.page';

import { authGuard } from '@/guards/required-auth.guard';
import { noAuthGuard } from '@/guards/no-required-auth.guard';
import { adminGuard } from '@/guards/required-admin.guard';
import { requiredCodeGuard } from '@/guards/required-code.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    children: [
      { path: 'register', component: RegistroPage },
      { path: 'login', component: LoginPage },
      { path: 'recovery-password', component: RecoveryPasswordPage },
      {
        path: 'verify-code',
        component: VerifyCodePage,
        canActivate: [requiredCodeGuard],
      },
      {
        path: 'new-password',
        component: NewPasswordPage,
        canActivate: [requiredCodeGuard],
      },
    ],
  },
  { path: 'terms-and-conditions', component: TermsPage },
  { path: 'home', component: HomePage, canActivate: [authGuard] },
  {
    path: 'mis-cursos/virtual/video',
    component: VideoCoursePage,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos/virtual/:id',
    component: VirtualCoursePage,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos/:id',
    component: CoursePage,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos',
    component: MisCursosPage,
    canActivate: [authGuard],
  },
  { path: 'examen', component: ExamenPage, canActivate: [authGuard] },
  { path: 'grade', component: GradePage, canActivate: [authGuard] },
  {
    path: 'actualizar-informacion',
    component: ActualizarPerfilPage,
    canActivate: [authGuard],
  },
  { path: 'mi-perfil', component: MiPerfilPage, canActivate: [authGuard] },
  {
    path: 'mis-certificados',
    component: MisCertificadosPage,
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardPage },
      { path: 'anuncios', component: AdminAnunciosPage },
      { path: 'cursos', component: AdminCoursesPage },
      { path: 'certificados', component: AdminCertificatesPage },
    ],
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];
