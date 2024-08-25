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
        class="absolute left-0 top-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      <form
        [formGroup]="form"
        class="flex w-96 flex-col gap-3"
        (submit)="onSubmit()"
      >
        <h1 class="mb-4 text-center text-3xl font-bold">Nueva Contraseña</h1>
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
            type="{{ isPasswordVisible ? 'text' : 'password' }}"
            placeholder="Contraseña"
            required
          />
          <img
            (click)="isPasswordVisible = !isPasswordVisible"
            class="absolute inset-y-0 right-3 my-auto size-4 cursor-pointer"
            src="/icons/forms/{{ isPasswordVisible ? 'eye' : 'eye-off' }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (form.get('password')?.value && form.get('password')?.invalid) {
          <p class="px-4 text-xs text-tertiary">
            La contraseña debe tener minimo 8 caracteres
          </p>
        }

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
            type="{{ isConfirmPasswordVisible ? 'text' : 'password' }}"
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

        @if (errorMessage) {
          <p class="px-4 text-xs text-tertiary">{{ errorMessage }}</p>
        } @else if (
          form.get('confirmPassword')?.value !== form.get('password')?.value
        ) {
          <p class="px-4 text-xs text-tertiary">Las contraseñas no coinciden</p>
        }

        <app-custom-button
          moreStyles="w-full justify-center"
          text="Reestablecer contraseña"
          [loading]="loading"
        />
        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a
            class="font-medium text-primary hover:underline"
            href="/auth/register"
            >Regístrate aquí</a
          ></span
        >
        <span class="text-center text-xs"
          >¿Tienes cuenta?
          <a class="font-medium text-primary hover:underline" href="/auth/login"
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
    this.activatedRoute.queryParams.subscribe(({ token }) => {
      this.token = token;
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
}
