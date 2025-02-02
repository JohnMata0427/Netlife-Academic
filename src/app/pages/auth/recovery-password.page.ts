import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLayout } from '@/layouts/auth.layout';
import { AuthService } from '@/services/auth.service';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [UserLayout, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-auth-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      @if (showModal) {
        <div class="animate-zoom-in relative z-50 flex w-96 items-center">
          <div
            class="relative flex flex-col rounded-lg bg-black p-4 opacity-90 shadow-lg outline-none focus:outline-none"
          >
            <h3
              class="from-secondary to-primary bg-gradient-to-r bg-clip-text text-center text-xl font-bold text-transparent"
            >
              Revisa tu correo electrónico
            </h3>
            <p class="my-7 text-center text-sm font-light text-white">
              Te enviamos un correo electrónico a
              <strong class="font-bold">{{ email.value }}</strong>
              con un código de confirmación para que puedas restablecer tu
              contraseña.
            </p>
            <span class="text-center text-xs text-white"
              >¿No has recibido el código de confirmación?</span
            >
            <div class="mt-6 flex justify-center gap-4">
              <app-button-component
                (click)="showModal = false"
                moreStyles="w-full"
                color="gray"
                text="Cerrar"
                [loading]="loading"
              />
              <app-button-component
                (click)="onSubmit()"
                moreStyles="w-full"
                color="orange"
                text="Reenviar"
                [loading]="loading"
              />
            </div>
          </div>
        </div>
        <div
          (click)="showModal = false"
          class="fixed inset-0 bg-black opacity-25"
        ></div>
      } @else {
        <div class="flex w-96 flex-col gap-3">
          <h1
            class="from-secondary via-primary to-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl"
          >
            Recuperar Contraseña
          </h1>
          <div class="relative">
            <img
              class="absolute inset-y-0 left-3 my-auto size-3"
              src="/icons/forms/email.svg"
              alt="Email Icon"
            />
            <input
              [formControl]="email"
              id="email"
              name="email"
              class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
              type="email"
              placeholder="Correo Electrónico"
              required
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
            (click)="onSubmit()"
            moreStyles="w-full justify-center"
            text="Enviar código de verificación"
            [loading]="loading"
          />

          <span class="text-center text-xs"
            >¿No tienes cuenta?
            <a
              class="text-primary font-medium hover:underline"
              href="/auth/register"
              >Regístrate aquí</a
            ></span
          >
          <span class="text-center text-xs"
            >¿Tienes cuenta?
            <a
              class="text-primary font-medium hover:underline"
              href="/auth/login"
              >Inicia sesión aquí</a
            ></span
          >
        </div>
      }
    </app-auth-layout>
  `,
})
export class RecoveryPasswordPage {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public errorMessage!: string;
  public showModal = false;
  public loading = false;

  private authService = inject(AuthService);

  public onSubmit() {
    if (this.email.invalid) {
      this.errorMessage = 'Correo electrónico no válido';
      return;
    }
    this.loading = true;
    this.authService.recoveryPassword(this.email.value!).subscribe({
      next: () => {
        this.showModal = true;
        this.loading = false;
        localStorage.setItem('email', this.email.value!);
      },
      error: ({ error }) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    });
  }
}
