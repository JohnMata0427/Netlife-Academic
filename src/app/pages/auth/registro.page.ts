import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@/services/auth.service';
import { Router } from '@angular/router';
import { UserLayout } from '@/layouts/auth.layout';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [ReactiveFormsModule, UserLayout, CustomButtonComponent],
  template: `
    <app-auth-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      <form
        class="my-36 flex w-96 flex-col gap-3"
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
      >
        <h1
          class="from-secondary via-primary to-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-3xl font-bold text-transparent"
        >
          Regístrate
        </h1>
        <div class="relative">
          <!-- User Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 10"
          >
            <path
              d="M4.5 5c.5 0 1-.1 1.4-.4A2.6 2.6 0 0 0 6.1.7 2.4 2.4 0 0 0 3.6.2c-.5.2-.9.5-1.1 1a2.6 2.6 0 0 0 .3 3c.4.6 1 .8 1.7.8Zm0 .7C3 5.7 0 6.7 0 8.6V10h9V8.6c0-2-3-2.9-4.5-2.9Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Nombres"
            formControlName="name"
          />
        </div>

        <div class="relative">
          <!-- User Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 10"
          >
            <path
              d="M4.5 5c.5 0 1-.1 1.4-.4A2.6 2.6 0 0 0 6.1.7 2.4 2.4 0 0 0 3.6.2c-.5.2-.9.5-1.1 1a2.6 2.6 0 0 0 .3 3c.4.6 1 .8 1.7.8Zm0 .7C3 5.7 0 6.7 0 8.6V10h9V8.6c0-2-3-2.9-4.5-2.9Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Apellidos"
            formControlName="lastname"
          />
        </div>

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
          />
        </div>

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
            id="confirmEmail"
            name="confirmEmail"
            type="email"
            placeholder="Confirmar Correo Electrónico"
            formControlName="confirmEmail"
          />
        </div>

        @if (form.get('email')?.value !== form.get('confirmEmail')?.value) {
          <p class="text-tertiary px-4 text-xs">Los correos no coinciden</p>
        }

        <div class="relative">
          <!-- Identification Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 13"
          >
            <path
              d="M10.3 0H.7L.3.2a.6.6 0 0 0-.2.5v11.6c0 .2 0 .4.2.5l.6.2h9.4c.3 0 .4 0 .6-.2a.6.6 0 0 0 .2-.5V.7a.6.6 0 0 0-.2-.4.8.8 0 0 0-.6-.2Zm-2 8c0 .3 0 .5-.2.7l-.5.5h-.8A1.4 1.4 0 0 1 6 9a1 1 0 0 1-.4-.6v-.7l.6-.5a1.5 1.5 0 0 1 1.7.2l.4.7ZM3.5 1.3h4v.9h-4v-.9Zm6 10.4h-5V11c0-.9 1.7-1.3 2.5-1.3s2.5.5 2.5 1.3v.7Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="identification"
            name="identification"
            type="text"
            placeholder="Cédula o Pasaporte"
            formControlName="identification"
            [maxlength]="10"
          />
        </div>

        <span class="text-xs font-semibold text-gray-500"
          >Debe tener minimo 8 caracteres, letra en mayuscula y numero.</span
        >

        <div class="relative">
          <!-- Password Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 10"
          >
            <path
              d="M7.7 3.7H6.2V2c0-.5-.3-1-.7-1.4a2.3 2.3 0 0 0-3 0c-.5.4-.7.9-.7 1.4v1.7H.3a.3.3 0 0 0-.2 0A.2.2 0 0 0 0 4v6l.3.1h7.6a.2.2 0 0 0 .1-.3V4a.2.2 0 0 0 0-.2.3.3 0 0 0-.3 0Zm-2.4 0H2.7V2c0-.3.1-.6.4-.9.2-.2.6-.3.9-.3.3 0 .7.1 1 .3l.3.9v1.7Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="password"
            name="password"
            placeholder="Contraseña"
            formControlName="password"
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

        <div class="relative">
          <!-- Password Icon -->
          <svg
            class="absolute inset-y-0 left-3 my-auto size-3 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 10"
          >
            <path
              d="M7.7 3.7H6.2V2c0-.5-.3-1-.7-1.4a2.3 2.3 0 0 0-3 0c-.5.4-.7.9-.7 1.4v1.7H.3a.3.3 0 0 0-.2 0A.2.2 0 0 0 0 4v6l.3.1h7.6a.2.2 0 0 0 .1-.3V4a.2.2 0 0 0 0-.2.3.3 0 0 0-.3 0Zm-2.4 0H2.7V2c0-.3.1-.6.4-.9.2-.2.6-.3.9-.3.3 0 .7.1 1 .3l.3.9v1.7Z"
            />
          </svg>
          <input
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            formControlName="confirmPassword"
            [type]="isConfirmPasswordVisible ? 'text' : 'password'"
          />
          <!-- Eye Icon -->
          <svg
            class="absolute inset-y-0 right-3 my-auto size-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            (click)="isConfirmPasswordVisible = !isConfirmPasswordVisible"
          >
            @if (isConfirmPasswordVisible) {
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

        @if (
          form.get('password')?.value !== form.get('confirmPassword')?.value
        ) {
          <p class="text-tertiary px-4 text-xs">Las contraseñas no coinciden</p>
        }

        <span class="text-xs font-semibold text-gray-500"
          >El código es proporcionado por un administrador del sitio.</span
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
            class="focus:outline-primary w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            id="verificationCode"
            name="verificationCode"
            type="text"
            placeholder="Código de Verificación"
            formControlName="verificationCode"
            [maxlength]="6"
          />
        </div>

        <div class="my-2 flex gap-2">
          <input
            class="accent-primary"
            id="terms"
            name="terms"
            type="checkbox"
            formControlName="terms"
          />
          <label class="cursor-default text-xs" for="terms"
            >Aceptas los
            <a
              class="text-primary font-medium hover:underline"
              href="/terms-and-conditions"
              >términos y condiciones</a
            ></label
          >
        </div>

        @if (errorMessage) {
          <p class="text-tertiary px-4 text-center text-xs">
            {{ errorMessage }}
          </p>
        }

        <app-button-component
          text="Registrate"
          moreStyles="w-full justify-center"
          [loading]="loading"
        />

        <span class="text-center text-xs"
          >¿Ya tienes cuenta?
          <a class="text-primary font-medium hover:underline" href="/auth/login"
            >Inicia sesión aquí</a
          ></span
        >
        <a
          class="text-primary text-center text-xs font-medium hover:underline"
          href="/auth/recovery-password"
          >¿Olvidaste tu contraseña?</a
        >
      </form>
    </app-auth-layout>
  `,
})
export class RegistroPage {
  public form = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    lastname: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    confirmEmail: new FormControl('', [Validators.email, Validators.required]),
    identification: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    verificationCode: new FormControl('', Validators.required),
    terms: new FormControl(false, [
      Validators.requiredTrue,
      Validators.required,
    ]),
  });
  public loading = false;
  public errorMessage = '';
  public isPasswordVisible = false;
  public isConfirmPasswordVisible = false;

  private route = inject(Router);
  private authService = inject(AuthService);

  public onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.authService
        .registerUser(this.form.value)
        .subscribe({
          next: () => this.route.navigate(['/home']),
          error: ({ error }) => (this.errorMessage = error.message),
        })
        .add(() => (this.loading = false));
    } else if (!this.form.value.terms)
      this.errorMessage = 'Debe aceptar los términos y condiciones de uso';
    else
      this.errorMessage = 'Por favor, complete correctamente todos los campos';
  }
}
