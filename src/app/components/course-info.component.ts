import { Component, input } from '@angular/core';
import { CustomButtonComponent } from './custom-button.component';
import { ProgressBarComponent } from './progressbar.component';

@Component({
  selector: 'app-courseinfo-component',
  imports: [CustomButtonComponent, ProgressBarComponent],
  template: `
    <article class="w-[275px] rounded-lg shadow-md shadow-black/50">
      <a class="relative" href="/mis-cursos/{{ id() }}">
        <img
          class="h-32 w-full rounded-t-lg object-cover"
          [src]="src()"
          [alt]="title()"
        />
        @if (newCourse()) {
          <span
            class="bg-greenlight absolute top-2 left-2 rounded-lg px-2 py-0.5 text-xs text-white"
          >
            Nuevo
          </span>
        }
      </a>

      <div class="flex flex-col gap-1 rounded-b-lg bg-black px-4 py-3">
        <h3 class="text-sm font-bold text-white">{{ title() }}</h3>
        <div class="flex gap-2">
          <img
            class="size-3"
            src="/icons/courses/teacher.svg"
            alt="Icono de Profesor"
          />
          <span class="text-xs font-light text-white"
            >Prof. {{ teacher() }}</span
          >
        </div>
        <div class="mt-2 flex flex-col gap-1">
          @if (!progress()) {
            <app-button-component
              color="orange"
              text="Más Información"
              moreStyles="text-xs h-8 mx-auto"
            />
          } @else if (progress() < 100) {
            <app-progressbar-component [progress]="progress()" />
            <h4 class="text-end text-xs font-extralight text-white">
              {{ progress() }}% Completado
            </h4>
          } @else {
            <span class="text-xs font-extralight text-white">
              100% Completado
            </span>
          }
        </div>
      </div>
    </article>
  `,
})
export class CourseInfoComponent {
  readonly title = input.required<string>();
  readonly teacher = input.required<string>();
  readonly src = input.required<string>();
  readonly id = input.required<string>();
  readonly progress = input<number>(0);
  readonly newCourse = input<boolean>();
}
