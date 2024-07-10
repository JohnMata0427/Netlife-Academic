import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';

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
                    <img src="profile.png" alt="Foto de Perfil">
                    <h4 class="text-xl font-extrabold mt-4">Francisco Quezada</h4>
                    <p class="text-sm mt-2">{{ email }}</p>
                    <button class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-1 px-8 rounded-md mt-3 font-medium text-md">Editar Perfil</button>
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat error dolorem et tenetur numquam nesciunt, assumenda facilis similique aut dignissimos repudiandae, amet odit molestiae praesentium perferendis, rerum veniam repellat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium veniam aperiam perferendis, aliquid libero labore eveniet exercitationem accusantium eaque dolores! Voluptates tenetur cumque ut ex adipisci hic repellat veniam?
                        </p>
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
    email = 'francisco.q@gmail.com'
    selectedButton = 'sobre-mi'

    showSobreMi() {
        this.selectedButton = 'sobre-mi'
    }

    showMisCursos() {
        this.selectedButton = 'mis-cursos'
    }

    showMisCertificados() {
        this.selectedButton = 'mis-certificados'
    }
}