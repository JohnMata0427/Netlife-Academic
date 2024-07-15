import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutComponent } from '../../layouts/auth-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent],
  template: `
    <app-layout>
      <form
        [formGroup]="form"
        class="flex flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="text-3xl font-bold text-center">Inicia sesión</h1>
        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
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

        @if (form.get('password')?.invalid && form.get('password')?.value !==
        '') {
        <span class="text-xs text-red-500"
          >La contraseña debe tener al menos 8 caracteres</span
        >
        } @if (message) {
        <span class="text-xs text-red-500 text-center">{{ message }}</span>
        }

        <button
          class="bg-black text-white py-2 rounded-lg text-sm flex justify-center hover:bg-black/90 transition-all"
        >
          @if (loading) {
          <svg
            aria-hidden="true"
            role="status"
            class="inline w-4 h-4 me-3 text-[#FD6A00] animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          } @else { Iniciar sesión }
        </button>

        <!-- <div class="flex gap-2 my-2">
          <input class="accent-[#FD6A00]" type="checkbox" id="remember" required>
          <label (click)="toggleCheckbox()" class="text-xs cursor-default">Recordar usuario</label>
        </div> -->

        <span class="text-center text-xs"
          >¿No tienes cuenta?
          <a class="text-[#FD6A00] hover:underline" href="/auth/register"
            >Regístrate aquí</a
          ></span
        >

        <a
          class="text-[#FD6A00] hover:underline text-center text-xs"
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
  typePasswordInput = this.isPasswordVisible ? 'text' : 'password';
  iconPasswordInput = this.isPasswordVisible ? 'eye' : 'eye-off';

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
          if (this.authService.isAdministrator()) {
            this.route.navigate(['/admin/dashboard']);
          } else {
            this.route.navigate(['/home']);
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
