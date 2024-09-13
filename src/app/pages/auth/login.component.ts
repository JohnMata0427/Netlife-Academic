import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { LayoutComponent } from '@layouts/auth-layout.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent, CustomButtonComponent],
  template: `
    <app-layout>
      <form
        [formGroup]="form"
        class="flex w-96 flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <img
          class="mx-auto w-3/4"
          src="/NetlifeLogo.webp"
          alt="Logo de Netlife"
        />
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
            class="peer w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
            type="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        @if (form.get('email')?.invalid && form.get('email')?.value) {
          <p class="text-xs text-tertiary">El correo electrónico es inválido</p>
        }

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
            src="/icons/forms/{{ isPasswordVisible ? 'eye-off' : 'eye' }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (errorMessage) {
          <p class="text-center text-xs text-tertiary">{{ errorMessage }}</p>
        }

        <app-custom-button
          moreStyles="w-full justify-center"
          text="Iniciar sesión"
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

        <a
          class="text-center text-xs font-medium text-primary hover:underline"
          href="/auth/recovery-password"
          >¿Olvidaste tu contraseña?</a
        >
      </form>
    </app-layout>
  `,
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  loading = false;
  errorMessage!: string;

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye';

  constructor(
    private route: Router,
    private authService: AuthService,
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.errorMessage = 'Por favor, completa los campos correctamente';
      return;
    }

    this.loading = true;
    this.authService.loginUser(this.form.value).subscribe({
      next: () => {
        this.route.navigate([
          this.authService.getInfoUser().role !== 'ADMIN'
            ? '/home'
            : '/admin/dashboard',
        ]);
      },
      error: ({ error }) => {
        this.errorMessage = error.message
        this.loading = false
      },
    });
  }
}
