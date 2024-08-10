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
      @if (errorMessage !== 'Código de verificación incorrecto') {
      <form class="flex flex-col gap-3" (submit)="onSubmit($event)">
        <h1 class="text-3xl font-bold text-center mb-12">
          Código de verificación
        </h1>

        <span class="text-sm text-center mb-2"
          >Introduce el código de verificación enviado a tu correo
          electrónico</span
        >

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/verify.svg"
            alt="Lock Icon"
          />
          <input
            [formControl]="verificationCode"
            id="verificationCode"
            name="verificationCode"
            class="p-1.5 pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="text"
            placeholder="Código de Verificación"
            required
          />
        </div>

        @if (errorMessage) {
        <p class="text-red-500 text-xs px-4">{{ errorMessage }}</p>
        } @else if (verificationCode.value != '' && verificationCode.invalid) {
        <p class="text-red-500 text-xs px-4">El código debe tener 6 números</p>
        }

        <app-custom-button
          [moreStyles]="'w-full justify-center'"
          [color]="'black'"
          [hoverColor]="'white'"
          [text]="'Verificar código'"
          [loading]="loading"
        />
        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a
            class="text-[#FD6A00] font-medium hover:underline"
            href="/auth/register"
            >Regístrate aquí</a
          ></span
        >
        <span class="text-center text-xs"
          >¿Tienes cuenta?
          <a
            class="text-[#FD6A00] font-medium hover:underline"
            href="/auth/login"
            >Inicia sesión aquí</a
          ></span
        >
      </form>
      } @else {
      <div class="bg-black py-5 px-10 rounded-lg flex flex-col items-center">
        <p class="text-white text-sm text-center font-extralight">
          El código de confirmación que ingresaste es incorrecto.
        </p>
        <span class="text-white text-[12px] my-4"
          >¿Deseas que se te reenvíe el código?</span
        >
        <div class="flex gap-4">
          <button
            (click)="errorMessage = ''"
            class="w-32 bg-[#6C6565] py-2 rounded-lg text-sm"
          >
            Cerrar
          </button>
          <button
            (click)="resendVerifyCode()"
            class="w-32 bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-2 rounded-lg text-sm"
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
  errorMessage = '';
  token = '';
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params['token'];
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
      .verifyCode(this.verificationCode.value, this.token)
      .subscribe({
        next: () =>
          this.router.navigate(['/auth/new-password'], {
            queryParams: { token: this.token },
          }),
        error: ({ error }) => (this.errorMessage = error.message),
        complete: () => (this.loading = false),
      });
  }

  resendVerifyCode() {
    this.authService.recoveryPassword(localStorage.getItem('email')).subscribe({
      next: (result) =>
        this.router.navigate([], {
          queryParams: { token: result.token },
        }),
      error: ({ error }) => (this.errorMessage = error.message),
      complete: () => (this.loading = false),
    });
  }
}
