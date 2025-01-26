import { Component } from '@angular/core';
import { UserLayout } from '@/layouts/user-layout.component';

@Component({
  imports: [UserLayout],
  template: ` <app-user-layout>
    <section class="flex h-screen flex-col items-center justify-center">
      <h1 class="text-primary text-4xl font-bold">404</h1>
      <h2 class="text-primary text-2xl font-bold">Página no encontrada</h2>
      <p class="mt-4 text-center">
        Lo sentimos, la página que buscas no existe. Por favor, verifica la URL
        e intenta de nuevo.
      </p>
      <img class="mask mt-4" src="/stop.webp" alt="Imagen de error 404" />
      <div class="h-1 w-1/2 bg-black"></div>
    </section>
  </app-user-layout>`,
})
export class NotFoundPage {}
