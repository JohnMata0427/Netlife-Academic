import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../../layouts/auth-layout.component';
import { AuthService } from '../../services/auth.service';
import { CustomButtonComponent } from "../../components/custom-button.component";

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-layout>
      @if (showModal) {
      <div class="z-50 items-center flex relative">
        <!--content-->
        <div
          class="rounded-lg shadow-lg relative flex flex-col bg-black outline-none focus:outline-none p-4"
        >
          <h3
            class="text-xl text-transparent bg-clip-text font-bold text-center bg-gradient-to-r from-[#FEE500] to-[#FD6A00]"
          >
            Revisa tu correo electrónico
          </h3>
          <!--body-->
          <p
            class="text-white font-light text-sm text-center my-7"
          >
            Te enviamos un correo electrónico a
            <strong class="font-bold">{{
              email.value || 'jhonmata0427@gmail.com'
            }}</strong>
            con un código de confirmación para que puedas restablecer tu
            contraseña.
          </p>
          <!--footer-->
          <span class="text-white text-center text-[12px]"
            >¿No has recibido el código de confirmación?</span
          >
          <div class="flex gap-x-4 justify-center mt-6">
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
          <a class="text-[#FD6A00] font-medium hover:underline" href="/auth/register"
            >Regístrate aquí</a
          ></span
        >
        <span class="text-center text-xs"
          >¿Tienes cuenta?
          <a class="text-[#FD6A00] font-medium hover:underline" href="/auth/login"
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
  showModal = false;
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
          this.showModal = true;
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
