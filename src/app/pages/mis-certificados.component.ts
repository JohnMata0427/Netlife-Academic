import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [
    HeaderComponent,
    CourseInfoComponent,
    FooterComponent,
    RouterOutlet,
  ],
  template: `
    <router-outlet />
    <app-header />
    <main>
      <div class="relative mt-10">
        <img class="w-80 h-auto" src="title-layout.png" alt="Cursos" />
        <h1 class="absolute top-2 left-16 text-white font-semibold">
          Certificados
        </h1>
      </div>
      <p class="pl-16 my-4 text-sm">
        En este apartado, podrás ver todos tus certificados obtenidos y tendrás
        la opción de descargarlos en formato .pdf o compartirlos en tus redes
        sociales.
      </p>
    </main>
    <app-footer />
  `,
})
export class MisCertificadosComponent {
  constructor() {}
}
