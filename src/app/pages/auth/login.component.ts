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
        class="flex flex-col gap-3 w-96"
        (ngSubmit)="onSubmit()"
      >
        <img
          class="w-3/4 mx-auto"
          src="/NetlifeLogo.webp"
          alt="Logo de Netlife"
        />
        <div class="relative">
          <img
            class="size-3 absolute inset-y-0 my-auto left-3"
            src="/icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="email"
            name="email"
            formControlName="email"
            class="p-1.5 pl-8 rounded-lg w-full border-black border text-sm peer"
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

        @if (message) {
          <p class="text-xs text-tertiary text-center">{{ message }}</p>
        }

        <app-custom-button
          [moreStyles]="'w-full justify-center'"
          [text]="'Iniciar sesión'"
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

        <a
          class="text-primary font-medium hover:underline text-center text-xs"
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
  message!: string;

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye';

  constructor(
    private route: Router,
    private authService: AuthService,
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.message = 'Por favor, completa los campos correctamente';
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
      error: ({ error }) => (
        (this.message = error.message), (this.loading = false)
      ),
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.typePasswordInput = this.isPasswordVisible ? 'text' : 'password';
    this.iconPasswordInput = this.isPasswordVisible ? 'eye-off' : 'eye';
  }
}
