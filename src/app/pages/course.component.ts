import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer.component';
import { HeaderComponent } from '@components/header.component';
import { CustomButtonComponent } from '@components/custom-button.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { UserLayout } from '@layouts/user-layout.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgClass, CustomButtonComponent, CustomTitleComponent, UserLayout],
  template: `
    <app-user-layout>
      <div class="bg-black flex py-10 px-16 justify-center">
        <div class="w-1/2 flex justify-center">
          <img class="rounded-lg h-72" src="courses/redes.jpg" alt="" />
        </div>
        <div class="w-1/2 flex flex-col pl-16">
          <h1 class="text-white font-extrabold text-4xl">
            REDES DE COMPUTADORAS
          </h1>
          <div
            class="text-white text-center text-sm rounded py-[6px] w-32 my-4 px-4 bg-[#82D245]/50"
          >
            En progreso
          </div>
          <p class="w-11/12 text-white text-sm font-extralight">
            Este curso ofrece una introducción integral a los fundamentos de las
            redes de computadoras. A lo largo del curso, los estudiantes
            aprenderán sobre la arquitectura, componentes y operaciones de redes
            de datos.
          </p>
          <div class="flex gap-x-2 items-center mt-4">
            <img src="icons/courses/teacher.svg" alt="Icono del Profesor" />
            <span class="text-white text-sm font-medium"
              >Prof. Monica Jimenez</span
            >
          </div>
          <div class="flex gap-x-2 items-center mt-4">
            <img src="icons/courses/calendar.svg" alt="Icono del Profesor" />
            <span class="text-white text-sm font-medium"
              >Publicado el 10 de junio del 2024</span
            >
          </div>
          <div class="flex gap-x-2 items-center mt-4">
            <img src="icons/courses/calendar.svg" alt="Icono del Profesor" />
            <span class="text-white text-sm font-medium"
              >Finalizá el 20 de julio del 2024</span
            >
          </div>
        </div>
      </div>

      <section class="flex items-center justify-center gap-x-4 mt-8">
        <div class="w-5/6 bg-[#D9D9D9] h-5 rounded">
          <div
            class="w-[14%] bg-gradient-to-r from-[#FEE500] to-[#F0000B] rounded-l h-full"
          ></div>
        </div>
        <h4 class="text-sm">14% Progreso</h4>
      </section>

      <section>
        <app-custom-title [title]="'Contenido del Curso'" />
        <div class="mt-8 flex justify-center gap-x-1">
          <app-custom-button
            (click)="selectedButton = 'Inicio'"
            [color]="selectedButton === 'Inicio' ? 'orange' : 'black'"
            [hoverColor]="'white'"
            [text]="'Inicio'"
          ></app-custom-button>
          @for (module of modules; track module) {
          <app-custom-button
            (click)="selectedButton = 'Módulo ' + module"
            [color]="selectedButton === 'Módulo ' + module ? 'orange' : 'black'"
            [hoverColor]="'white'"
            [text]="'Módulo ' + module"
          ></app-custom-button>
          }
          <app-custom-button
            (click)="selectedButton = 'Examen'"
            [color]="selectedButton === 'Examen' ? 'orange' : 'black'"
            [hoverColor]="'white'"
            [text]="'Examenes'"
          ></app-custom-button>
        </div>
      </section>

      @if (selectedButton === 'Inicio') {
      <section>
        <app-custom-title [title]="'Docente del Curso'" />
        <div class="flex gap-x-10 items-center mx-16">
          <div
            class="relative bg-[#ececec] flex items-center shadow-sm shadow-black/30 rounded-lg p-2 pr-8 gap-x-4 h-32 w-1/2"
          >
            <img
              class="size-12 absolute top-3 left-3"
              src="presentation-border-1.svg"
              alt=""
            />
            <img
              class="size-20 rounded-full ml-5"
              src="profile.png"
              alt="Perfil del Docente"
            />
            <div class="flex flex-col gap-y-2">
              <h3 class="text-lg font-bold">Monica Jimenez</h3>
              <span class="text-sm ml-4"
                ><strong>Titulo académico: </strong>Ing. Sistemas</span
              >
              <span class="text-sm ml-4"
                ><strong>Correo eletrónico: </strong
                >monica.jimenezAgmail.com</span
              >
            </div>
            <img
              class="size-12 absolute bottom-3 right-3"
              src="presentation-border-2.svg"
              alt=""
            />
          </div>
          <div class="bg-[#FAAB00] rounded-lg p-4 text-sm w-1/2">
            ¡Hola a todos! Soy <strong>Monica Jimenez</strong>, y seré su
            instructora para este curso. Estoy emocionada de acompañarlos en
            este viaje de aprendizaje sobre redes de computadoras. Juntos
            exploraremos el fascinante mundo de las redes, desde lo básico hasta
            configuraciones avanzadas.
            <strong>¡Bienvenidos y mucho éxito!</strong>
          </div>
        </div>
      </section>

      <section>
        <app-custom-title [title]="'Información del Curso'" />
        <div class="flex justify-center gap-x-8 my-10">
          <div
            class="w-96 min-h-60 bg-[#D9D9D9] shadow-md shadow-black/50 rounded-lg"
          >
            <div
              class="flex items-center justify-center w-36 h-8 bg-black rounded-br-xl rounded-tl-lg"
            >
              <h3 class="text-white text-xs font-light italic">Objetivos</h3>
            </div>
            <div class="p-3">
              <p class="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                ratione ab perferendis laudantium labore in, maxime iste sunt
                sit quis tempora, aliquam modi amet ut alias, ad provident!
                Placeat, laborum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequatur quis tenetur eligendi nobis
                provident voluptatum ex magni ratione necessitatibus, unde eaque
                eum quos, architecto quae officiis facere debitis maxime
                reiciendis?
              </p>
            </div>
          </div>
          <div
            class="w-96 min-h-60 bg-[#D9D9D9] shadow-md shadow-black/50 rounded-lg"
          >
            <div
              class="flex items-center justify-center w-36 h-8 bg-black rounded-br-xl rounded-tl-lg"
            >
              <h3 class="text-white text-xs font-light italic">Destrezas</h3>
            </div>
            <div class="p-3">
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                voluptatibus rem perspiciatis libero, dolorum soluta illum quo
                velit placeat est? Atque dolorem quia culpa est. Temporibus
                error accusamus id provident? Cumque quo totam delectus nulla,
                animi dolore? Expedita modi repellendus ex, hic sint
                reprehenderit dicta ratione dolor, assumenda ipsam a molestiae
                facere vero maxime fugit, quis aspernatur nulla cupiditate
                quasi?
              </p>
            </div>
          </div>
          <div
            class="w-96 min-h-60 bg-[#D9D9D9] shadow-md shadow-black/50 rounded-lg"
          >
            <div
              class="flex items-center justify-center w-36 h-8 bg-black rounded-br-xl rounded-tl-lg"
            >
              <h3 class="text-white text-xs font-light italic">
                Valores y Actitudes
              </h3>
            </div>
            <div class="p-3">
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae, laboriosam sed quaerat quasi quae quo harum.
                Sint labore, ea aperiam libero placeat dolore iste facilis,
                saepe laborum excepturi eius!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-10">
        <app-custom-title [title]="'Recursos Adicionales'" />
        <div class="flex flex-col pl-16 mt-10 gap-2">
          <a class="flex items-center gap-x-4" href="#">
            <img
              class="size-7"
              src="icons/courses/archive.svg"
              alt="Documento Adjunto"
            />
            <span class="text-sm">Introducción al curso</span>
          </a>
          <a class="flex items-center gap-x-4" href="#">
            <img
              class="size-7"
              src="icons/courses/archive.svg"
              alt="Documento Adjunto"
            />
            <span class="text-sm">Introducción al curso</span>
          </a>
          <a class="flex items-center gap-x-4" href="#">
            <img
              class="size-7"
              src="icons/courses/archive.svg"
              alt="Documento Adjunto"
            />
            <span class="text-sm">Introducción al curso</span>
          </a>
        </div>
      </section>
      } @else if (selectedButton === 'Examen') {
      <section>
        <app-custom-title [title]="'Tema de la Clase'" />
        <div
          class="relative ml-16 flex items-center bg-gradient-to-r from-[#aeaeaf] via-[#ceced1] to-white h-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full absolute inset-y-0 left-0"
            viewBox="0 0 93 122"
          >
            <path
              d="M90.36 56.81a5 5 0 0 1 0 8.29l-82.2 55.49a5 5 0 0 1-7.8-4.15L.35 5.42a5 5 0 0 1 7.8-4.14L90.35 56.8Z"
            />
          </svg>
          <h3 class="text-3xl ml-28 font-bold">Prueba 1</h3>
        </div>
      </section>
      <section class="mb-12">
        <app-custom-title [title]="'Pruebas'" />
        <button
          class="bg-[#54555A]/15 h-16 ml-16 flex justify-between items-center border-l-8 border-[#FD6A00] pl-4 w-[90%]"
        >
          <div class="flex items-center gap-x-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Prueba 1: Conceptos básicos de redes </span>
          </div>
          <div class="flex items-center gap-x-4">
            <app-custom-button
              (click)="router.navigate(['/examen'])"
              [color]="'orange'"
              [hoverColor]="'white'"
              [text]="'Resolver'"
              [moreStyles]="'w-40 justify-center'"
            ></app-custom-button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="size-7"
              viewBox="0 0 30 32"
            >
              <path
                d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
                class="fill-[#72C234]"
              />
            </svg>
          </div>
        </button>
      </section>
      }
    </app-user-layout>
  `,
})
export class CourseComponent {
  selectedButton = 'Examen';
  modules = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(public router: Router) {}
}
