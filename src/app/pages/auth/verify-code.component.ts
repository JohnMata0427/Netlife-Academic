import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LayoutComponent } from '@layouts/auth-layout.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-layout>
      <img
        class="absolute left-0 top-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      @if (errorMessage !== 'Código de verificación incorrecto') {
        <form class="flex w-96 flex-col gap-3" (submit)="onSubmit($event)">
          <h1 class="mb-4 text-center text-3xl font-bold">
            Código de verificación
          </h1>

          <span class="mb-2 text-center text-sm"
            >Introduce el código de verificación enviado a tu correo
            electrónico</span
          >

          <div class="relative">
            <img
              class="absolute inset-y-0 left-3 my-auto size-3"
              src="/icons/forms/verify.svg"
              alt="Lock Icon"
            />
            <input
              [formControl]="verificationCode"
              id="verificationCode"
              name="verificationCode"
              class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
              type="text"
              placeholder="Código de Verificación"
              required
            />
          </div>

          @if (errorMessage) {
            <p class="px-4 text-xs text-tertiary">{{ errorMessage }}</p>
          } @else if (verificationCode.value && verificationCode.invalid) {
            <p class="px-4 text-xs text-tertiary">
              El código debe tener 6 números
            </p>
          }

          <app-custom-button
            moreStyles="w-full justify-center"
            text="Verificar código"
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
        </form>
      } @else {
        <div class="flex flex-col items-center rounded-lg bg-black px-10 py-5">
          <p class="text-center text-sm font-extralight text-white">
            El código de confirmación que ingresaste es incorrecto.
          </p>
          <span class="my-4 text-xs text-white"
            >¿Deseas que se te reenvíe el código?</span
          >
          <div class="flex gap-4">
            <button
              (click)="errorMessage = ''"
              class="w-32 rounded-lg py-2 text-sm"
            >
              Cerrar
            </button>
            <button
              (click)="resendVerifyCode()"
              class="w-32 rounded-lg bg-gradient-to-r from-secondary to-primary py-2 text-sm"
            >
              Reenviar
            </button>
          </div>
        </div>
      }
    </app-layout>
  `,
})
export class VerifyCodeComponent {
  verificationCode = new FormControl('', [
    Validators.required,
    Validators.maxLength(6),
  ]);
  errorMessage!: string;
  token!: string;
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe(({ t }) => {
      this.token = t;
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.verificationCode.invalid) {
      this.errorMessage = 'Por favor, introduzca un código válido';
      return;
    }

    this.loading = true;
    this.authService
      .verifyCode(this.verificationCode.value!, this.token)
      .subscribe({
        next: () =>
          this.router.navigate(['/auth/new-password'], {
            queryParams: { token: this.token },
          }),
        error: ({ error }) => (
          (this.errorMessage = error.message), (this.loading = false)
        ),
      });
  }

  resendVerifyCode() {
    this.authService
      .recoveryPassword(localStorage.getItem('email')!)
      .subscribe({
        next: ({ token }) =>
          this.router.navigate([], {
            queryParams: { token },
          }),
        error: ({ error }) => (
          (this.errorMessage = error.message), (this.loading = false)
        ),
      });
  }
}
