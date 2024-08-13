import { Routes } from '@angular/router';
import { RegistroComponent } from '@pages/auth/registro.component';
import { LoginComponent } from '@pages/auth/login.component';
import { HomeComponent } from '@pages/home.component';
import { RecoveryPasswordComponent } from '@pages/auth/recovery-password.component';
import { VerifyCodeComponent } from '@pages/auth/verify-code.component';
import { NewPasswordComponent } from '@pages/auth/new-password.component';
import { MisCursosComponent } from '@pages/mis-cursos.component';
import { MiPerfilComponent } from '@pages/mi-perfil.component';
import { CourseComponent } from '@pages/course.component';
import { ActualizarPerfilComponent } from '@pages/actualizar-perfil.component';
import { authGuard } from '@guards/required-auth.guard';
import { noAuthGuard } from '@guards/no-required-auth.guard';
import { MisCertificadosComponent } from '@pages/mis-certificados.component';
import { AdminDashboardComponent } from '@pages/admin/dashboard.component';
import { adminGuard } from '@guards/required-admin.guard';
import { requiredCodeGuard } from '@guards/required-code.guard';
import { AdminAnunciosComponent } from '@pages/admin/anuncios.component';
import { NotFoundComponent } from '@pages/not-found.component';
import { TermsComponent } from '@pages/terms.component';
import { ExamenComponent } from '@pages/examen.component';
import { GradeComponent } from '@pages/grade.component';
import { VirtualCourseComponent } from '@pages/virtual-course.component';
import { VideoCourseComponent } from '@pages/video-course.component';
import { AdminCoursesComponent } from '@pages/admin/courses.component';
import { AdminCertificatesComponent } from '@pages/admin/certificates.component';
import { CalendarComponent } from '@pages/calendar.component';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    children: [
      { path: 'register', component: RegistroComponent },
      { path: 'login', component: LoginComponent },
      { path: 'recovery-password', component: RecoveryPasswordComponent },
      {
        path: 'verify-code',
        component: VerifyCodeComponent,
        canActivate: [requiredCodeGuard],
      },
      {
        path: 'new-password',
        component: NewPasswordComponent,
        canActivate: [requiredCodeGuard],
      },
    ],
  },
  { path: 'terms-and-conditions', component: TermsComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'mis-cursos/virtual/video',
    component: VideoCourseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos/virtual/:id',
    component: VirtualCourseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos/:id',
    component: CourseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'mis-cursos',
    component: MisCursosComponent,
    canActivate: [authGuard],
  },
  { path: 'examen', component: ExamenComponent, canActivate: [authGuard] },
  { path: 'grade', component: GradeComponent, canActivate: [authGuard] },
  {
    path: 'actualizar-informacion',
    component: ActualizarPerfilComponent,
    canActivate: [authGuard],
  },
  { path: 'mi-perfil', component: MiPerfilComponent, canActivate: [authGuard] },
  {
    path: 'mis-certificados',
    component: MisCertificadosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'anuncios', component: AdminAnunciosComponent },
      { path: 'cursos', component: AdminCoursesComponent },
      { path: 'certificados', component: AdminCertificatesComponent },
    ],
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, canActivate: [authGuard] },

];
