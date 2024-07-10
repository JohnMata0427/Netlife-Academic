import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@netlifeacademic/components/footer.component";
import { HeaderComponent } from "@netlifeacademic/components/header.component";

@Component({
    selector: 'app-course',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    template: `
        <router-outlet />
        <app-header />
        <main>
            <div class="w-full h-auto bg-black flex py-10 px-16 justify-between">
                <div class="w-1/2 flex justify-center">
                    <img class="rounded-lg" src="courses/sql.png" alt="">
                </div>
                <div class="flex flex-col w-1/2">
                    <h1 class="text-white font-extrabold text-4xl">REDES DE COMPUTADORAS</h1>
                    <div class="text-white text-sm rounded py-[6px] w-28 my-4 px-4 bg-[#82D245]/50"><span>En progreso</span></div>
                    <p class="text-white text-sm w-4/5 font-light">Este curso ofrece una introducción integral a los fundamentos de las redes de computadoras. A lo largo del curso, los estudiantes aprenderán sobre la arquitectura, componentes y operaciones de redes de datos.</p>
                    <div class="flex gap-x-2 items-center mt-4">
                        <img src="icons/courses/teacher.svg" alt="Icono del Profesor">
                        <span class="text-white text-sm font-medium">Prof. Monica Jimenez</span>
                    </div>
                    <div class="flex gap-x-2 items-center mt-4">
                        <img src="icons/courses/calendar.svg" alt="Icono del Profesor">
                        <span class="text-white text-sm font-medium">Publicado el 10 de junio del 2024</span>
                    </div>
                    <div class="flex gap-x-2 items-center mt-4">
                        <img src="icons/courses/calendar.svg" alt="Icono del Profesor">
                        <span class="text-white text-sm font-medium">Finalizá el 20 de julio del 2024</span>
                    </div>
                </div>
            </div>

            <section class="flex items-center justify-center gap-x-4 mt-8">
                <div class="w-5/6 bg-[#D9D9D9] h-5 rounded">
                    <div class="w-[14%] bg-gradient-to-r from-[#FEE500] to-[#F0000B] rounded-l h-full"></div>
                </div>
                <h4 class="text-sm">14% Progreso</h4>
            </section>

            <section>
                <div class="relative mt-10">
                    <img class="w-80 h-auto" src="title-layout.png" alt="Modulos de trabajo" />
                    <h1 class="absolute top-2 left-16 text-white font-semibold">Modulos de trabajo</h1>
                </div>
                <div class="mt-8 flex justify-center gap-x-2">
                    <div>
                        <button (click)="showInicio()" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Inicio</button>
                        @if (selectedButton === 'Inicio') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 1'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 1</button>
                        @if (selectedButton === 'Modulo 1') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 2'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 2</button>
                        @if (selectedButton === 'Modulo 2') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 3'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 3</button>
                        @if (selectedButton === 'Modulo 3') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 4'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 4</button>
                        @if (selectedButton === 'Modulo 4') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 5'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 5</button>
                        @if (selectedButton === 'Modulo 5') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 6'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 6</button>
                        @if (selectedButton === 'Modulo 6') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                    <div>
                        <button (click)="selectedButton = 'Modulo 7'" class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg">Modulo 7</button>
                        @if (selectedButton === 'Modulo 7') {
                            <div class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] h-1"></div>
                        }
                    </div>
                </div>
            </section>
            <section>
                <div class="relative mt-10">
                    <img class="w-80 h-auto" src="title-layout.png" alt="Información del curso" />
                    <h1 class="absolute top-2 left-16 text-white font-semibold">Información del curso</h1>
                </div>
            </section>
        </main>
        <app-footer />
    `
})

export class CourseComponent {
    selectedButton = 'Inicio'

    constructor () {
        
    }

    showInicio() {
        this.selectedButton = 'Inicio'
    }
}