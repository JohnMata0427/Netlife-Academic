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
        class="flex flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="text-3xl font-bold text-center mb-4">Inicia sesión</h1>
        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            id="email"
            name="email"
            value="{{ form.get('email')?.value }}"
            formControlName="email"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        @if (form.get('email')?.invalid && form.get('email')?.value !== '') {
        <span class="text-xs text-red-500"
          >El correo electrónico es inválido</span
        >
        }

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            formControlName="password"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="{{ typePasswordInput }}"
            placeholder="Contraseña"
            required
          />
          <img
            (click)="togglePasswordVisibility()"
            class="size-4 absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer"
            src="icons/forms/{{ iconPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (message) {
        <span class="text-xs text-red-500 text-center">{{ message }}</span>
        }

        <app-custom-button
          [moreStyles]="'w-full justify-center'"
          [color]="'black'"
          [hoverColor]="'white'"
          [text]="'Iniciar sesión'"
          [loading]="loading"
        />

        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a
            class="text-[#FD6A00] font-medium hover:underline"
            href="/auth/register"
            >Regístrate aquí</a
          ></span
        >

        <a
          class="text-[#FD6A00] font-medium hover:underline text-center text-xs"
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
  message = '';

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye';

  constructor(private route: Router, private authService: AuthService) {}

  onSubmit() {
    this.loading = true;
    if (this.form.invalid) {
      this.message = 'Por favor, completa los campos correctamente';
      this.loading = false;
    } else {
      this.authService.loginUser(this.form.value).subscribe({
        next: () => {
          this.loading = false;
          if (this.authService.getInfoUser().role !== 'ADMIN') {
            this.route.navigate(['/home']);
          } else {
            this.route.navigate(['/admin/dashboard']);
          }
        },
        error: (error) => {
          this.loading = false;
          this.message = error.error.message;
        },
      });
    }
  }

  // toggleCheckbox() {
  //     document.getElementById('remember')?.click();
  // }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.typePasswordInput = this.isPasswordVisible ? 'text' : 'password';
    this.iconPasswordInput = this.isPasswordVisible ? 'eye-off' : 'eye';
  }
}
