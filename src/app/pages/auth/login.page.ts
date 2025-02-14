import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UserLayout } from '@/layouts/auth.layout';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [
    ReactiveFormsModule,
    UserLayout,
    CustomButtonComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  template: `
    <app-auth-layout>
      <form
        class="flex w-96 flex-col gap-3"
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
      >
        <img
          class="mx-auto w-3/4"
          ngSrc="NetlifeLogo.webp"
          width="979"
          height="255"
          alt="Logo de Netlife"
        />
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
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="email"
            name="email"
            type="email"
            placeholder="Correo Electrónico"
            formControlName="email"
            required
          />
        </div>

        @if (form.get('email')?.invalid && form.get('email')?.value) {
          <p class="text-tertiary text-xs">El correo electrónico es inválido</p>
        }

        <div class="relative">
          <!-- Password Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 10"
          >
            <path
              class="fill-black"
              d="M7.7 3.7H6.2V2c0-.5-.3-1-.7-1.4a2.3 2.3 0 0 0-3 0c-.5.4-.7.9-.7 1.4v1.7H.3a.3.3 0 0 0-.2 0A.2.2 0 0 0 0 4v6l.3.1h7.6a.2.2 0 0 0 .1-.3V4a.2.2 0 0 0 0-.2.3.3 0 0 0-.3 0Zm-2.4 0H2.7V2c0-.3.1-.6.4-.9.2-.2.6-.3.9-.3.3 0 .7.1 1 .3l.3.9v1.7Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="password"
            name="password"
            placeholder="Contraseña"
            formControlName="password"
            minlength="8"
            required
            [type]="isPasswordVisible ? 'text' : 'password'"
          />
          <!-- Eye Icon -->
          <svg
            class="absolute inset-y-0 right-3 my-auto size-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            (click)="isPasswordVisible = !isPasswordVisible"
          >
            @if (isPasswordVisible) {
              <path
                d="M12.8 13.5a.5.5 0 0 1-.3-.2L2.2 3a.5.5 0 0 1 .7-.7l10.3 10.4a.5.5 0 0 1-.4.8Zm-5.4-4L6 8.2a1.9 1.9 0 0 0 1.5 1.6v-.1ZM8 6.2l1.5 1.5h.1A1.9 1.9 0 0 0 8 6Z"
              />
              <path
                d="M14.6 8.3a1 1 0 0 0 0-1 10 10 0 0 0-3-3 7.4 7.4 0 0 0-4-1.2 6.6 6.6 0 0 0-2 .4.1.1 0 0 0 0 .2L6.8 5A.1.1 0 0 0 7 5a2.8 2.8 0 0 1 3.4 3.4.1.1 0 0 0 0 .1l2 2a.1.1 0 0 0 .2 0 11 11 0 0 0 2-2.3Zm-7 2.3A2.8 2.8 0 0 1 5 7.2.1.1 0 0 0 5 7L3 5a.1.1 0 0 0-.2 0c-.7.6-1.4 1.3-2 2.2a1 1 0 0 0 0 1 9.8 9.8 0 0 0 2.9 3 7 7 0 0 0 6.1.8.1.1 0 0 0 0-.1l-1.3-1.4a.1.1 0 0 0-.1 0h-.7Z"
              />
            } @else {
              <path d="M7.9 9.7a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7Z" />
              <path
                d="M14.7 7.3a10 10 0 0 0-2.9-3 7.4 7.4 0 0 0-4-1.2 7 7 0 0 0-3.6 1.1C3 4.9 2 6 1 7.3a1 1 0 0 0 0 1 9.8 9.8 0 0 0 2.9 3 7 7 0 0 0 4 1.2c1.3 0 2.7-.4 4-1.2a9.8 9.8 0 0 0 2.8-3 1 1 0 0 0 0-1ZM8 10.6A2.8 2.8 0 1 1 8 5a2.8 2.8 0 0 1 0 5.6Z"
              />
            }
          </svg>
        </div>

        @if (errorMessage) {
          <p class="text-tertiary text-center text-xs">{{ errorMessage }}</p>
        }

        <app-button-component
          text="Iniciar sesión"
          moreStyles="w-full justify-center"
          [loading]="loading"
        />

        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a
            class="text-primary font-medium hover:underline"
            routerLink="/auth/register"
            >Regístrate aquí
          </a>
        </span>

        <a
          class="text-primary text-center text-xs font-medium hover:underline"
          routerLink="/auth/recovery-password"
          >¿Olvidaste tu contraseña?
        </a>
      </form>
    </app-auth-layout>
  `,
})
export class LoginPage {
  public form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });
  public loading = false;
  public errorMessage = '';
  public isPasswordVisible = false;

  private route = inject(Router);
  private authService = inject(AuthService);

  public onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.authService
        .loginUser(this.form.value)
        .subscribe({
          next: () => this.route.navigate(['/home']),
          error: ({ error }) => (this.errorMessage = error.message),
        })
        .add(() => (this.loading = false));
    } else this.errorMessage = 'Por favor, complete correctamente los campos';
  }
}
