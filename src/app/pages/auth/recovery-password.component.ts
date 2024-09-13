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
        class="absolute left-0 top-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      @if (showModal) {
        <div class="relative z-50 flex w-96 animate-zoom-in items-center">
          <div
            class="relative flex flex-col rounded-lg bg-black p-4 opacity-90 shadow-lg outline-none focus:outline-none"
          >
            <h3
              class="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-center text-xl font-bold text-transparent"
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
              <app-custom-button
                (click)="showModal = false"
                moreStyles="w-full"
                color="gray"
                text="Cerrar"
                [loading]="loading"
              />
              <app-custom-button
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
          <h1 class="mb-4 text-center text-3xl font-bold">
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
            <p class="px-4 text-xs text-tertiary">
              Correo electrónico no válido
            </p>
          } @else if (errorMessage) {
            <p class="px-4 text-xs text-tertiary">
              {{ errorMessage }}
            </p>
          }

          <app-custom-button
            (click)="onSubmit()"
            moreStyles="w-full justify-center"
            text="Enviar código de verificación"
            [loading]="loading"
          />

          <span class="text-center text-xs"
            >¿No tienes cuenta?
            <a
              class="font-medium text-primary hover:underline"
              href="/auth/register"
              >Regístrate aquí</a
            ></span
          >
          <span class="text-center text-xs"
            >¿Tienes cuenta?
            <a
              class="font-medium text-primary hover:underline"
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
        localStorage.setItem('email', this.email.value!);
      },
      error: ({ error }) => {
        this.errorMessage = error.message
        this.loading = false
      },
    });
  }
}
