import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '@components/custom-button.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { UserLayout } from '@layouts/user-layout.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgStyle, CustomButtonComponent, CustomTitleComponent, UserLayout],
  template: `
    <app-user-layout>
      <div class="bg-black flex py-10 px-16 justify-center md:flex-row flex-col">
        <div class="md:w-1/2 flex justify-center items-center">
          <img class="rounded-lg " src="/courses/redes.jpg" alt="" />
        </div>
        <div class="md:w-1/2 flex flex-col md:pl-16 mt-8">
          <h1 class="text-center sm:text-start text-white font-extrabold text-4xl">
            REDES DE COMPUTADORAS
          </h1>
          <div
            class="text-neutral-800 text-center font-bold text-sm rounded-lg py-1.5 w-32 my-4 px-4 bg-greenlight"
          >
            En progreso
          </div>
          <p class="w-11/12 text-white text-sm font-extralight">
            Este curso ofrece una introducción integral a los fundamentos de las
            redes de computadoras. A lo largo del curso, los estudiantes
            aprenderán sobre la arquitectura, componentes y operaciones de redes
            de datos.
          </p>
          <div class="flex gap-2 items-center mt-4">
            <img
              class="size-4"
              src="/icons/courses/teacher.svg"
              alt="Icono del Profesor"
            />
            <span class="text-white text-sm font-medium"
              >Prof. Monica Jimenez</span
            >
          </div>
          <div class="flex gap-2 items-center mt-4">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-white text-sm font-medium"
              >Publicado el 10 de junio del 2024</span
            >
          </div>
          <div class="flex gap-2 items-center mt-4">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-white text-sm font-medium"
              >Finalizá el 20 de julio del 2024</span
            >
          </div>
        </div>
      </div>

      <section class="flex items-center justify-center gap-4 mt-8">
        <div class="w-5/6 bg-quinary h-5 rounded">
          <div
            [ngStyle]="{ 'width.%': '50' }"
            class="bg-gradient-to-r from-secondary via-tertiary to-quaternary rounded-l h-full"
          ></div>
        </div>
        <h4 class="text-sm">50% Progreso</h4>
      </section>

      <section>
        <app-custom-title [title]="'Contenido del Curso'" />
        <div class="mt-8 flex justify-center gap-1 flex-wrap">
          <app-custom-button
            (click)="selectedButton = 'Inicio'"
            [color]="selectedButton === 'Inicio' ? 'orange' : 'black'"
            [text]="'Inicio'"
          />
          @for (module of modules; track module) {
            <app-custom-button
              (click)="selectedButton = 'Módulo ' + module"
              [color]="
                selectedButton === 'Módulo ' + module ? 'orange' : 'black'
              "
              [text]="'Módulo ' + module"
            />
          }
          <app-custom-button
            (click)="selectedButton = 'Examen'"
            [color]="selectedButton === 'Examen' ? 'orange' : 'black'"
            [text]="'Examenes'"
          />
          <app-custom-button
            (click)="selectedButton = 'Certificado'"
            [color]="selectedButton === 'Certificado' ? 'orange' : 'black'"
            [text]="'Fin del Curso'"
          />
        </div>
      </section>

      @if (selectedButton === 'Inicio') {
        <section>
          <app-custom-title [title]="'Docente del Curso'" />
          <div class="flex gap-10 items-center mx-16">
            <div
              class="relative bg-quinary flex items-center shadow-sm shadow-black/30 rounded-lg p-2 pr-8 gap-4 h-32 w-1/2"
            >
              <img
                class="size-12 absolute top-3 left-3"
                src="/presentation-border-1.svg"
                alt=""
              />
              <img
                class="size-20 rounded-full ml-5"
                src="/profile.webp"
                alt="Perfil del Docente"
              />
              <div class="flex flex-col gap-2">
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
                src="/presentation-border-2.svg"
                alt=""
              />
            </div>
            <div class="bg-orangelight rounded-lg p-4 text-sm w-1/2">
              ¡Hola a todos! Soy <strong>Monica Jimenez</strong>, y seré su
              instructora para este curso. Estoy emocionada de acompañarlos en
              este viaje de aprendizaje sobre redes de computadoras. Juntos
              exploraremos el fascinante mundo de las redes, desde lo básico
              hasta configuraciones avanzadas.
              <strong>¡Bienvenidos y mucho éxito!</strong>
            </div>
          </div>
        </section>

        <section>
          <app-custom-title [title]="'Información del Curso'" />
          <div class="flex justify-center gap-8 my-10">
            <div
              class="w-96 min-h-60 bg-quinary shadow-md shadow-black/50 rounded-lg"
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
                  provident voluptatum ex magni ratione necessitatibus, unde
                  eaque eum quos, architecto quae officiis facere debitis maxime
                  reiciendis?
                </p>
              </div>
            </div>
            <div
              class="w-96 min-h-60 bg-quinary shadow-md shadow-black/50 rounded-lg"
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
              class="w-96 min-h-60 bg-quinary shadow-md shadow-black/50 rounded-lg"
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
                  Adipisci molestiae, laboriosam sed quaerat quasi quae quo
                  harum. Sint labore, ea aperiam libero placeat dolore iste
                  facilis, saepe laborum excepturi eius!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="mb-10">
          <app-custom-title [title]="'Recursos Adicionales'" />
          <div class="flex flex-col pl-16 mt-10 gap-2">
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Documento Adjunto"
              />
              <span class="text-sm">Introducción al curso</span>
            </a>
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Documento Adjunto"
              />
              <span class="text-sm">Introducción al curso</span>
            </a>
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
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
            class="relative ml-16 flex items-center bg-gradient-to-r from-[#aeaeaf] via-[#ceced1] to-white h-24 mt-10"
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
            <h3 class="text-3xl ml-28 font-bold">Examen</h3>
          </div>
        </section>
        <section class="mb-10 flex flex-col">
          <app-custom-title [title]="'Pruebas'" />
          <button
            class="bg-quinary mx-16 h-16 flex justify-between items-center border-l-8 border-primary pl-4"
          >
            <div class="flex gap-4">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Icono del examen"
              />
              <span>Prueba 1: Conceptos básicos de redes </span>
            </div>
            <div class="flex gap-4">
              <app-custom-button
                (click)="
                  router.navigate(['/examen'], {
                    queryParams: { pregunta: '1' },
                  })
                "
                [color]="'orange'"
                [text]="'Resolver'"
                [moreStyles]="'w-40 justify-center'"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="size-7"
                viewBox="0 0 30 32"
              >
                <path
                  d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
                  class="fill-greenlight"
                />
              </svg>
            </div>
          </button>
        </section>
      } @else if (selectedButton === 'Certificado') {
        <app-custom-title [title]="'Tema del Módulo'" />
        <div
          class="relative ml-16 flex items-center bg-gradient-to-r from-[#aeaeaf] via-[#ceced1] to-white h-24 my-10"
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
          <h3 class="text-3xl ml-28 font-bold">Finalización del Curso</h3>
        </div>
        <app-custom-title [title]="'Obtencion del certificado'" />
        <p class="ml-16">
          ¡Felicidades por completar el curso! Ahora,
          <span class="font-bold text-primary">obtén tu certificado</span> y
          demuestra tus nuevas habilidades al mundo.
        </p>

        <button class="flex gap-4 ml-16 mt-4">
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path fill="#000" d="M4.3 0 0 9h19.2l5.3-9H4.2Z" />
            <path
              fill="#000"
              d="m32 8-4.8-8L19 14.2a7.9 7.9 0 0 0-5.5 0l-1.6-2.8H2l6 9.7a9.9 9.9 0 0 0 0 4c.3 1.3 1 2.5 1.7 3.6a8.6 8.6 0 0 0 3 2.4 8 8 0 0 0 7.2 0 8.6 8.6 0 0 0 2.9-2.4 9.4 9.4 0 0 0 1.6-3.6 10 10 0 0 0 .1-4L32 8ZM16.1 27.9c-.9 0-1.8-.3-2.5-.9a5 5 0 0 1-1.7-2.2 5.4 5.4 0 0 1 1-5.5 4.5 4.5 0 0 1 2.3-1.3c1-.2 1.9-.1 2.7.2a4.7 4.7 0 0 1 2 1.9 5.3 5.3 0 0 1-.5 6.3 4.5 4.5 0 0 1-3.2 1.5Z"
            />
            <path
              fill="#000"
              d="M16 25c1.2 0 2.1-.9 2.1-2s-1-2-2.1-2-2.1.9-2.1 2 1 2 2.1 2Z"
            />
          </svg>
          <span class="text-primary font-bold">Certificado del curso</span>
        </button>
        <app-custom-title [title]="'Comentario personal'" />
        <textarea class="h-20 mx-16 rounded-lg w-[90%] bg-quinary"></textarea>
        <app-custom-button
          [color]="'orange'"
          [text]="'Guardar comentario'"
          [moreStyles]="'mx-auto mt-4 mb-10'"
        />
      } @else {
        <app-custom-title [title]="'Tema del módulo'" />
        <div
          class="relative mx-8 sm:mx-16 flex items-center bg-gradient-to-r from-[#aeaeaf] via-[#84858D]/40  to-white h-24 my-10"
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
          <h3 class="text-3xl ml-28 font-bold">Evolución de las redes</h3>
        </div>
        <app-custom-title [title]="'Material del módulo'" />
        <button
          class="rounded-r-lg w-[90%] mb-4 bg-quinary mx-8 sm:mx-16 h-16 flex justify-between items-center border-l-8 border-primary pl-4"
        >
          <div class="flex items-center gap-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Conceptos básicos de redes </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="size-7 mr-4"
            viewBox="0 0 30 32"
          >
            <path
              d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
              class="fill-greenlight"
            />
          </svg>
        </button>
        <button
          class="rounded-r-lg w-[90%] bg-quinary mx-8 sm:mx-16 h-16 flex justify-between items-center border-l-8 border-primary pl-4"
        >
          <div class="flex items-center gap-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Topologías y medios de transmisión</span>
          </div>
          <svg class="size-7 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 34"
          >
            <path
              stroke="#72C234"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M31 16.62C31 8 24.28 1 16 1 7.72 1 1 8 1 16.62s6.72 15.61 15 15.61c8.28 0 15-6.99 15-15.61Z"
            />
            <path
              stroke="#72C234"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m23 10.37-9.8 12.5-4.2-5"
            />
          </svg>
        </button>

        <app-custom-title [title]="'Tareas asignadas'" />
        <button
            class="mb-4 rounded-r-lg w-[90%] bg-quinary mx-8 sm:mx-16 h-16 flex justify-between items-center border-l-8 border-primary pl-4"
          >
            <div class="flex gap-4 items-center">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Icono del examen"
              />
              <span>Tarea 1: Conceptos básicos de redes </span>
            </div>
            <div class="flex items-center gap-4 ">
              <app-custom-button
                (click)="
                  router.navigate(['/examen'], {
                    queryParams: { pregunta: '1' },
                  })
                "
                [color]="'yellow'"
                [text]="'Presentar 15 de agosto'"
                [moreStyles]="'w-40 justify-center text-[#777] text-xs'"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="size-7 mr-4"
                viewBox="0 0 30 32"
              >
                <path
                  d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
                  class="fill-greenlight"
                />
              </svg>
            </div>
          </button>
      }
    </app-user-layout>
  `,
})
export class CourseComponent {
  selectedButton = 'Módulo 1';
  modules = [1, 2, 3, 4, 5, 6, 7];

  constructor(public router: Router) {}
}
