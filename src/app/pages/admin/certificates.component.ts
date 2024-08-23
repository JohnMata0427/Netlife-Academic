import { Component } from '@angular/core';
import { CourseInfoComponent } from '@components/course-info.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { CustomButtonComponent } from '../../components/custom-button.component';
import { CertificadoComponent } from '../../components/certificado.component';

@Component({
  selector: 'app-admin-courses',
  standalone: true,
  imports: [
    CustomTitleComponent,
    CourseInfoComponent,
    AdminLayoutComponent,
    CustomButtonComponent,
    CertificadoComponent,
  ],
  template: `
    <app-admin-layout>
      <section class="flex flex-col justify-end">
        <h1 class="text-2xl font-bold text-primary">
          Plantillas para certificados
        </h1>
        <p class="my-4 text-sm">
          Para agregar, eliminar o editar usuarios y sus roles o privilegios. Se
          admite el formato CSV para exportar o importar datos
        </p>
        <app-custom-button
          (click)="mostrarModal = true"
          [text]="'Crear nuevo certificado'"
          [color]="'orange'"
          [moreStyles]="'gap-2 group'"
        >
          <svg
            class="z-10 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 20"
          >
            <path
              class="fill-white group-hover:fill-primary"
              d="M22.22 0h-20C1 0 0 .99 0 2.22v13.34c0 1.22.99 2.22 2.22 2.22h5.56V20h8.89v-2.22h5.55c1.22 0 2.21-1 2.21-2.22l.01-13.34c0-1.23-1-2.22-2.22-2.22Zm0 15.56h-20V2.22h20v13.34Zm-5.55-7.78V10h-3.34v3.33h-2.22V10H7.78V7.78h3.33V4.44h2.22v3.34h3.34Z"
            />
          </svg>
        </app-custom-button>
        <div class="mt-8 flex flex-wrap justify-center gap-8 sm:justify-start">
          <app-certificado
            [id]="'inteligencia-artificial'"
            [src]="'certificate.png'"
            [title]="'Plantilla de certificado de Inteligencia Artificial'"
          />
        </div>
      </section>
      @if (mostrarModal) {
        <div
          class="absolute inset-0 z-50 m-10 flex flex-col items-center justify-center"
        >
          <form action="" class="flex flex-col gap-2 rounded-lg bg-white p-8">
            <h2 class="text-center text-2xl font-bold text-primary">
              Crear nuevo plantilla de certificado
            </h2>
            <img
              src="{{ imagePreview || 'NetlifeLogo.webp' }}"
              alt=""
              class="h-52 w-96 rounded-lg object-cover"
            />

            <label for="">Suba la plantilla del certificado</label
            ><input
              (change)="onFileChange($event)"
              class="rounded-lg border border-black p-1.5"
              type="file"
            />
            <label for="">Escriba el nombre de la plantilla</label
            ><input
              class="rounded-lg border border-black p-1.5"
              type="text"
              placeholder="Nombre de la plantilla"
            />
            <div class="mt-4 flex justify-evenly">
              <app-custom-button
                [text]="'Cancelar'"
                (click)="mostrarModal = false"
              />
              <app-custom-button
                [text]="'Crear certificado'"
                [color]="'orange'"
              />
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
export class AdminCertificatesComponent {
  constructor() {}
  mostrarModal = false;
  imagePreview: any;
  image: any;

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => (this.imagePreview = reader.result);
      this.image = file;
    }
  }
}
