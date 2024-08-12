import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '@layouts/auth-layout.component';
import { AuthService } from '@services/auth.service';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      @if (showModal) {
        <div class="z-50 items-center flex relative w-96">
          <div
            class="rounded-lg shadow-lg relative flex flex-col bg-black/95 outline-none focus:outline-none p-4"
          >
            <h3
              class="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
            >
              Revisa tu correo electrónico
            </h3>
            <p class="text-white font-light text-sm text-center my-7">
              Te enviamos un correo electrónico a
              <strong class="font-bold">{{ email.value }}</strong>
              con un código de confirmación para que puedas restablecer tu
              contraseña.
            </p>
            <span class="text-white text-center text-xs"
              >¿No has recibido el código de confirmación?</span
            >
            <div class="space-x-4 justify-center mt-6">
              <app-custom-button
                (click)="showModal = false"
                [moreStyles]="'w-full'"
                [color]="'gray'"
                [hoverColor]="'white'"
                [text]="'Cerrar'"
                [loading]="loading"
              />
              <app-custom-button
                (click)="onSubmit()"
                [moreStyles]="'w-full'"
                [color]="'orange'"
                [hoverColor]="'white'"
                [text]="'Reenviar'"
                [loading]="loading"
              />
            </div>
          </div>
        </div>
        <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      } @else {
        <div class="flex flex-col gap-3 w-96">
          <h1 class="text-3xl font-bold text-center mb-4">
            Recuperar Contraseña
          </h1>
          <div class="relative">
            <img
              class="size-3 absolute inset-y-0 my-auto left-3"
              src="/icons/forms/email.svg"
              alt="Email Icon"
            />
            <input
              [formControl]="email"
              id="email"
              name="email"
              class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
              type="email"
              placeholder="Correo Electrónico"
              required
            />
          </div>

          @if (errorMessage) {
            <p class="text-red-500 text-xs px-4">{{ errorMessage }}</p>
          } @else if (email.value && email.invalid) {
            <p class="text-red-500 text-xs px-4">
              Correo electrónico no válido
            </p>
          }

          <app-custom-button
            (click)="onSubmit()"
            [moreStyles]="'w-full justify-center'"
            [color]="'black'"
            [hoverColor]="'white'"
            [text]="'Enviar código de verificación'"
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
    </app-layout>
  `,
})
export class RecoveryPasswordComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage!: string;
  showModal = false;
  loading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email.invalid) {
      this.errorMessage = 'Correo electrónico no válido';
      return;
    }
    this.loading = true;
    this.authService.recoveryPassword(this.email.value!).subscribe({
      next: () => {
        this.showModal = true;
        this.loading = false;
        localStorage.setItem('email', this.email.value as string);
      },
      error: ({ error }) => (
        (this.errorMessage = error.message), (this.loading = false)
      ),
    });
  }
}
