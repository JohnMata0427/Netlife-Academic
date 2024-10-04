import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [CustomButtonComponent],
  template: `
    <article
      class="w-64 rounded-lg shadow-md shadow-black/50 first:rounded-t-lg last:rounded-b-lg"
    >
      <a href="/mis-cursos/{{ id }}">
        <img class="h-32 w-full" src="{{ src }}" alt="{{ title }}" />
      </a>

      <div class="flex flex-col gap-2 bg-black px-4 py-3">
        <h3 class="text-center text-sm text-white">
          Certificado de {{ title }}
        </h3>
        <div class="relative flex justify-center gap-4">
          <app-custom-button
            (click)="showCertificate = true"
            color="orange"
            text="Descargar"
          />
          <app-custom-button
            (click)="showShare = !showShare"
            color="orange"
            text="Compartir"
          />
          @if (showShare) {
            <div
              class="absolute -right-24 z-20 flex w-52 flex-col gap-2 rounded-lg bg-white px-7 py-2.5"
              (click)="showShare = false"
            >
              <h1 class="text-center text-lg font-bold">Compartir</h1>
              <div class="flex gap-5">
                <button class="group size-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                      d="M25 13c0-7-6-13-12-13C6 0 0 6 0 13c0 6 5 11 11 12v-9H7v-3h4v-3c0-3 1-5 4-5h3v3h-2l-2 2v3h4l-1 3h-3v9c6-1 11-6 11-12Z"
                      class="fill-black group-hover:fill-primary"
                    />
                  </svg>
                </button>
                <button class="group size-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 463">
                    <path
                      d="M403 0h79L310 196l202 267H354L230 301 89 463H10l184-210L0 0h162l112 148L403 0zm-27 416h43L138 45H92l284 371z"
                      class="fill-black group-hover:fill-primary"
                    />
                  </svg>
                </button>
                <button class="group size-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="*:fill-black"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M18 2a5 5 0 0 1 5 5v11a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h11Zm0-2H7C3 0 0 3 0 7v11c0 4 3 7 7 7h11c4 0 7-3 7-7V7c0-4-3-7-7-7Z"
                      class="group-hover:fill-primary"
                    />
                    <path
                      d="M19 7a2 2 0 1 1 0-3 2 2 0 0 1 0 3Zm-7 1a4 4 0 1 1 0 9 4 4 0 0 1 0-9Zm0-2a6 6 0 1 0 0 13 6 6 0 0 0 0-13Z"
                      class="group-hover:fill-primary"
                    />
                  </svg>
                </button>

                <button class="group size-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                      d="M21.4 3.6A12.4 12.4 0 0 0 12.6 0 12.4 12.4 0 0 0 1.8 18.6L0 25l6.6-1.7A12.4 12.4 0 0 0 21.4 3.7Zm-8.8 19c-1.9 0-3.7-.4-5.3-1.3l-.4-.3-4 1L4 18.4l-.2-.4a11 11 0 0 1-1.6-5.5 10.3 10.3 0 0 1 20.7 0c0 5.7-4.6 10.3-10.3 10.3Zm5.6-7.6a10 10 0 0 0-2.1-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.3-.3.3-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.4.1-.6l.5-.5.3-.6v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4c-.3.3-1 1-1 2.5 0 1.6 1 3 1.2 3.2.2.2 2.2 3.4 5.3 4.7l1.8.7c.7.2 1.4.2 2 0 .5 0 1.8-.7 2-1.4.3-.7.3-1.3.2-1.5l-.6-.3Z"
                      class="fill-black group-hover:fill-primary"
                    />
                  </svg>
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </article>
    @if (showCertificate) {
      <div
        class="absolute inset-0 z-50 flex size-full flex-col items-center justify-center"
      >
        <div class="relative flex size-3/4 flex-col items-center justify-start">
          <svg
            (click)="showCertificate = false"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -top-8 right-32 z-50 size-4 cursor-pointer"
            viewBox="0 0 273 273"
          >
            <path
              d="m171 137 95-95a24 24 0 1 0-34-34l-95 95L42 8A24 24 0 0 0 8 42l95 95-95 95a24 24 0 0 0 34 34l95-95 95 95a24 24 0 1 0 34-34l-95-95Z"
              class="fill-red-600"
            />
          </svg>
          <div class="relative flex size-full justify-center">
            <h2
              class="absolute inset-y-72 text-center text-2xl font-bold uppercase text-white"
            >
              John Jairo Mata Manosalvas
            </h2>
            <span class="absolute inset-y-96 text-white">13/08/2024</span>
            <img
              class="size-full object-contain"
              src="/certificate.png"
              alt="Certificado de {{ title }}"
            />
          </div>
        </div>
      </div>
      <div
        class="fixed inset-0 z-40 bg-white opacity-75"
        (click)="showCertificate = false"
      ></div>
    }
  `,
})
export class CertificadoComponent {
  @Input() title!: string;
  @Input() src!: string;
  @Input() id!: string;
  showCertificate = false;
  showShare = false;
}
