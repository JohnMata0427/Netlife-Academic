import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { LayoutComponent } from '../../layouts/auth-layout.component';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule],
  template: `
    <app-layout>
      @if (errorMessage !== 'Código de verificación incorrecto') {
      <form class="flex flex-col gap-3" (submit)="onSubmit($event)">
        <h1 class="text-3xl font-bold text-center mb-10">
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
            id="code"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
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

        <button
          class="bg-black text-white py-2 rounded-lg text-sm flex justify-center hover:bg-black/90 transition-all"
        >
          @if (loading) {
          <svg
            aria-hidden="true"
            role="status"
            class="inline w-4 h-4 me-3 text-[#FD6A00] animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          } @else { Verificar Código }
        </button>
        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a class="text-[#FD6A00] hover:underline" href="/auth/register"
            >Regístrate aquí</a
          ></span
        >
        <span class="text-center text-xs"
          >¿Tienes cuenta?
          <a class="text-[#FD6A00] hover:underline" href="/auth/login"
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
  errorMessage: string = '';
  token: string = '';
  loading: boolean = false;

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
    this.loading = true;
    if (this.verificationCode.invalid) {
      this.errorMessage = 'Por favor, introduzca un código válido';
    } else {
      this.authService
        .verifyCode(this.verificationCode.value, this.token)
        .subscribe({
          next: (result) => {
            this.router.navigate(['/auth/new-password'], {
              queryParams: { token: this.token },
            });
          },
          error: (error) => {
            console.error(error);
            this.errorMessage = error.error.message;
          },
          complete() {
            console.log('Code verified');
          },
        });
    }
    this.loading = false;
  }

  resendVerifyCode() {
    this.authService.recoveryPassword(localStorage.getItem('email')).subscribe({
      next: (result) => {
        this.router.navigate([], {
          queryParams: { token: result.token },
        });
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete() {
        console.log('Email sent');
      },
    });
  }
}
