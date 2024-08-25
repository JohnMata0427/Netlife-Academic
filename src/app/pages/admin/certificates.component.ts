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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="z-10 size-6" viewBox="0 0 25 20"><path d="M22.2 0h-20C1 0 0 1 0 2.2v13.4c0 1.2 1 2.2 2.2 2.2h5.6V20h8.9v-2.2h5.5c1.2 0 2.2-1 2.2-2.2V2.2c0-1.2-1-2.2-2.2-2.2Zm0 15.6h-20V2.2h20v13.4Zm-5.5-7.8V10h-3.4v3.3h-2.2V10H7.8V7.8H11V4.4h2.2v3.4h3.4Z" class="fill-white group-hover:fill-primary"/></svg>
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
