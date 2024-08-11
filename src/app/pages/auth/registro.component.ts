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
      <form
        [formGroup]="form"
        class="flex flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="text-3xl font-bold text-center mb-4">Regístrate</h1>
        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            id="name"
            name="name"
            formControlName="name"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            id="lastname"
            name="lastname"
            formControlName="lastname"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="text"
            placeholder="Apellidos"
            required
          />
        </div>

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="email"
            name="email"
            formControlName="email"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="confirmEmail"
            name="confirmEmail"
            formControlName="confirmEmail"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="email"
            placeholder="Confirmar Correo Electrónico"
            required
          />
        </div>

        @if (form.get('email')?.value !== form.get('confirmEmail')?.value) {
        <p class="text-red-500 text-xs px-4">Los correos no coinciden</p>
        }

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/identification.svg"
            alt="Identification Icon"
          />
          <input
            id="identification"
            name="identification"
            formControlName="identification"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="text"
            placeholder="Cédula o Pasaporte"
            required
            maxlength="10"
          />
        </div>

        @if (form.get('identification')?.value.lenght < 10 &&
        form.get('identification')?.value !== '') {
        <p class="text-red-500 text-xs px-4">
          La identificación debe tener 10 caracteres
        </p>
        }

        <span class="text-gray-500 text-xs font-semibold"
          >Debe tener minimo 8 caracteres, letra en mayuscula y numero.</span
        >

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            id="password"
            name="password"
            formControlName="password"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="{{ typePasswordInput }}"
            placeholder="Contraseña"
            required
          />
          <img
            (click)="togglePasswordVisibility()"
            class="size-4 absolute inset-y-0 my-auto right-3 cursor-pointer"
            src="icons/forms/{{ iconPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            id="confirmPassword"
            name="confirmPassword"
            formControlName="confirmPassword"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="{{ typeConfirmPasswordInput }}"
            placeholder="Confirmar Contraseña"
            required
          />
          <img
            (click)="toggleConfirmPasswordVisibility()"
            class="size-4 absolute inset-y-0 my-auto right-3 cursor-pointer"
            src="icons/forms/{{ iconConfirmPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (form.get('password')?.value !== form.get('confirmPassword')?.value)
        {
        <p class="text-red-500 text-xs px-4">Las contraseñas no coinciden</p>
        }

        <span class="text-gray-500 text-xs font-semibold"
          >El código es proporcionado por un administrador del sitio.</span
        >

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="icons/forms/verify.svg"
            alt="Verify Code Icon"
          />
          <input
            id="verificationCode"
            name="verificationCode"
            formControlName="verificationCode"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm"
            type="number"
            placeholder="Código de Verificación"
            maxlength="6"
            autocomplete="off"
            required
          />
        </div>

        <div class="flex gap-2 my-2">
          <input
            formControlName="terms"
            class="accent-primary"
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <label (click)="toggleCheckbox()" class="text-xs cursor-default"
            >Aceptas los
            <a
              class="text-primary font-medium hover:underline"
              href="/terms-and-conditions"
              >términos y condiciones</a
            ></label
          >
        </div>

        @if (errorMessage) {
        <p class="text-red-500 text-xs text-center px-4">{{ errorMessage }}</p>
        }

        <app-custom-button
          [moreStyles]="'w-full justify-center'"
          [color]="'black'"
          [hoverColor]="'white'"
          [text]="'Registrate'"
          [loading]="loading"
        />

        <span class="text-center text-xs"
          >¿Ya tienes cuenta?
          <a
            class="text-primary font-medium hover:underline"
            href="/auth/login"
            >Inicia sesión aquí</a
          ></span
        >
        <a
          class="text-primary font-medium hover:underline text-center text-xs"
          href="/auth/recovery-password"
          >¿Olvidaste tu contraseña?</a
        >
      </form>
    </app-layout>
  `,
})
export class RegistroComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye';

  isConfirmPasswordVisible = false;
  typeConfirmPasswordInput = 'password';
  iconConfirmPasswordInput = 'eye';

  constructor(private route: Router, private authService: AuthService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
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
  }

  toggleCheckbox() {
    document.getElementById('terms')?.click();
    if (this.errorMessage === '¡Debes aceptar los términos y condiciones!')
      this.errorMessage = '';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.typePasswordInput = this.isPasswordVisible ? 'text' : 'password';
    this.iconPasswordInput = this.isPasswordVisible ? 'eye' : 'eye-off';
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    this.typeConfirmPasswordInput = this.isConfirmPasswordVisible
      ? 'text'
      : 'password';
    this.iconConfirmPasswordInput = this.isConfirmPasswordVisible
      ? 'eye'
      : 'eye-off';
  }

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
      error: ({ error }) => (
        (this.errorMessage = error.message), (this.loading = false)
      ),
    });
  }
}
