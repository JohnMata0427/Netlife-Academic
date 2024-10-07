import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@justinribeiro/lite-youtube';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="relative flex min-h-screen">
      <div
        class="bg-auth hidden w-3/5 bg-cover bg-center bg-no-repeat sm:flex sm:items-center sm:justify-center"
      >
        <div class="flex w-3/4">
          <lite-youtube class="rounded-xl" videoid="m9lp16bzjmU"></lite-youtube>
        </div>
      </div>
      <div
        class="relative flex w-full items-center justify-center bg-quinary px-8 sm:w-2/5"
      >
        <ng-content></ng-content>
      </div>
    </div>
    @if (!cookies) {
      <div class="fixed bottom-0 left-0 w-full bg-white">
        <div
          class="container mx-auto flex items-center justify-between px-4 py-1"
        >
          <p class="text-xs text-gray-700 sm:text-sm">
            ©2024 Alumne LMS. Todos los derechos reservados. Consulta nuestras
            <a class="text-primary underline underline-offset-2" href="#"
              >Políticas de Privacidad</a
            >
            |
            <a class="text-primary underline underline-offset-2" href="#"
              >Políticas de Cookies</a
            >
            |
            <a class="text-primary underline underline-offset-2" href="#"
              >Términos de Uso</a
            >
          </p>
          <button
            (click)="cookies = true"
            class="rounded-lg bg-primary px-4 py-1 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Acepto
          </button>
        </div>
      </div>
    }
  `,
  styles: `
    .bg-auth {
      background-image: url('/banner-authentication.webp');
    }
  `,
})
export class UserLayout {
  cookies = false;
}
