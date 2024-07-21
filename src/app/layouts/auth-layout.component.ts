import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  template: `
    <div class="relative min-h-screen flex">
      <div class="w-[60vw] bg-auth sm:block hidden"></div>
      <div
        class="relative sm:w-[40vw] w-full flex justify-center items-center bg-[#E5E5E5]"
      >
        <img
          class="absolute top-0 left-0 w-[15vw] rounded-br-2xl"
          src="logo.jpg"
          alt="Logo Netlife"
        />
        <div class="w-96 my-40">
          <ng-content></ng-content>
          @if (!cookies) {
          <div class="bg-gray-100">
            <div
              class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow"
            >
              <div
                class="container mx-auto px-4 py-1 flex justify-between items-center"
              >
                <p class="text-sm text-gray-700">
                  ©2024 Alumne LMS. Todos los derechos reservados. Consulta
                  nuestras
                  <a
                    class="text-[#FD6A00] underline-offset-2 underline"
                    href="#"
                    >Políticas de Privacidad</a
                  >
                  |
                  <a
                    class="text-[#FD6A00] underline-offset-2 underline"
                    href="#"
                    >Políticas de Cookies</a
                  >
                  |
                  <a
                    class="text-[#FD6A00] underline-offset-2 underline"
                    href="#"
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
        </div>
      </div>
    </div>
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
