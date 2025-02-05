import { TitleCasePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
          videoplay="Reproducir"
          videotitle="¡Somos el internet con mejor experiencia de usuario!"
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
      <div class="fixed bottom-0 w-full bg-white z-10">
        <div
          class="container mx-auto flex items-center justify-between px-4 py-1"
        >
          <span class="text-xs text-gray-700 sm:text-sm">
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
          </span>
          <button
            class="bg-primary hover:bg-primary/80 cursor-pointer rounded-lg px-4 py-1 text-sm text-white duration-300 ease-in-out"
            (click)="cookies = true"
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
  private title = inject(Title);

  public ngOnInit() {
    const { pathname } = window.location;

    this.title.setTitle(
      `${new TitleCasePipe().transform(
        pathname.split('/').pop()?.split('-').join(' '),
      )} • Netlife Academic`,
    );
  }
}
