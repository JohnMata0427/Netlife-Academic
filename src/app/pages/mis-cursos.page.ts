import { Component } from '@angular/core';
import { CourseInfoComponent } from '@/components/course-info.component';
import { UserLayout } from '@/layouts/user.layout';
import { CustomTitleComponent } from '@/components/custom-title.component';

@Component({
  imports: [CourseInfoComponent, UserLayout, CustomTitleComponent],
  template: `
    <app-user-layout>
      <app-title-component title="Cursos" />
      <p class="my-4 px-8 text-sm sm:pl-16">
        Información sobre los cursos que estás tomando o que tomaste.
      </p>
      <section class="px-8 sm:pl-16">
        <h2 class="text-primary font-extrabold uppercase">Cursos Pendientes</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-courseinfo-component
            id="redes-de-computadoras"
            title="Redes de Computadoras"
            teacher="Monica Jimenez"
            src="/courses/redes.jpg"
            [progress]="14"
          />
          <app-courseinfo-component
            id="virtual/inteligencia-artificial"
            title="Inteligencia Artificial"
            teacher="Vanessa Guevara"
            src="/courses/ia.png"
            [progress]="45"
          />
          <app-courseinfo-component
            id="analisis-de-datos"
            title="Sistemas Operativos"
            teacher="Ivonne Maldonado"
            src="https://miro.medium.com/v2/resize:fit:730/0*SOW9caZs9ouRukN8.jpg"
            [progress]="74"
          />
          <app-courseinfo-component
            id="aplicaciones-distribuidas"
            title="Aplicaciones Distribuidas"
            teacher="Byron Loarte"
            src="https://www.axigen.com/usr/files/articles/x117.png.pagespeed.ic.MlTzHrA5On.png"
            [progress]="90"
          />
        </div>
      </section>
      <section class="mt-8 px-8 sm:pl-16">
        <h2 class="text-primary font-extrabold uppercase">
          Cursos Completados
        </h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-courseinfo-component
            id="redes-de-computadoras"
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            src="/courses/java.png"
            [progress]="100"
          />
          <app-courseinfo-component
            id="analisis-de-datos"
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/google-analytics.png"
            [progress]="100"
          />
        </div>
      </section>
      <section class="mt-8 px-8 sm:pl-16">
        <h2 class="text-primary font-extrabold">CURSOS RECOMENDADOS PARA TI</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-courseinfo-component
            id="control-de-versiones"
            title="Control de Versiones"
            teacher="Gabriel García"
            src="https://fireship.io/courses/git/img/featured.png"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="metodologias-agiles"
            title="Metodologias Agiles"
            teacher="Ivonne Maldonado"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240208183413/In-Demand-Scrum-Master-Certifications.png"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="html-y-css"
            title="HTML y CSS"
            teacher="Katherine Díaz"
            src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="python-desde-cero"
            title="Python desde cero"
            teacher="Ivonne Maldonado"
            src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png"
            [newCourse]="true"
          />
        </div>
      </section>
    </app-user-layout>
  `,
})
export class MisCursosPage {}
