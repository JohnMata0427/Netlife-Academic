import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { UserService } from '@netlifeacademic/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CourseInfoComponent, FooterComponent, RouterOutlet],
  template: `
        <router-outlet />
        <app-header />
        <main>
            <div class="relative">
                <img class="w-full h-auto" src="profile/background-profile.png" alt="Portada del Perfil">
                <div class="absolute -bottom-[216px] left-16 flex flex-col items-center">
                    <img class="rounded-full size-52 border-white border-8" src="{{user?.imageUrl}}" alt="Foto de Perfil">
                    <h4 class="text-xl font-extrabold mt-4">{{ fullName }}</h4>
                    <p class="text-sm mt-2">{{ user?.email }}</p>
                    <button (click)="goToActualizarPerfil()" class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-1 px-8 rounded-md mt-3 font-medium text-md">Editar Perfil</button>
                </div>
            </div>
            <section class="ml-[360px] mt-4">
                <div class="flex gap-1">
                    <div>
                        <button (click)="showSobreMi()" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Sobre mí</button>
                        @if (selectedButton === 'sobre-mi') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="showMisCursos()" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Mis cursos</button>
                        @if (selectedButton === 'mis-cursos') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="showMisCertificados()" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Mis certificados</button>
                        @if (selectedButton === 'mis-certificados') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                </div>
                <div class="border border-solid border-black min-h-36 mr-16 rounded mt-1 p-2">
                    @if (selectedButton === 'sobre-mi') {
                        <ul>
                            <li>Rol: {{user?.role}}</li>
                            <li>Compañia: {{user?.company}}</li>
                            <li>Area: {{user?.area}}</li>
                            <li>Nivel: {{user?.level}}</li>
                            <li>Cargo: {{user?.position}}</li>
                            <li>Fecha de Cumpleaños: {{user?.birthdate}}</li>
                        </ul>
                    } @else if (selectedButton === 'mis-cursos') {
                        <ul>
                            <li>
                                Redes de Computadores
                            </li>
                            <li>
                                Lógica de Programación
                            </li>
                            <li>
                                Análisis de Datos                                
                            </li>
                        </ul>
                    } @else {
                        <img src="courses/analisis.png" alt="">
                    }
                </div>
            </section>
        </main>
        <app-footer />
`
})
export class MiPerfilComponent {
    selectedButton = 'sobre-mi'
    id = ''
    fullName = ''
    user: User | null = null

    constructor(private authService: AuthService, private userService: UserService) {

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

    goToActualizarPerfil() {
        window.location.href = '/mi-perfil/actualizar-informacion'
    }

    ngOnInit() {
        this.id = this.authService.getInfoFromToken()

        this.userService.getUserById(this.id).subscribe({
            next: (result) => {
                this.user = result
                this.fullName = `${this.user?.name} ${this.user?.lastname}`
            },
            error: (error) => console.error(error),
            complete() {
                console.log('Complete');
            }
        });
    }

}