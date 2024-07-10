import { Component } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "../../layouts/auth-layout.component";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-recovery-password',
    standalone: true,
    imports: [LayoutComponent, ReactiveFormsModule],
    template: `
        <app-layout>
            <form class="flex flex-col gap-3" (submit)="onSubmit($event)">
                <h1 class="text-3xl font-bold text-center mb-12">Recuperar Contraseña</h1>
                <div class="relative">
                    <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/email.svg" alt="Email Icon">
                    <input [formControl]="email" id="email" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="email" placeholder="Correo Electrónico" required/>
                </div>

                @if (errorMessage) {
                    <p class="text-red-500 text-xs px-4">{{errorMessage}}</p>
                } @else if (email.value != '' && email.invalid) {
                    <p class="text-red-500 text-xs px-4">Correo electrónico no válido</p>
                }
        
                <button class="bg-black text-white py-2 rounded-lg text-sm hover:bg-black/80 transition-all duration-300">Envíar código de verificación</button>

                <span class="text-center text-xs">¿No tienes cuenta? <a class="text-[#FD6A00] hover:underline" href="/auth/register">Regístrate</a></span>
                <span class="text-center text-xs">¿Tienes cuenta? <a class="text-[#FD6A00] hover:underline" href="/auth/login">Inicia sesión</a></span>
            </form>
        </app-layout>
    `
})

export class RecoveryPasswordComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    errorMessage: string = '';

    constructor(private router: Router, private authService: AuthService) {
        
    }

    onSubmit(event: Event) {
        event.preventDefault();
        if (this.email.invalid) {
            console.log('Invalid email');
        } else {
            this.authService.recoveryPassword(this.email.value).subscribe({
                next: (result) => {
                    this.router.navigate(
                        [`/auth/verify-code`],
                        { queryParams: { token: result.token } }
                    )
                },
                error: (error) => {
                  this.errorMessage = error.error.message;
                },
                complete() {
                  console.log('Email sent');
                }
            });
        }
    }
}