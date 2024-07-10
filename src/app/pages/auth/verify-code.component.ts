import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@netlifeacademic/services/auth.service";
import { LayoutComponent } from "../../layouts/auth-layout.component";

@Component({
    selector: 'app-verify-code',
    standalone: true,
    imports: [LayoutComponent, ReactiveFormsModule],
    template: `
        <app-layout>
            <form class="flex flex-col gap-3" (submit)="onSubmit($event)">
                <h1 class="text-3xl font-bold text-center mb-10">Código de verificación</h1>

                <span class="text-sm text-center mb-2">Introduce el código de verificación enviado a tu correo electrónico</span>

                <div class="relative">
                    <img class="size-3 absolute top-0 left-0 mt-3 ml-3" src="icons/forms/lock.svg" alt="Lock Icon">
                    <input [formControl]="verificationCode" id="code" class="p-[6px] pl-8 rounded-lg w-full border-black border-[1px] text-sm bg-[#f1f1f1]" type="text" placeholder="Código de Verificación" required/>
                </div>

                @if (errorMessage) {
                    <p class="text-red-500 text-xs px-4">{{errorMessage}}</p>
                } @else if (verificationCode.value != '' && verificationCode.invalid) {
                    <p class="text-red-500 text-xs px-4">Código no válido</p>
                }

                <button class="bg-black text-white py-2 rounded-lg text-sm hover:bg-black/80 transition-all duration-300">Verificar Código</button>
            </form>
        </app-layout>
    `
})

export class VerifyCodeComponent {
    verificationCode = new FormControl('', [Validators.required]);
    errorMessage: string = '';
    token: string = '';

    constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(params => {
            this.token = params['token']
        });
    }

    onSubmit(event: Event) {
        event.preventDefault();
        if (this.verificationCode.invalid) {
            console.log('Invalid code');
        } else {
            this.authService.verifyCode(this.verificationCode.value, this.token).subscribe({
                next: (result) => {
                    this.router.navigate(['/auth/new-password'], { queryParams: { token: this.token } });
                },
                error: (error) => {
                    console.error(error);
                },
                complete() {
                    console.log('Code verified');
                }
            });
        }
    }
}
