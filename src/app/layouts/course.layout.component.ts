import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer.component';
import { HeaderComponent } from '@components/header.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  template: `
    <router-outlet />
    <app-header />
    <main>
      <div class="bg-black flex py-10 px-16 justify-center">
        <div class="w-1/2 flex justify-center">
          <img class="rounded-lg h-72" src="courses/redes.jpg" alt="" />
        </div>
        <div class="w-1/2 flex flex-col pl-16">
          <h1 class="text-white font-extrabold text-4xl">
            REDES DE COMPUTADORAS
          </h1>
          <div
            class="text-white text-sm rounded py-1.5 w-28 my-4 px-4 bg-[#82D245]/50"
          >
            <span>En progreso</span>
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
        <div class="relative mt-10">
          <img
            class="w-80 h-auto"
            src="title-layout.png"
            alt="Modulos de trabajo"
          />
          <h1 class="absolute top-2 left-16 text-white font-semibold">
            Modulos de trabajo
          </h1>
        </div>
        <div class="mt-8 flex justify-center gap-x-1">
          <div>
            <button
              (click)="selectedButton = 'Inicio'"
              class="min-w-24 bg-black text-white text-sm py-2 px-5 rounded-tr-lg hover:bg-black/90 border-2"
              [ngClass]="{ 'border-[#FD6A00]': selectedButton === 'Inicio' }"
            >
              Inicio
            </button>
          </div>
          @for (module of modules; track module) {
          <div>
            <button
              (click)="selectedButton = 'Modulo ' + module"
              class="bg-black text-white text-sm py-2 px-5 rounded-tr-lg hover:bg-black/90 border-2"
              [ngClass]="{
                'border-[#FD6A00]': selectedButton === 'Modulo ' + module
              }"
            >
              Módulo {{ module }}
            </button>
          </div>
          }
          <div>
            <button
              (click)="selectedButton = 'Evaluaciones'"
              class="min-w-24 bg-black text-white text-sm py-2 px-5 rounded-tr-lg hover:bg-black/90 border-2"
              [ngClass]="{
                'border-[#FD6A00]': selectedButton === 'Evaluaciones'
              }"
            >
              Evaluaciones
            </button>
          </div>
        </div>
      </section>

      <section>
        <div class="relative mt-10 mb-5">
          <img class="w-80 h-auto" src="title-layout.png" alt="Docente" />
          <h1 class="absolute top-2 left-16 text-white font-semibold">
            Docente
          </h1>
        </div>
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
              src="https://res.cloudinary.com/ddcs9xxid/image/upload/v1720913496/user-2d96b93a-f81b-40bb-8d58-ee982bb02ed5.jpg"
              alt="Perfil del Docente"
            />
            <div class="flex flex-col gap-y-2">
              <h3 class="text-lg font-bold">Kiyotaka Ayanokouji</h3>
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
            ¡Hola a todos! Soy <strong>Kiyotaka Ayanokouji</strong>, y seré su
            instructor para este curso. Estoy emocionado de acompañarlos en este
            viaje de aprendizaje sobre redes de computadoras. Juntos
            exploraremos el fascinante mundo de las redes, desde lo básico hasta
            configuraciones avanzadas.
            <strong>¡Bienvenidos y mucho éxito!</strong>
          </div>
        </div>
      </section>

      <section>
        <div class="relative mt-10">
          <img
            class="w-80 h-auto"
            src="title-layout.png"
            alt="Información del curso"
          />
          <h1 class="absolute top-2 left-16 text-white font-semibold">
            Información del curso
          </h1>
        </div>
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
      <section>
        <div class="relative mt-10">
          <img
            class="w-80 h-auto"
            src="title-layout.png"
            alt="Información del curso"
          />
          <h1 class="absolute top-2 left-16 text-white font-semibold">
            Recursos de Apoyo
          </h1>
        </div>
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
    </main>
    <app-footer />
  `,
})
export class CourseLayoutComponent {
  selectedButton = 'Inicio';
  modules = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
