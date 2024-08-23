import { Component } from '@angular/core';
import { CourseInfoComponent } from '@components/course-info.component';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomTitleComponent } from '@components/custom-title.component';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [CourseInfoComponent, UserLayout, CustomTitleComponent],
  template: `
    <app-user-layout>
      <app-custom-title title="Cursos" />
      <p class="my-4 px-8 text-sm sm:pl-16">
        Información sobre los cursos que estás tomando o que tomaste.
      </p>
      <section class="px-8 sm:pl-16">
        <h2 class="font-extrabold text-primary">EN PROCESO</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-course-info
            id="redes-de-computadoras"
            title="Redes de Computadoras"
            teacher="Monica Jimenez"
            src="/courses/redes.jpg"
            progress="14"
          />
          <app-course-info
            id="virtual/inteligencia-artificial"
            title="Inteligencia Artificial"
            teacher="Vanessa Guevara"
            src="/courses/ia.png"
            progress="22"
          />
          <app-course-info
            id="analisis-de-datos"
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
            progress="74"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
            progress="45"
          />
        </div>
      </section>
      <section class="mt-4 px-8 sm:pl-16">
        <h2 class="font-extrabold text-primary">COMPLETADOS</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-course-info
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            src="/courses/java.png"
            progress="100"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/google-analytics.png"
            progress="100"
          />
        </div>
      </section>
      <section class="mb-20 mt-4 px-8 sm:pl-16">
        <h2 class="font-extrabold text-primary">CURSOS RECOMENDADOS PARA TI</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-course-info
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            src="/courses/sql.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
        </div>
      </section>
    </app-user-layout>
  `,
})
export class MisCursosComponent {
  constructor() {}
}
