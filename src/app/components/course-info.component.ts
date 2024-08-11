import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [NgStyle],
  template: `
    <article class="w-64 shadow-md shadow-black/50 rounded-lg">
      <a href="/mis-cursos/{{ id }}">
        <img
          class="h-32 w-full rounded-t-lg"
          src="{{ src }}"
          alt="{{ title }}"
        />
      </a>

      <div class="bg-black rounded-b-lg px-4 py-3 flex flex-col gap-y-1">
        <h3 class="text-white text-sm font-bold">{{ title }}</h3>
        <div class="flex items-center gap-x-2">
          <img
            class="size-3"
            src="/icons/courses/teacher.svg"
            alt="Icono de Profesor"
          />
          <span class="text-white text-xs font-light">Prof. {{ teacher }}</span>
        </div>
        <div class="flex flex-col gap-y-1 mt-2">
          <div class="w-full bg-zinc-300 h-2.5 rounded border border-white">
            <div
              [ngStyle]="{'width.%': progress}"
              class="bg-gradient-to-r from-[#FEE500] via-[#F0000B] to-[#4C1B53] rounded-l h-full"
            ></div>
            
          </div>
          <h4 class="text-xs text-white font-extralight text-end">
            {{ progress }}% Completado
          </h4>
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
  @Input() progress!: string;
}
