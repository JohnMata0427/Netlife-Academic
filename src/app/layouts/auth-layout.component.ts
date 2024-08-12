import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@justinribeiro/lite-youtube';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="relative min-h-screen flex">
      <div
        class="w-3/5 bg-auth bg-cover bg-center bg-no-repeat sm:flex hidden sm:justify-center sm:items-center"
      >
        <div class="flex w-3/4">
          <lite-youtube class="rounded-xl" videoid="m9lp16bzjmU"></lite-youtube>
        </div>
      </div>
      <div
        class="relative sm:w-2/5 w-full flex justify-center items-center bg-[#E5E5E5] px-8"
      >
        <ng-content></ng-content>
      </div>
    </div>
    @if (!cookies) {
      <div class="fixed bottom-0 left-0 w-full bg-white">
        <div
          class="container mx-auto px-4 py-1 flex justify-between items-center"
        >
          <p class="sm:text-sm text-xs text-gray-700">
            ©2024 Alumne LMS. Todos los derechos reservados. Consulta nuestras
            <a class="text-primary underline-offset-2 underline" href="#"
              >Políticas de Privacidad</a
            >
            |
            <a class="text-primary underline-offset-2 underline" href="#"
              >Políticas de Cookies</a
            >
            |
            <a class="text-primary underline-offset-2 underline" href="#"
              >Términos de Uso</a
            >
          </p>
          <button
            (click)="cookies = true"
            class="px-4 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition duration-300 ease-in-out text-sm"
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
export class LayoutComponent {
  constructor() {}

  cookies = false;

  // background-image: url('https://i.gifer.com/88kQ.gif');
  // background-image: url('https://i.makeagif.com/media/10-10-2023/g2MQLz.gif');
}
