import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@justinribeiro/lite-youtube';

@Component({
  selector: 'app-auth-layout',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div
      class="relative flex min-h-screen bg-[url('/banner-authentication.webp')] bg-cover bg-left px-4 sm:px-0"
    >
      <div class="hidden w-3/5 sm:flex sm:items-center sm:justify-center">
        <lite-youtube
          class="w-3/4 rounded-xl"
          posterquality="maxresdefault"
          videoid="STRX58eJDag"
        />
      </div>
      <div
        class="bg-quinary relative my-auto flex w-full items-center justify-center rounded-lg px-8 py-32 sm:my-0 sm:w-2/5 sm:rounded-none sm:py-0"
      >
        <ng-content />
      </div>
    </div>
    @if (!cookies) {
      <div class="fixed bottom-0 left-0 w-full bg-white">
        <div
          class="container mx-auto flex items-center justify-between px-4 py-1"
        >
          <p class="text-xs text-gray-700 sm:text-sm">
            ©2025 Netlife Academic. Todos los derechos reservados. Consulta
            nuestras
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
            class="bg-primary hover:bg-primary/80 cursor-pointer rounded-lg px-4 py-1 text-sm text-white duration-300 ease-in-out"
          >
            Acepto
          </button>
        </div>
      </div>
    }
  `,
})
export class UserLayout {
  public cookies = false;
}
