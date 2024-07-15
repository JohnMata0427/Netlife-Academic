import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../../layouts/auth-layout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule],
  template: `
    <app-layout>
      @if (codeSent) {
      <div class="bg-black py-4 px-10 rounded-lg flex flex-col items-center">
        <h1
          class="text-xl text-transparent bg-clip-text font-bold text-center bg-gradient-to-r from-[#FEE500] to-[#FD6A00]"
        >
          Revisa tu correo electrónico
        </h1>
        <p class="text-white text-sm text-center my-7">
          Te enviamos un correo electrónico a
          <strong>{{ email.value }}</strong> con un código de confirmación para
          que puedas restablecer tu contraseña.
        </p>
        <span class="text-white text-[12px]"
          >¿No has recibido el código de confirmación?</span
        >
        <div class="flex gap-4 mt-6">
          <button
            (click)="codeSent = false"
            class="w-32 bg-[#6C6565] py-2 rounded-lg text-sm hover:bg-[#4D4D4D] transition-all"
          >
            Cerrar
          </button>
          <button
            (click)="onSubmit()"
            class="w-32 bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-2 rounded-lg text-sm hover:bg-white transition-all"
          >
            Reenviar
          </button>
        </div>
      </div>
      } @else {
      <div class="flex flex-col gap-3">
        <h1 class="text-3xl font-bold text-center mb-12">
          Recuperar Contraseña
        </h1>
        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            [formControl]="email"
            id="email"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        @if (errorMessage) {
        <p class="text-red-500 text-xs px-4">{{ errorMessage }}</p>
        } @else if (email.value != '' && email.invalid) {
        <p class="text-red-500 text-xs px-4">Correo electrónico no válido</p>
        }

        <button
          (click)="onSubmit()"
          class="bg-black text-white py-2 rounded-lg text-sm hover:bg-black/90 transition-all"
        >
          @if (!loading) { Enviar código de verificación } @else {
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
          }
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
      </div>
      }
    </app-layout>
  `,
})
export class RecoveryPasswordComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
  codeSent = true;
  loading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.loading = true;
    if (this.email.invalid) {
      this.errorMessage = 'Correo electrónico no válido';
      this.loading = false;
    } else {
      this.authService.recoveryPassword(this.email.value).subscribe({
        next: () => {
          this.codeSent = true;
          this.loading = false;
          localStorage.setItem('email', this.email.value as string);
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      });
    }
  }
}
