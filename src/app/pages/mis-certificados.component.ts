import { Component } from '@angular/core';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { CertificadoComponent } from '@components/certificado.component';

@Component({
  selector: 'app-mis-certificados',
  standalone: true,
  imports: [UserLayout, CustomTitleComponent, CertificadoComponent],
  template: `
    <app-user-layout>
      <section class="flex flex-col justify-end">
        <app-custom-title title="Certificados" />
        <p class="pl-16 my-4 text-sm">
          En este apartado, podrás ver todos tus certificados obtenidos y
          tendrás la opción de descargarlos en formato .pdf o compartirlos en
          tus redes sociales.
        </p>
        <!-- <div class="flex flex-col justify-end items-center gap-y-4 mt-20">
          <div
            class="bg-gradient-to-r from-[#FEE500] to-primary w-80 p-4 rounded-lg text-center"
          >
            <p class="text-sm">
              Actualmente no tienes nungún certificado, pero
              <strong>no olvides seguir</strong> uno de nuestros
              <a class="text-primary font-bold" href="/mis-cursos">cursos</a>
              para obtener uno.
            </p>
          </div>
          <img
            src="/stop.webp"
            alt="Imagen para indicar que el usuario no tiene certificados"
          />
        </div> -->
        <div class="flex gap-x-8 ml-16">
          <app-certificado
            [id]="'redes-de-computadoras'"
            [src]="'courses/redes.jpg'"
            [title]="'Redes de Computadoras'"
          ></app-certificado>
          <app-certificado
            [id]="'inteligencia-artificial'"
            [src]="'courses/ia.png'"
            [title]="'Inteligencia Artificial'"
          ></app-certificado>
        </div>
      </section>
    </app-user-layout>
  `,
})
export class MisCertificadosComponent {
  constructor() {}
}
