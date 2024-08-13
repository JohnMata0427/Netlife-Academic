import { Component } from '@angular/core';
import { CourseInfoComponent } from '@components/course-info.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { CustomButtonComponent } from '../../components/custom-button.component';

@Component({
  selector: 'app-admin-courses',
  standalone: true,
  imports: [
    CustomTitleComponent,
    CourseInfoComponent,
    AdminLayoutComponent,
    CustomButtonComponent,
  ],
  template: `
    <app-admin-layout>
      <section class="flex flex-col justify-end ">
        <h1 class="text-primary text-2xl font-bold ">Nuevos cursos</h1>
        <p class="my-4 text-sm ">
          Para agregar, eliminar o editar usuarios y sus roles o privilegios.
          Se admite el formato CSV para exportar o importar datos

        </p>
        <app-custom-button
          [text]="'Crear nuevo curso'"
          [color]="'orange'"
          [moreStyles]="'gap-2 group'"
        >
          <svg
            class="size-6 z-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 20"
          >
            <path
              class="fill-white  group-hover:fill-primary"
              d="M22.22 0h-20C1 0 0 .99 0 2.22v13.34c0 1.22.99 2.22 2.22 2.22h5.56V20h8.89v-2.22h5.55c1.22 0 2.21-1 2.21-2.22l.01-13.34c0-1.23-1-2.22-2.22-2.22Zm0 15.56h-20V2.22h20v13.34Zm-5.55-7.78V10h-3.34v3.33h-2.22V10H7.78V7.78h3.33V4.44h2.22v3.34h3.34Z"
            />
          </svg>
        </app-custom-button>
        <div class="flex gap-8 flex-wrap justify-center sm:justify-start mt-8">
          <app-course-info
            [id]="'redes-de-computadoras'"
            [src]="'courses/redes.jpg'"
            [title]="'Redes de Computadoras'"
          />
          <app-course-info
            [id]="'inteligencia-artificial'"
            [src]="'courses/ia.png'"
            [title]="'Inteligencia Artificial'"
          />
        </div>
      </section>
    </app-admin-layout>
  `,
})
export class AdminCoursesComponent {
  constructor() {}
}
