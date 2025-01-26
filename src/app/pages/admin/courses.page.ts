import { Component } from '@angular/core';
import { CourseInfoComponent } from '@/components/course-info.component';
import { AdminLayout } from '@/layouts/admin-layout.component';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [CourseInfoComponent, AdminLayout, CustomButtonComponent],
  template: `
    <app-admin-layout>
      <section class="flex flex-col justify-end">
        <h1 class="text-primary text-2xl font-bold">Nuevos cursos</h1>
        <p class="my-4 text-sm">
          Para agregar, eliminar o editar usuarios y sus roles o privilegios. Se
          admite el formato CSV para exportar o importar datos
        </p>
        <app-button-component
          (click)="mostrarModal = true"
          text="Crear nuevo curso"
          color="orange"
          moreStyles="gap-2 group"
        >
          <svg
            class="z-10 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 20"
          >
            <path
              class="group-hover:fill-primary fill-white"
              d="M22.22 0h-20C1 0 0 .99 0 2.22v13.34c0 1.22.99 2.22 2.22 2.22h5.56V20h8.89v-2.22h5.55c1.22 0 2.21-1 2.21-2.22l.01-13.34c0-1.23-1-2.22-2.22-2.22Zm0 15.56h-20V2.22h20v13.34Zm-5.55-7.78V10h-3.34v3.33h-2.22V10H7.78V7.78h3.33V4.44h2.22v3.34h3.34Z"
            />
          </svg>
        </app-button-component>
        <div class="mt-8 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-courseinfo-component
            id="redes-de-computadoras"
            src="courses/redes.jpg"
            title="Redes de Computadoras"
            teacher="Monica Jimenez"
          />
          <app-courseinfo-component
            id="inteligencia-artificial"
            src="courses/ia.png"
            title="Inteligencia Artificial"
            teacher="Vanessa Guevara"
          />
        </div>
      </section>
      @if (mostrarModal) {
        <div
          class="absolute inset-0 z-50 m-10 flex flex-col items-center justify-center"
        >
          <form action="" class="flex flex-col gap-2 rounded-lg bg-white p-8">
            <h2 class="text-primary text-center text-2xl font-bold">
              Crear nuevo curso
            </h2>
            <img
              [src]="imagePreview || 'NetlifeLogo.webp'"
              alt=""
              class="h-52 w-96 rounded-lg object-cover"
            />

            <label for="">Suba la imagen del curso</label
            ><input
              (change)="onFileChange($event)"
              class="rounded-lg border border-black p-1.5"
              type="file"
            />
            <label for="">Escriba el nombre del curso</label
            ><input
              class="rounded-lg border border-black p-1.5"
              type="text"
              placeholder="Nombre del curso"
            />
            <label for="">Seleccione el tipo del curso</label
            ><select class="rounded-lg border border-black p-1.5">
              <option value="virtual">Virtual</option>
              <option value="presencial">Presencial</option>
            </select>
            <label for="">Ingrese el correo del docente</label
            ><input
              class="rounded-lg border border-black p-1.5"
              type="email"
              placeholder="docente@email.com"
            />
            <div class="mt-4 flex justify-evenly">
              <app-button-component
                text="Cancelar"
                (click)="mostrarModal = false"
              />
              <app-button-component text="Crear curso" color="orange" />
            </div>
          </form>
        </div>
        <div
          class="fixed inset-0 z-40 bg-black opacity-75"
          (click)="mostrarModal = false"
        ></div>
      }
    </app-admin-layout>
  `,
})
export class AdminCoursesPage {
  public mostrarModal = false;
  public imagePreview: string | ArrayBuffer | null = null;
  // private image!: File;

  public onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => (this.imagePreview = reader.result);
      // this.image = file;
    }
  }
}
