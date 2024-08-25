import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from "./custom-button.component";

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [NgStyle, CustomButtonComponent],
  template: `
    <article class="w-[275px] rounded-lg shadow-md shadow-black/50">
      <a class="relative" href="/mis-cursos/{{ id }}">
        <img
          class="h-32 w-full rounded-t-lg object-cover"
          src="{{ src }}"
          alt="{{ title }}"
        />
        @if (newc) {
          <span
            class="absolute left-2 top-2 rounded-lg bg-greenlight px-2 py-0.5 text-xs text-white"
          >
            Nuevo
          </span>
        }
      </a>

      <div class="flex flex-col gap-1 rounded-b-lg bg-black px-4 py-3">
        <h3 class="text-sm font-bold text-white">{{ title }}</h3>
        <div class="flex gap-2">
          <img
            class="size-3"
            src="/icons/courses/teacher.svg"
            alt="Icono de Profesor"
          />
          <span class="text-xs font-light text-white">Prof. {{ teacher }}</span>
        </div>
        <div class="mt-2 flex flex-col gap-1">
          @if (!progress) {
            <app-custom-button
              color="orange"
              text="Más Información"
              moreStyles="text-xs h-8 mx-auto"
            />
          } @else if (progress < 100) {
            <div class="h-2.5 w-full rounded-lg border border-white bg-quinary">
              <div
                [ngStyle]="{ 'width.%': progress }"
                class="h-full rounded-l bg-gradient-to-r from-secondary via-tertiary to-quaternary"
              ></div>
            </div>
            <h4 class="text-end text-xs font-extralight text-white">
              {{ progress }}% Completado
            </h4>
          } @else {
            <span class="text-xs font-extralight text-white"> 100% Completado</span>
          }
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class CourseInfoComponent {
  constructor() {}

  @Input() title!: string;
  @Input() teacher!: string;
  @Input() src!: string;
  @Input() id!: string;
  @Input() progress!: number;
  @Input() newc!: boolean;
}
