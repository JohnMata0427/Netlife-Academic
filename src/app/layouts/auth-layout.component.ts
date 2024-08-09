import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@justinribeiro/lite-youtube';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="relative min-h-screen flex">
      <div class="w-[60vw] bg-auth sm:flex hidden sm:justify-center sm:items-center">
        <div class="flex w-3/4 h-auto">
          <lite-youtube class="rounded-xl" videoid="m9lp16bzjmU"></lite-youtube>
        </div>
      </div>
      <div
        class="relative sm:w-[40vw] w-full flex justify-center items-center bg-[#E5E5E5] px-8"
      >
        <img
          class="absolute top-0 left-0 w-[200px] rounded-br-2xl"
          src="logo.jpg"
          alt="Logo Netlife"
        />
        <div class="w-96 my-40">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
    @if (!cookies) {
    <div class="bg-gray-100">
      <div
        class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow"
      >
        <div
          class="container mx-auto px-4 py-1 flex justify-between items-center"
        >
          <p class="sm:text-sm text-xs text-gray-700">
            ©2024 Alumne LMS. Todos los derechos reservados. Consulta nuestras
            <a class="text-[#FD6A00] underline-offset-2 underline" href="#"
              >Políticas de Privacidad</a
            >
            |
            <a class="text-[#FD6A00] underline-offset-2 underline" href="#"
              >Políticas de Cookies</a
            >
            |
            <a class="text-[#FD6A00] underline-offset-2 underline" href="#"
              >Términos de Uso</a
            >
          </p>
          <button
            (click)="cookies = true"
            class="px-4 py-1 bg-[#FD6A00] text-white rounded hover:bg-[#FD6A00]/80 transition duration-300 ease-in-out text-sm"
          >
            Acepto
          </button>
        </div>
      </div>
    </div>
    }
  `,
  styles: `
    .bg-auth {
      background-image: url('https://img.freepik.com/vector-premium/comunicacion-senales-digitales-sobre-fondo-naranja-oscuro_49459-16.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `,
})
export class LayoutComponent {
  cookies = false;

  constructor() {}

  ngOnInit() {}
}
