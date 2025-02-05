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
            src="/courses/redes.jpg"
            title="Redes de Computadoras"
            teacher="Monica Jimenez"
            [progress]="14"
          />
          <app-courseinfo-component
            id="virtual/inteligencia-artificial"
            src="/courses/ia.png"
            title="Inteligencia Artificial"
            teacher="Vanessa Guevara"
            [progress]="45"
          />
          <app-courseinfo-component
            id="analisis-de-datos"
            src="https://miro.medium.com/v2/resize:fit:730/0*SOW9caZs9ouRukN8.jpg"
            title="Sistemas Operativos"
            teacher="Ivonne Maldonado"
            [progress]="74"
          />
          <app-courseinfo-component
            id="aplicaciones-distribuidas"
            src="https://www.axigen.com/usr/files/articles/x117.png.pagespeed.ic.MlTzHrA5On.png"
            title="Aplicaciones Distribuidas"
            teacher="Byron Loarte"
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
            src="/courses/java.png"
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            [progress]="100"
          />
          <app-courseinfo-component
            id="analisis-de-datos"
            src="/courses/google-analytics.png"
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            [progress]="100"
          />
        </div>
      </section>
      <section class="mt-8 px-8 sm:pl-16">
        <h2 class="text-primary font-extrabold">CURSOS RECOMENDADOS PARA TI</h2>
        <div class="mt-4 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-courseinfo-component
            id="control-de-versiones"
            src="https://fireship.io/courses/git/img/featured.png"
            title="Control de Versiones"
            teacher="Gabriel García"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="metodologias-agiles"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240208183413/In-Demand-Scrum-Master-Certifications.png"
            title="Metodologias Agiles"
            teacher="Ivonne Maldonado"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="html-y-css"
            src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6"
            title="HTML y CSS"
            teacher="Katherine Díaz"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="python-desde-cero"
            src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png"
            title="Python desde cero"
            teacher="Ivonne Maldonado"
            [newCourse]="true"
          />
        </div>
      </section>
    </app-user-layout>
  `,
})
export class MisCursosPage {}
