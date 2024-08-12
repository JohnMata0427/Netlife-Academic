import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { LayoutComponent } from '@layouts/auth-layout.component';
import { AuthService } from '@services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      <form
        [formGroup]="form"
        class="flex flex-col gap-3 w-96"
        (submit)="onSubmit()"
      >
        <h1 class="text-3xl font-bold text-center mb-4">Nueva Contraseña</h1>
        <span class="text-gray-500 text-xs font-semibold"
          >Debe tener minimo 8 caracteres, letra en mayuscula y numero.</span
        >

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="/icons/forms/password.svg"
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
            src="/icons/forms/{{ iconPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (form.get('password')?.value && form.get('password')?.invalid) {
          <p class="text-tertiary text-xs px-4">
            La contraseña debe tener minimo 8 caracteres
          </p>
        }

        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="/icons/forms/password.svg"
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
            src="/icons/forms/{{ iconConfirmPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (errorMessage) {
          <p class="text-tertiary text-xs px-4">{{ errorMessage }}</p>
        } @else if (
          form.get('confirmPassword')?.value !== form.get('password')?.value
        ) {
          <p class="text-tertiary text-xs px-4">Las contraseñas no coinciden</p>
        }

        <app-custom-button
          [moreStyles]="'w-full justify-center'"
          [text]="'Reestablecer contraseña'"
          [loading]="loading"
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
          <a class="text-primary font-medium hover:underline" href="/auth/login"
            >Inicia sesión aquí</a
          ></span
        >
      </form>
    </app-layout>
  `,
})
export class NewPasswordComponent {
  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  errorMessage!: string;
  token!: string;
  loading = false;

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye';

  isConfirmPasswordVisible = false;
  typeConfirmPasswordInput = 'password';
  iconConfirmPasswordInput = 'eye';

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.errorMessage = 'Por favor, completa los campos correctamente.';
      return;
    }

    this.loading = true;
    this.authService.newPassword(this.form.value, this.token).subscribe({
      next: () => {
        localStorage.removeItem('email');
        this.router.navigate(['/auth/login']);
      },
      error: ({ error }) => (
        (this.errorMessage = error.message), (this.loading = false)
      ),
    });
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
}
