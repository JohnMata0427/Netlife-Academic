import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { UserLayout } from '@/layouts/auth.layout';
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
      @if (errorMessage !== 'Código de verificación incorrecto') {
        <div class="flex w-96 flex-col gap-3">
          <h1
            class="from-secondary via-primary to-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-3xl font-bold text-transparent"
          >
            Código de verificación
          </h1>

          <span class="text-center text-xs font-semibold text-gray-500"
            >Revise su correo electrónico y coloca el código de
            verificación.</span
          >

          <div class="relative">
            <!-- Verification Code Icon -->
            <svg
              class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31 31"
            >
              <path
                d="M30.7 12a15.2 15.2 0 0 0-5.4-8.6 15.7 15.7 0 0 0-21 1.2 15 15 0 0 0-1.8 18.8l.3.4L1 31l8-2 .2.1a18.2 18.2 0 0 0 6.4 1.4 15.3 15.3 0 0 0 15-18.4ZM8.9 17.8a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm6.6 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm6.6 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z"
              />
            </svg>
            <input
              class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
              id="verificationCode"
              name="verificationCode"
              type="text"
              placeholder="Código de Verificación"
              [formControl]="verificationCode"
              [maxlength]="6"
            />
          </div>

          @if (errorMessage) {
            <p class="text-tertiary px-4 text-xs">{{ errorMessage }}</p>
          } @else if (verificationCode.value && verificationCode.invalid) {
            <p class="text-tertiary px-4 text-xs">
              El código debe tener 6 números
            </p>
          }

          <app-button-component
            text="Verificar código"
            moreStyles="w-full justify-center"
            [loading]="loading"
            (click)="onSubmit()"
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
              class="w-32 rounded-lg py-2 text-sm"
              (click)="errorMessage = ''"
            >
              Cerrar
            </button>
            <button
              class="from-secondary to-primary w-32 rounded-lg bg-gradient-to-r py-2 text-sm"
              (click)="resendVerifyCode()"
            >
              Reenviar
            </button>
          </div>
        </div>
      }
    </app-auth-layout>
  `,
})
export class VerifyCodePage {
  public verificationCode = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);
  public errorMessage = '';
  public loading = false;

  private token = '';
  private router = inject(Router);
  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);

  public ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams['t'];
  }

  public onSubmit() {
    if (this.verificationCode.valid) {
      this.loading = true;
      this.authService
        .verifyCode(this.verificationCode.value!, this.token)
        .subscribe({
          next: () =>
            this.router.navigate(['/auth/new-password'], {
              queryParams: { token: this.token },
            }),
          error: ({ error }) => (this.errorMessage = error.message),
        })
        .add(() => (this.loading = false));
    } else this.errorMessage = 'Por favor, introduzca un código válido';
  }

  public resendVerifyCode() {
    this.authService
      .recoveryPassword(localStorage.getItem('email')!)
      .subscribe({
        next: ({ token }) =>
          this.router.navigate([], {
            queryParams: { t: token },
          }),
        error: ({ error }) => (this.errorMessage = error.message),
      });
  }
}
