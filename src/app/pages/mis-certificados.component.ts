import { Component } from '@angular/core';
import { UserLayout } from "../layouts/user-layout.component";
import { CustomTitleComponent } from '@netlifeacademic/components/custom-title.component';

@Component({
  selector: 'app-mis-certificados',
  standalone: true,
  imports: [
    UserLayout,
    CustomTitleComponent
],
  template: `
    <app-user-layout>
        <app-custom-title title="Certificados" />
        <p class="pl-16 my-4 text-sm">
          En este apartado, podrás ver todos tus certificados obtenidos y tendrás
          la opción de descargarlos en formato .pdf o compartirlos en tus redes
          sociales.
        </p>
      <div class="flex flex-col justify-center items-center gap-y-4 mt-24" >
        <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] w-80 p-4 rounded-lg text-center">
          <p class="text-sm">Actualmente no tienes nungún certificado, pero <strong>no olvides seguir</strong> uno de nuestros <a class="text-[#FD6A00] font-bold" href="/mis-cursos">cursos</a> para obtener uno.</p>
        </div>
        <img src="no-certificates.png" alt="Imagen para indicar que el usuario no tiene certificados">
      </div>
    </app-user-layout>
  `,
})
export class MisCertificadosComponent {
  constructor() {}
}
