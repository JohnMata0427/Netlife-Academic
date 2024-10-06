import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { LayoutComponent } from '@layouts/auth-layout.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent, CustomButtonComponent],
  template: `
    <app-layout>
      <img
        class="absolute left-0 top-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      <form
        [formGroup]="form"
        class="my-36 flex w-96 flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="mb-4 text-center text-3xl font-bold">Regístrate</h1>
        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            id="name"
            name="name"
            formControlName="name"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            id="lastname"
            name="lastname"
            formControlName="lastname"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="text"
            placeholder="Apellidos"
            required
          />
        </div>

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="email"
            name="email"
            formControlName="email"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="confirmEmail"
            name="confirmEmail"
            formControlName="confirmEmail"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="email"
            placeholder="Confirmar Correo Electrónico"
            required
          />
        </div>

        @if (form.get('email')?.value !== form.get('confirmEmail')?.value) {
          <p class="px-4 text-xs text-tertiary">Los correos no coinciden</p>
        }

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/identification.svg"
            alt="Identification Icon"
          />
          <input
            id="identification"
            name="identification"
            formControlName="identification"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="text"
            placeholder="Cédula o Pasaporte"
            required
            maxlength="10"
          />
        </div>

        <span class="text-xs font-semibold text-gray-500"
          >Debe tener minimo 8 caracteres, letra en mayuscula y numero.</span
        >

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            id="password"
            name="password"
            formControlName="password"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            [type]="isPasswordVisible ? 'text' : 'password'"
            placeholder="Contraseña"
            required
          />
          <img
            (click)="isPasswordVisible = !isPasswordVisible"
            class="absolute inset-y-0 right-3 my-auto size-4 cursor-pointer"
            src="/icons/forms/{{ isPasswordVisible ? 'eye-off' : 'eye' }}.svg"
            alt="Eye Icon"
          />
        </div>

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            id="confirmPassword"
            name="confirmPassword"
            formControlName="confirmPassword"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            [type]="isConfirmPasswordVisible ? 'text' : 'password'"
            placeholder="Confirmar Contraseña"
            required
          />
          <img
            (click)="isConfirmPasswordVisible = !isConfirmPasswordVisible"
            class="absolute inset-y-0 right-3 my-auto size-4 cursor-pointer"
            src="/icons/forms/{{
              isConfirmPasswordVisible ? 'eye' : 'eye-off'
            }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (
          form.get('password')?.value !== form.get('confirmPassword')?.value
        ) {
          <p class="px-4 text-xs text-tertiary">Las contraseñas no coinciden</p>
        }

        <span class="text-xs font-semibold text-gray-500"
          >El código es proporcionado por un administrador del sitio.</span
        >

        <div class="relative">
          <img
            class="absolute inset-y-0 left-3 my-auto size-3"
            src="/icons/forms/verify.svg"
            alt="Verify Code Icon"
          />
          <input
            id="verificationCode"
            name="verificationCode"
            formControlName="verificationCode"
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="number"
            placeholder="Código de Verificación"
            maxlength="6"
            required
          />
        </div>

        <div class="my-2 flex gap-2">
          <input
            formControlName="terms"
            class="accent-primary"
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <label class="cursor-default text-xs" for="terms"
            >Aceptas los
            <a
              class="font-medium text-primary hover:underline"
              href="/terms-and-conditions"
              >términos y condiciones</a
            ></label
          >
        </div>

        @if (errorMessage) {
          <p class="px-4 text-center text-xs text-tertiary">
            {{ errorMessage }}
          </p>
        }

        <app-custom-button
          moreStyles="w-full justify-center"
          text="Registrate"
          [loading]="loading"
        />

        <span class="text-center text-xs"
          >¿Ya tienes cuenta?
          <a class="font-medium text-primary hover:underline" href="/auth/login"
            >Inicia sesión aquí</a
          ></span
        >
        <a
          class="text-center text-xs font-medium text-primary hover:underline"
          href="/auth/recovery-password"
          >¿Olvidaste tu contraseña?</a
        >
      </form>
    </app-layout>
  `,
})
export class RegistroComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    identification: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    verificationCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
    ]),
    terms: new FormControl(false, Validators.required),
  });

  loading = false;
  errorMessage!: string;

  isPasswordVisible = false;
  isConfirmPasswordVisible = false;

  constructor(
    private route: Router,
    private authService: AuthService,
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.errorMessage = this.form.value.terms
        ? 'Por favor, completa los campos correctamente'
        : '¡Debes aceptar los términos y condiciones!';
      return;
    }

    this.loading = true;
    this.authService.registerUser(this.form.value).subscribe({
      next: () => this.route.navigate(['/home']),
      error: ({ error }) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    });
  }
}
