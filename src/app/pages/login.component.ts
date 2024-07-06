import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    template: `
        <div class="h-full flex">
            <img class="w-[60vw]" src="background-authentication.png" alt="">
            <div class="flex justify-center items-center w-[40vw] bg-[#E5E5E5] ">
                <div class="w-96 my-40">
                    <form [formGroup]="form" class="flex flex-col gap-3" (ngSubmit)="onSubmit()">
                        <img class="" src="logo_conectaNetlife 1.svg" alt="">
                        <div class="relative">
                            <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/email.svg" alt="Email Icon">
                            <input formControlName="email" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="email" placeholder="Correo Electrónico" required/>
                        </div>
                            
                        <div class="relative">
                            <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/password.svg" alt="Password Icon">
                            <input formControlName="password" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="{{typePasswordInput}}" placeholder="Contraseña" required/>
                            <img (click)="isPasswordVisible = !isPasswordVisible" class="size-4 absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer" src="icons/forms/{{iconPasswordInput}}.svg" alt="Eye Icon">
                        </div>
            
                        <button class="bg-black text-white py-2 rounded-lg text-sm">Iniciar sesión</button>
                        <div class="flex gap-2 my-2">
                            <input formControlName="terms" class="accent-[#FD6A00]" type="checkbox" name="terms" id="terms" required>
                            <label (click)="toggleCheckbox()" class="text-xs cursor-default">Recordar usuario</label>
                        </div>
            
                        <span class="text-center text-xs">¿No tienes cuenta? <a class="text-[#FD6A00] hover:underline" href="/">Regístrate aquí</a></span>
            
                        <a class="text-[#FD6A00] hover:underline text-center text-xs" href="">¿Olvidaste tu contraseña?</a>
                    </form>
                </div>
            </div>
        </div>

    `,
})


export class LoginComponent {
    form: FormGroup;

    isPasswordVisible = false;
    typePasswordInput = this.isPasswordVisible ? "text" : "password";
    iconPasswordInput = this.isPasswordVisible ? "eye" : "eye-off";
    constructor(private route: Router, private authService: AuthService) {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }
    onSubmit() {
        if (this.form.invalid) {
            console.log("¡Por favor llena todos los campos!")
        } else {
            this.authService.registerUser(this.form.value).subscribe(result =>
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
    toggleCheckbox() {
        document.getElementById('terms')?.click();
    }
}