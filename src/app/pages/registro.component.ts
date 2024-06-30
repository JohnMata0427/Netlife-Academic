import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [ReactiveFormsModule],
    template: `
    <div class="flex h-full">
        <img class="w-[60vw]" src="background-authentication.png" alt="Netlife Background" />
        <div class="flex justify-center items-center w-[40vw] relative bg-[#E5E5E5]">
            <div class="w-96 my-40">
                <img class="absolute top-0 left-0 w-[15vw] rounded-br-2xl" src="logo.jpg" alt="Logo Netlife">
                <h1 class="text-3xl font-bold text-center mb-12">Regístrate</h1>
                <form [formGroup]="form" class="flex flex-col gap-3" (ngSubmit)="onSubmit()">

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/user.svg" alt="User Icon">
                        <input formControlName="name" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="text" placeholder="Nombre" required/>
                    </div>

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/user.svg" alt="User Icon">
                        <input formControlName="lastname" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="text" placeholder="Apellidos" required/>
                    </div>

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/email.svg" alt="Email Icon">
                        <input formControlName="email" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="email" placeholder="Correo Electrónico" required/>
                    </div>

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/email.svg" alt="Email Icon">
                        <input formControlName="confirmEmail" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="email" placeholder="Confirmar Correo Electrónico" required/>
                    </div>

                    @if (form.get('email')?.value !== form.get('confirmEmail')?.value) {
                        <p class="text-red-500 text-xs px-4">Los correos no coinciden</p>
                    }

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/phone.svg" alt="Phone Icon">
                        <input formControlName="phone" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="tel" placeholder="Telefono Móvil" required/>
                    </div>

                    <span class="text-gray-500 text-xs font-semibold">Debe tener minimo 8 caracteres, letra en mayuscula y numero.</span>

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/password.svg" alt="Password Icon">
                        <input formControlName="password" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="{{typePasswordInput}}" placeholder="Contraseña" required/>
                        <img (click)="isPasswordVisible = !isPasswordVisible" class="size-4 absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer" src="icons/forms/{{iconPasswordInput}}.svg" alt="Eye Icon">
                    </div>

                    <div class="relative">
                        <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/password.svg" alt="Password Icon">
                        <input formControlName="confirmPassword" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="{{typeConfirmPasswordInput}}" placeholder="Confirmar Contraseña" required/>
                        <img (click)="isConfirmPasswordVisible = !isConfirmPasswordVisible" class="size-4 absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer" src="icons/forms/{{iconConfirmPasswordInput}}.svg" alt="Eye Icon">
                    </div>

                    @if (form.get('password')?.value !== form.get('confirmPassword')?.value) {
                        <p class="text-red-500 text-xs px-4">Las contraseñas no coinciden</p>
                    }

                    <div class="flex gap-2 my-2">
                        <input formControlName="terms" class="accent-[#FD6A00]" type="checkbox" name="terms" id="terms" required>
                        <label (click)="toggleCheckbox()" class="text-xs cursor-default">Aceptas los <a class="text-[#FD6A00] hover:underline" href="/">términos y condiciones</a></label>
                    </div>

                    <button class="bg-black text-white py-2 rounded-lg text-sm">Registrarse</button>

                    <span class="text-center text-xs">¿Ya tienes cuenta? <a class="text-[#FD6A00] hover:underline" href="/">Inicia Sesión</a></span>
                </form>
            </div>
        </div>
    </div>
    `,
})

export class RegistroComponent {
    form: FormGroup;

    isPasswordVisible = false;
    typePasswordInput = this.isPasswordVisible ? "text" : "password";
    iconPasswordInput = this.isPasswordVisible ? "eye" : "eye-off";

    isConfirmPasswordVisible = false;
    typeConfirmPasswordInput = this.isConfirmPasswordVisible ? "text" : "password";
    iconConfirmPasswordInput = this.isConfirmPasswordVisible ? "eye" : "eye-off";

    constructor(private route: Router, private authService: AuthService) {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            confirmEmail: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required),
            terms: new FormControl(false, Validators.required)
        });
    }

    toggleCheckbox() {
        document.getElementById('terms')?.click();
    }

    onSubmit() {
        if (this.form.invalid) {
            alert(this.form.value.terms ? "¡Por favor llena todos los campos!" : "¡Debes aceptar los términos y condiciones!");
        } else {
            const { confirmEmail, confirmPassword, ...data } = this.form.value;
            this.authService.registerUser(data).subscribe(result =>
                {
                    if (Object.values(result).includes("Email already exists")) {
                        alert("¡El correo ya existe!");
                        return;
                    }
                    alert("¡Registro exitoso!");
                    this.route.navigate(['/home']);
                }
            );
            
        }
    }
}