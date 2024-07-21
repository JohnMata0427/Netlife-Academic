import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutComponent } from '../../layouts/auth-layout.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent],
  template: `
    <app-layout>
      <form
        [formGroup]="form"
        class="flex flex-col gap-3"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="text-3xl font-bold text-center mb-12">Regístrate</h1>
        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            formControlName="name"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/user.svg"
            alt="User Icon"
          />
          <input
            formControlName="lastname"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="text"
            placeholder="Apellidos"
            required
          />
        </div>

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

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/email.svg"
            alt="Email Icon"
          />
          <input
            formControlName="confirmEmail"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
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
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/identification.svg"
            alt="Identification Icon"
          />
          <input
            formControlName="identification"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="text"
            placeholder="Cédula o Pasaporte"
            required
          />
        </div>

        @if (form.get('identification')?.value.lenght != 10 &&
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

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/password.svg"
            alt="Password Icon"
          />
          <input
            formControlName="confirmPassword"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="{{ typeConfirmPasswordInput }}"
            placeholder="Confirmar Contraseña"
            required
          />
          <img
            (click)="toggleConfirmPasswordVisibility()"
            class="size-4 absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer"
            src="icons/forms/{{ iconConfirmPasswordInput }}.svg"
            alt="Eye Icon"
          />
        </div>

        @if (form.get('password')?.value !== form.get('confirmPassword')?.value)
        {
        <p class="text-red-500 text-xs px-4">Las contraseñas no coinciden</p>
        }

        <div class="relative">
          <img
            class="size-3 absolute top-0 left-0 mt-3 ml-3"
            src="icons/forms/verify.svg"
            alt="Verify Code Icon"
          />
          <input
            formControlName="verificationCode"
            class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]"
            type="number"
            placeholder="Código de Verificación"
            required
          />
        </div>

        <div class="flex gap-2 my-2">
          <input
            formControlName="terms"
            class="accent-[#FD6A00]"
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <label (click)="toggleCheckbox()" class="text-xs cursor-default"
            >Aceptas los
            <a class="text-[#FD6A00] hover:underline" href="/"
              >términos y condiciones</a
            ></label
          >
        </div>

        @if (errorMessage) {
        <p class="text-red-500 text-xs text-center px-4">{{ errorMessage }}</p>
        }

        <button class="bg-black text-white py-2 rounded-lg text-sm hover:bg-black/90">
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
          } @else { Registrate }
        </button>

        <span class="text-center text-xs"
          >¿Ya tienes cuenta?
          <a class="text-[#FD6A00] hover:underline" href="/auth/login"
            >Inicia sesión aquí</a
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
export class RegistroComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  isPasswordVisible = false;
  typePasswordInput = 'password';
  iconPasswordInput = 'eye-off';

  isConfirmPasswordVisible = false;
  typeConfirmPasswordInput = 'password';
  iconConfirmPasswordInput = 'eye-off';

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
        Validators.minLength(10),
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      verificationCode: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.required),
    });
  }

  toggleCheckbox() {
    document.getElementById('terms')?.click();
    if (this.errorMessage === '¡Debes aceptar los términos y condiciones!') this.errorMessage = '';
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
    this.loading = true;
    if (this.form.invalid) {
      this.errorMessage = this.form.value.terms
        ? 'Por favor, completa los campos correctamente'
        : '¡Debes aceptar los términos y condiciones!';
      this.loading = false;
    } else {
      this.authService.registerUser(this.form.value).subscribe({
        next: () => {
          this.route.navigate(['/home']);
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      });
    }
  }
}
