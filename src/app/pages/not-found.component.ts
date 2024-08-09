import { Component } from '@angular/core';
import { UserLayout } from '@layouts/user-layout.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [UserLayout],
  template: ` <app-user-layout>
    <section class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold text-[#F86A00]">404</h1>
      <h2 class="text-2xl font-bold text-[#F86A00]">Página no encontrada</h2>
      <p class="text-center mt-4">
        Lo sentimos, la página que buscas no existe. Por favor, verifica la URL
        e intenta de nuevo.
      </p>
      <img class="mask mt-4" src="no-certificates.png" alt="Imagen de error 404" />
      <div class="bg-black h-1 w-1/2"></div>
    </section>
  </app-user-layout>`,
  styles: `
  `,
})
export class NotFoundComponent {}
