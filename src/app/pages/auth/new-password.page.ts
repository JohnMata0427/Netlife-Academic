import { Component, inject } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { UserLayout } from '@/layouts/auth.layout';
import { AuthService } from '@/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [UserLayout, ReactiveFormsModule, CustomButtonComponent],
  template: `
    <app-auth-layout>
      <img
        class="absolute top-0 left-0 w-52 rounded-br-2xl"
        src="/logo.webp"
        alt="Logo Netlife"
      />
      <form
        class="flex w-96 flex-col gap-3"
        [formGroup]="form"
        (submit)="onSubmit()"
      >
        <h1
          class="from-secondary via-primary to-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-3xl font-bold text-transparent"
        >
          Nueva Contraseña
        </h1>
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
              class="fill-black"
              d="M7.7 3.7H6.2V2c0-.5-.3-1-.7-1.4a2.3 2.3 0 0 0-3 0c-.5.4-.7.9-.7 1.4v1.7H.3a.3.3 0 0 0-.2 0A.2.2 0 0 0 0 4v6l.3.1h7.6a.2.2 0 0 0 .1-.3V4a.2.2 0 0 0 0-.2.3.3 0 0 0-.3 0Zm-2.4 0H2.7V2c0-.3.1-.6.4-.9.2-.2.6-.3.9-.3.3 0 .7.1 1 .3l.3.9v1.7Z"
            />
          </svg>
          <input
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm focus:outline-primary"
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

        @if (form.get('password')?.value && form.get('password')?.invalid) {
          <p class="text-tertiary px-4 text-xs">
            La contraseña debe tener minimo 8 caracteres
          </p>
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
            class="w-full rounded-lg border border-black p-1.5 pl-8 text-sm"
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

        @if (errorMessage) {
          <p class="text-tertiary px-4 text-xs">{{ errorMessage }}</p>
        } @else if (form.value.password !== form.value.confirmPassword) {
          <p class="text-tertiary px-4 text-xs">Las contraseñas no coinciden</p>
        }

        <app-button-component
          text="Reestablecer contraseña"
          moreStyles="w-full justify-center"
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
    </app-auth-layout>
  `,
})
export class NewPasswordPage {
  public form = new FormGroup({
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });
  public errorMessage = '';
  public loading = false;
  public isPasswordVisible = false;
  public isConfirmPasswordVisible = false;

  private token = '';
  private router = inject(Router);
  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);

  public ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams['token'];
  }

  public onSubmit() {
    const { password, confirmPassword } = this.form.value;

    if (this.form.valid && password === confirmPassword) {
      this.loading = true;
      this.authService.newPassword(this.form.value, this.token).subscribe({
        next: () => {
          localStorage.removeItem('email');
          this.router.navigate(['/auth/login']);
        },
        error: ({ error }) => {
          this.errorMessage = error.message;
          this.loading = false;
        },
      });
    } else this.errorMessage = 'Por favor, completa los campos correctamente.';
  }
}
