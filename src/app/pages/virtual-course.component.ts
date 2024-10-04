import { Component } from '@angular/core';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: `app-virtual-course`,
  standalone: true,
  imports: [NgStyle, UserLayout, CustomTitleComponent],
  template: `
    <app-user-layout>
      <div
        class="flex flex-col justify-center bg-black px-16 py-10 md:flex-row"
      >
        <div class="flex items-center justify-center md:w-1/2">
          <img class="rounded-lg" src="/courses/ia.png" alt="" />
        </div>
        <div class="flex flex-col md:w-1/2 md:pl-16">
          <h1
            class="mt-8 text-center text-4xl font-extrabold text-white md:mt-0 md:text-start"
          >
            INTELIGENCIA ARTIFICIAL
          </h1>
          <div
            class="my-4 w-32 rounded-lg bg-greenlight px-4 py-1.5 text-center text-sm font-bold text-neutral-800"
          >
            En progreso
          </div>
          <p class="w-11/12 text-sm font-extralight text-white">
            Este curso ofrece una introducción integral a los fundamentos de las
            redes de computadoras. A lo largo del curso, los estudiantes
            aprenderán sobre la arquitectura, componentes y operaciones de redes
            de datos.
          </p>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/teacher.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Prof. Vanessa Guevara</span
            >
          </div>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Publicado el 10 de junio del 2024</span
            >
          </div>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Duración de 8 horas</span
            >
          </div>
        </div>
      </div>

      <section class="mt-8 flex items-center justify-center gap-4">
        <div class="h-5 w-5/6 rounded bg-quinary">
          <div
            [ngStyle]="{ 'width.%': '90' }"
            class="h-full rounded-l bg-gradient-to-r from-secondary via-tertiary to-quaternary"
          ></div>
        </div>
        <h4 class="text-sm">90% Progreso</h4>
      </section>

      <section>
        <app-custom-title title="Información del Curso" />
        <div class="my-10 flex flex-wrap justify-center gap-8">
          <div
            class="min-h-60 w-96 rounded-lg bg-quinary shadow-md shadow-black/50"
          >
            <div
              class="flex h-8 w-36 items-center justify-center rounded-br-xl rounded-tl-lg bg-black"
            >
              <h3 class="text-xs font-light italic text-white">Objetivos</h3>
            </div>
            <p class="my-auto p-3 text-sm">
              Comprender los conceptos fundamentales de la inteligencia
              artificial y su aplicación en la resolución de problemas del mundo
              real.
            </p>
          </div>
          <div
            class="min-h-60 w-96 rounded-lg bg-quinary shadow-md shadow-black/50"
          >
            <div
              class="flex h-8 w-36 items-center justify-center rounded-br-xl rounded-tl-lg bg-black"
            >
              <h3 class="text-xs font-light italic text-white">Destrezas</h3>
            </div>
            <p class="p-3 text-sm">
              Desarrollar la habilidad de identificar y analizar algoritmos de
              inteligencia artificial aplicados en diferentes contextos.
              <br />
              Aplicar técnicas básicas de machine learning para resolver
              problemas específicos.
            </p>
          </div>
          <div
            class="min-h-60 w-96 rounded-lg bg-quinary shadow-md shadow-black/50"
          >
            <div
              class="flex h-8 w-36 items-center justify-center rounded-br-xl rounded-tl-lg bg-black"
            >
              <h3 class="text-xs font-light italic text-white">
                Valores y Actitudes
              </h3>
            </div>
            <p class="p-3 text-sm">
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
        <app-custom-title title="Contenido del Curso" />
        <div class="mx-16 flex flex-col-reverse items-start gap-8 lg:flex-row">
          <div
            class="flex w-full flex-col gap-10 rounded-lg bg-quinary p-4 shadow-sm shadow-black/80 lg:w-[65.5%]"
          >
            <details open>
              <summary class="font-bold">1. Fundamentos</summary>
              <ul class="ml-4 mt-4 flex flex-col gap-2">
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
                      class="text-sm text-greenlight"
                      href="/mis-cursos/virtual/video"
                      >1.1 Bienvenida del curso</a
                    >
                  </div>
                  <strong class="text-sm text-gray-500">00:10 min</strong>
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
                  <strong class="text-sm text-gray-500">00:10 min</strong>
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
                  <strong class="text-sm text-gray-500">00:10 min</strong>
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
                  <strong class="text-sm text-gray-500">00:10 min</strong>
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

          <aside class="flex flex-col gap-4 md:flex-row lg:w-[30%] lg:flex-col">
            <article
              class="relative flex flex-col items-center gap-4 rounded-lg bg-black p-7"
            >
              <svg
                class="absolute left-4 top-4 size-12"
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
                class="absolute bottom-4 right-4 size-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 56 66"
              >
                <path
                  fill="#fff"
                  d="M55.2 55a10 10 0 0 1-10 10l-45 .3L41.7 58a10 10 0 0 0 8.3-8.8L55 0l.2 55Z"
                />
              </svg>

              <h3 class="text-center font-bold text-white">Vanessa Guevara</h3>
              <div class="flex gap-4 md:flex-col md:items-center">
                <img
                  class="size-16 rounded-full"
                  src="/profile.webp"
                  alt="Imagen del profesor"
                />
                <div>
                  <ol
                    class="flex flex-col gap-2 text-sm text-white *:flex *:gap-2"
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
              class="flex items-center rounded-lg bg-orangelight p-4 text-sm shadow-sm shadow-black/50"
            >
              <p>
                ¡Hola a todos! Soy <strong>Vanessa Guevara</strong>, y seré su
                instructora para este curso. Estoy emocionada de acompañarlos en
                este viaje de aprendizaje sobre los fundamentos de la
                inteligencia artificial. Juntos exploraremos el fascinante mundo
                de las redes, desde lo básico hasta configuraciones avanzadas.
                <strong>¡Bienvenidos y mucho éxito!</strong>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </app-user-layout>
  `,
})
export class VirtualCourseComponent {}
