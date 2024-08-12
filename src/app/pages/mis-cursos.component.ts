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
      <p class="pl-16 my-4 text-sm">
        Información sobre los cursos que estás tomando o que tomaste.
      </p>
      <section class="pl-16">
        <h2 class="text-primary font-extrabold">EN PROCESO</h2>
        <div class="mt-4 flex-wrap space-8">
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
            teacher="Ivonne Maldonado"
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
      <section class="pl-16 mt-4">
        <h2 class="text-primary font-extrabold">COMPLETADOS</h2>
        <div class="mt-4 space-8">
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
      <section class="pl-16 mt-4 mb-20">
        <h2 class="text-primary font-extrabold">CURSOS RECOMENDADOS PARA TI</h2>
        <div class="mt-4 space-8">
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
