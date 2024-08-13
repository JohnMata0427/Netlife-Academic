import { Component } from '@angular/core';
import { UserLayout } from '../layouts/user-layout.component';
import { CustomTitleComponent } from '../components/custom-title.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: `app-virtual-course`,
  standalone: true,
  imports: [NgStyle, UserLayout, CustomTitleComponent],
  template: `
    <app-user-layout>
      <div class="bg-black flex py-10 px-16 justify-center flex-col md:flex-row">
        <div class="md:w-1/2 flex justify-center items-center">
          <img class="rounded-lg " src="/courses/ia.png" alt="" />
        </div>
        <div class="md:w-1/2 flex flex-col md:pl-16">
          <h1 class="text-white font-extrabold text-4xl md:text-start text-center  mt-8 md:mt-0">
            INTELIGENCIA ARTIFICIAL
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
              >Prof. Vanessa Guevara</span
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
              >Duración de 8 horas</span
            >
          </div>
        </div>
      </div>

      <section class="flex items-center justify-center gap-4 mt-8">
        <div class="w-5/6 bg-quinary h-5 rounded">
          <div
            [ngStyle]="{ 'width.%': '90' }"
            class="bg-gradient-to-r from-secondary via-tertiary to-quaternary rounded-l h-full"
          ></div>
        </div>
        <h4 class="text-sm">90% Progreso</h4>
      </section>

      <section>
        <app-custom-title [title]="'Información del Curso'" />
        <div class="flex justify-center gap-8 my-10 flex-wrap">
          <div
            class="w-96 min-h-60 bg-quinary shadow-md shadow-black/50 rounded-lg"
          >
            <div
              class="flex items-center justify-center w-36 h-8 bg-black rounded-br-xl rounded-tl-lg"
            >
              <h3 class="text-white text-xs font-light italic">Objetivos</h3>
            </div>
            <p class="text-sm p-3 my-auto">
              Comprender los conceptos fundamentales de la inteligencia
              artificial y su aplicación en la resolución de problemas del mundo
              real.
            </p>
          </div>
          <div
            class="w-96 min-h-60 bg-quinary shadow-md shadow-black/50 rounded-lg"
          >
            <div
              class="flex items-center justify-center w-36 h-8 bg-black rounded-br-xl rounded-tl-lg"
            >
              <h3 class="text-white text-xs font-light italic">Destrezas</h3>
            </div>
            <p class="text-sm p-3">
              Desarrollar la habilidad de identificar y analizar algoritmos de
              inteligencia artificial aplicados en diferentes contextos.
              <br />
              Aplicar técnicas básicas de machine learning para resolver
              problemas específicos.
            </p>
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
            <p class="text-sm p-3">
              Mantener una actitud abierta y curiosa para explorar nuevas
              tecnologías y conceptos en inteligencia artificial.
              <br />
              Fomentar la reflexión ética sobre el impacto de la inteligencia
              artificial en la sociedad, considerando aspectos como la
              privacidad, la equidad y la responsabilidad social.
            </p>
          </div>
        </div>


      </section>
      <section class="mb-10">
        <app-custom-title [title]="'Contenido del Curso'" />
        <div class="flex gap-8 mx-16 items-start flex-col-reverse lg:flex-row ">
          <div
            class="bg-quinary shadow-sm shadow-black/80 p-4 flex flex-col gap-10 lg:w-[65.5%] w-full rounded-lg"
          >
            <details open>
              <summary class="font-bold">1. Fundamentos</summary>
              <ul class="flex flex-col gap-2 mt-4 ml-4">
                <li class="flex justify-between">
                  <div class="flex gap-2">
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 15"
                    >
                      <path
                        class="fill-greenlight"
                        d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                      />
                      <path
                        class="stroke-greenlight"
                        stroke-miterlimit="10"
                        d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                      />
                    </svg>
                    <a
                      class="text-greenlight text-sm"
                      href="/mis-cursos/virtual/video"
                      >1.1 Bienvenida del curso</a
                    >
                  </div>
                  <strong class="text-gray-500 text-sm">00:10 min</strong>
                </li>
                <li class="flex justify-between">
                  <div class="flex gap-2">
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 15"
                    >
                      <path
                        class="fill-black"
                        d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                      />
                      <path
                        class="stroke-black"
                        stroke-miterlimit="10"
                        d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                      />
                    </svg>
                    <a class="text-sm" href="/mis-cursos/virtual/video"
                      >1.2 Historia y evolución de la IA</a
                    >
                  </div>
                  <strong class="text-gray-500 text-sm">00:10 min</strong>
                </li>
                <li class="flex justify-between">
                  <div class="flex gap-2">
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 15"
                    >
                      <path
                        class="fill-black"
                        d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                      />
                      <path
                        class="stroke-black"
                        stroke-miterlimit="10"
                        d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                      />
                    </svg>
                    <a class="text-sm" href="/mis-cursos/virtual/video"
                      >1.3 Algoritmos y técnicas básicas</a
                    >
                  </div>
                  <strong class="text-gray-500 text-sm">00:10 min</strong>
                </li>
                <li class="flex justify-between">
                  <div class="flex gap-2">
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 15"
                    >
                      <path
                        class="fill-black"
                        d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                      />
                      <path
                        class="stroke-black"
                        stroke-miterlimit="10"
                        d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                      />
                    </svg>
                    <a class="text-sm" href="/mis-cursos/virtual/video"
                      >1.4 Representación y conocimiento</a
                    >
                  </div>
                  <strong class="text-gray-500 text-sm">00:10 min</strong>
                </li>
              </ul>
            </details>
            <details>
              <summary class="font-bold">2. Aprendizaje automático</summary>
            </details>
            <details>
              <summary class="font-bold">
                3. Procesamiento de lenguaje natural
              </summary>
            </details>
            <details>
              <summary class="font-bold">4. Visión por computadora</summary>
            </details>
          </div>

          <aside class="lg:w-[30%] flex lg:flex-col flex-col gap-4 md:flex-row">
            <article
              class="bg-black rounded-lg p-7 flex flex-col items-center gap-4 relative "
            >
              <svg
                class="size-12 absolute top-4 left-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 61 60"
              >
                <path
                  fill="#fff"
                  d="M0 10A10 10 0 0 1 10 0h51L14.3 6.5a10 10 0 0 0-8.6 8.7L0 60V10Z"
                />
              </svg>
              <svg
                class="size-12 absolute bottom-4 right-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 56 66"
              >
                <path
                  fill="#fff"
                  d="M55.2 55a10 10 0 0 1-10 10l-45 .3L41.7 58a10 10 0 0 0 8.3-8.8L55 0l.2 55Z"
                />
              </svg>

              <h3 class="text-white font-bold text-center">Vanessa Guevara</h3>
              <div class="flex gap-4 md:flex-col md:items-center">
                <img
                  class="size-16 rounded-full"
                  src="/profile.webp"
                  alt="Imagen del profesor"
                />
                <div>
                  <ol
                    class="text-white *:flex *:gap-2 text-sm flex flex-col gap-2"
                  >
                    <li>
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 15"
                      >
                        <path
                          fill="#fff"
                          d="M10 11.6 3.8 8.3v3.5L10 15l6.2-3.2V8.3L10 11.6Z"
                        />
                        <path
                          fill="#fff"
                          d="M20 5.2 10 0 0 5.2l10 5.2 8.1-4.2v5.9H20V5.2Z"
                        />
                      </svg>
                      <span>Ing. Telecomunicaciones</span>
                    </li>
                    <li>
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 15"
                      >
                        <path
                          fill="#fff"
                          d="M17.5 0h-15C1.8 0 1.2.3.7.7c-.4.4-.7 1-.7 1.7v10.2c0 .6.3 1.3.7 1.7.5.4 1.1.7 1.8.7h15c.7 0 1.3-.3 1.8-.7.4-.4.7-1 .7-1.7V2.4c0-.6-.3-1.3-.7-1.7-.5-.4-1.1-.7-1.8-.7Zm-.6 4-6.5 4.7a.7.7 0 0 1-.8 0L3 4a.7.7 0 0 1-.2-.4A.7.7 0 0 1 3 3a.7.7 0 0 1 .5-.3.7.7 0 0 1 .5.2l6 4.4L16 3a.7.7 0 0 1 1 .1.7.7 0 0 1-.1 1Z"
                        />
                      </svg>
                      <span>{{ 'vanessa.guevara@netlife.com' }}</span>
                    </li>
                    <li>
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="#fff"
                          d="M15 11.3a22.6 22.6 0 0 0-4.3-2.7l-1.1.9c-.2.2-.2.2-.4.1a7.4 7.4 0 0 1-3.8-3.8l.1-.4a42.5 42.5 0 0 0 1-1.2 22.6 22.6 0 0 0-3-4.2A10.8 10.8 0 0 0 0 2v.1a16.8 16.8 0 0 0 4.8 8A17.3 17.3 0 0 0 13 15a11.3 11.3 0 0 0 2-3.6Z"
                        />
                      </svg>
                      <span> 0999727826 </span>
                    </li>
                  </ol>
                </div>
              </div>
            </article>
            <div 
              class="bg-orangelight p-4 text-sm rounded-lg shadow-sm shadow-black/50 flex items-center"
            > 
            <p>
              ¡Hola a todos! Soy <strong>Vanessa Guevara</strong>, y seré su
              instructora para este curso. Estoy emocionada de acompañarlos en
              este viaje de aprendizaje sobre los fundamentos de la inteligencia
              artificial. Juntos exploraremos el fascinante mundo de las redes,
              desde lo básico hasta configuraciones avanzadas.
              <strong>¡Bienvenidos y mucho éxito!</strong>
            </p>
            </div>
          </aside>
        </div>
      </section>
    </app-user-layout>
  `,
})
export class VirtualCourseComponent {
  constructor() {}
}
