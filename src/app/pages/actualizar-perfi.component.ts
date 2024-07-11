import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CourseInfoComponent, FooterComponent, RouterOutlet, ReactiveFormsModule],
  template: `
        <router-outlet />
        <app-header />
        <main>
            <div class="relative">
                <div class="relative">
                    <img class="w-full h-auto" src="profile/background-profile.png" alt="Portada del Perfil">
                    <button class="absolute bottom-4 right-12 flex items-center justify-center py-[6px] px-4 bg-white rounded-lg shadow shadow-black/50 gap-x-2">
                        <img src="icons/profile/change-background.svg" alt="">
                        <span class="text-black font-light text-sm">Cambiar el fondo</span>
                    </button>
                </div>
                <div class="absolute -bottom-28 left-16 flex flex-col items-center">
                    <img class="rounded-full size-52 border-white border-8" [src]="imagePreview" alt="Foto de Perfil">                
                    <div (click)="fileChooser()" class="absolute bottom-3 right-3 bg-black rounded-full size-12 hover:bg-black/90 transition-all">
                        <input id="filechooser" class="hidden" type="file" (change)="onFileChange($event)" >
                        <img class="absolute bottom-[14px] right-[9px]" src="icons/profile/camera.svg" alt="Botón Actualizar Perfil">
                    </div>
                </div>
            </div>
            <section class="flex justify-center mt-8">
                <form [formGroup]="form" (ngSubmit)="onSubmit()" class="w-[600px] flex flex-col">
                    <h1 class="text-2xl font-semibold">Datos generales</h1>
                    <div class="flex mt-5 gap-x-5">
                        <div class="flex flex-col w-80">
                            <label for="">Nombre</label>
                            <input formControlName="name" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.name}}">
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="">Apellidos</label>
                            <input formControlName="lastname" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.lastname}}">
                        </div>
                    </div>
                    <div class="flex mt-5 gap-x-5">
                        <div class="flex flex-col w-80">
                            <label for="">Empresa</label>
                            <input formControlName="company" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.company}}">
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="">Área</label>
                            <input formControlName="area" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.area}}">
                        </div>
                    </div>
                    <div class="flex mt-5 gap-x-5">
                        <div class="flex flex-col w-80">
                            <label for="">Nivel</label>
                            <input formControlName="level" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.level}}">
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="">Cargo</label>
                            <input formControlName="position" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.position}}">
                        </div>
                    </div>
                    <div class="flex mt-5 gap-x-5">
                        <div class="flex flex-col w-80">
                            <label for="">Correo electrónico</label>
                            <input disabled class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.email}}">
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="">Fecha de Nacimiento</label>
                            <input formControlName="birthdate" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.birthdate}}">
                        </div>
                    </div>
                    <div class="flex mt-5 gap-x-5">
                        <div class="flex flex-col w-80">
                            <label for="">Estado</label>
                            <input formControlName="state" class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.state}}">
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="">Fecha de Ingreso a la Organización</label>
                            <input disabled class="focus:outline-none border border-black rounded p-1 mt-2" type="text" value="{{user?.createdAt}}">
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-2 px-8 rounded-md mt-10 font-medium text-md">Actualizar Perfil</button>
                    </div>
                </form>                    
            </section>
        </main>
        <app-footer />
`
})
export class ActualizarPerfilComponent {
    id = 'e2779537-234f-4ee4-b285-45f0165d4696'
    selectedButton = 'sobre-mi'
    form: FormGroup;
    imagePreview: string | ArrayBuffer | null = null
    image: File | null = null

    user: User | null = null

    constructor(private router: Router, private userService: UserService) {
        this.form = new FormGroup({
            name: new FormControl,
            lastname: new FormControl,
            company: new FormControl,
            area: new FormControl,
            level: new FormControl,
            position: new FormControl,
            birthdate: new FormControl,
            state: new FormControl,
        })
    }
    
    showSobreMi() {
        this.selectedButton = 'sobre-mi'
    }

    showMisCursos() {
        this.selectedButton = 'mis-cursos'
    }

    showMisCertificados() {
        this.selectedButton = 'mis-certificados'
    }

    fileChooser() {
        document.getElementById('filechooser')?.click()
    }

    onFileChange(event: any) {
        const reader = new FileReader()
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files
            reader.readAsDataURL(file)
            reader.onload = () => {
                this.imagePreview = reader.result
            }
            this.image = file
        }
    }

    onSubmit() {
        if (this.image) this.userService.updatePhoto(this.image, this.id).subscribe({
            next: (data) => {
                console.log(data)
            },
            error: (error) => {
                console.log(error)
            }
        })

        this.userService.updateUser(this.form.value, this.id).subscribe({
            next: (data) => {
                console.log(data)
                this.router.navigate(['/mi-perfil'])
            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    ngOnInit() {
        this.userService.getUserById(this.id).subscribe((data) => {
            console.log(data)
            this.user = data
            this.imagePreview = data.imageUrl
        })
    }
}