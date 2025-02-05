import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLayout } from '@/layouts/auth.layout';
import { AuthService } from '@/services/auth.service';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [
    UserLayout,
    ReactiveFormsModule,
    CustomButtonComponent,
    RouterLink,
    NgOptimizedImage,
  ],
  template: `
    <app-auth-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        ngSrc="/logo.webp"
        alt="Logo Netlife"
        width="512"
        height="111"
      />
      <div class="flex w-96 flex-col gap-y-3">
        @if (showModal) {
          <div
            class="flex flex-col rounded-lg bg-black p-4 z-10 opacity-90 gap-y-5"
          >
            <h3
              class="from-secondary to-primary bg-gradient-to-r bg-clip-text text-center text-xl font-bold text-transparent"
            >
              Revisa tu correo electrónico
            </h3>
            <p class="text-center text-sm font-light text-white">
              Te enviamos un correo electrónico a
              <strong class="font-bold">{{ email.value }}</strong>
              con un código de confirmación para que puedas restablecer tu
              contraseña.
            </p>
            <span class="text-center text-xs text-white"
              >¿No has recibido el código de confirmación?</span
            >
            <div class="flex justify-center gap-x-4">
              <app-button-component
                text="Cerrar"
                moreStyles="w-full"
                color="gray"
                [loading]="loading"
                (click)="showModal = false"
              />
              <app-button-component
                text="Reenviar"
                moreStyles="w-full"
                color="orange"
                [loading]="loading"
                (click)="onSubmit()"
              />
            </div>
          </div>
          <div
            class="fixed inset-0 bg-black opacity-25"
            (click)="showModal = false"
          ></div>
        } @else {
          <h1
            class="from-secondary via-primary to-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl"
          >
            Recuperar Contraseña
          </h1>
          <div class="relative">
            <!-- Email Icon -->
            <svg
              class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 9"
            >
              <path
                d="M10.6 0H.4L.1.1a.4.4 0 0 0-.1.3v8.2l.1.3.3.1h10.2l.3-.1a.4.4 0 0 0 .1-.3V.4l-.1-.3a.4.4 0 0 0-.3-.1ZM5.8 5.2a.4.4 0 0 1-.5 0l-3.9-3 .5-.7 3.6 2.9 3.6-3 .5.7-3.9 3.1Z"
              />
            </svg>
            <input
              class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm focus:outline-primary"
              id="email"
              name="email"
              type="email"
              placeholder="Correo Electrónico"
              [formControl]="email"
            />
          </div>

          @if (email.value && email.invalid) {
            <p class="text-tertiary px-4 text-xs">
              Correo electrónico no válido
            </p>
          } @else if (errorMessage) {
            <p class="text-tertiary px-4 text-xs">
              {{ errorMessage }}
            </p>
          }

          <app-button-component
            text="Enviar correo"
            moreStyles="w-full justify-center"
            [loading]="loading"
            (click)="onSubmit()"
          />

          <span class="text-center text-xs"
            >¿No tienes cuenta?
            <a
              class="text-primary font-medium hover:underline"
              routerLink="/auth/register"
              >Regístrate aquí</a
            ></span
          >
          <span class="text-center text-xs"
            >¿Tienes cuenta?
            <a
              class="text-primary font-medium hover:underline"
              routerLink="/auth/login"
              >Inicia sesión aquí</a
            ></span
          >
        }
      </div>
    </app-auth-layout>
  `,
})
export class RecoveryPasswordPage {
  public email = new FormControl('', [Validators.email, Validators.required]);
  public errorMessage = '';
  public showModal = false;
  public loading = false;

  private authService = inject(AuthService);

  public onSubmit() {
    if (this.email.valid) {
      this.loading = true;
      this.authService
        .recoveryPassword(this.email.value!)
        .subscribe({
          next: () => {
            this.showModal = true;
            localStorage.setItem('email', this.email.value!);
          },
          error: ({ error }) => (this.errorMessage = error.message),
        })
        .add(() => (this.loading = false));
    }
  }
}
