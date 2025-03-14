import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-component',
  template: `
    <a class="flex gap-4" href="/mis-cursos">
      <div class="relative">
        <div
          class="vertical-lr bg-tertiary rounded-lg pt-1 pb-3 text-xl font-bold text-white uppercase"
        >
          {{ fecha().mes.substring(0, 3) }}
        </div>
        <div
          class="absolute -bottom-0 -left-1 min-w-9 rounded-full bg-black px-2 py-1.5 text-center font-bold text-white"
        >
          {{ fecha().dia }}
        </div>
      </div>
      <div
        class="bg-quinary flex h-28 w-96 flex-col justify-center gap-2 rounded-lg pl-6 shadow-sm shadow-black/40"
      >
        <h3 class="text-sm"><strong>Tarea: </strong>{{ nombre() }}</h3>
        <div class="flex gap-2">
          <img
            class="size-4"
            src="/icons/courses/time.svg"
            alt="Icono hora de entrega"
          />
          <span class="text-xs">{{ hora() }}</span>
        </div>
      </div>
    </a>
  `,
  styles: `
    .vertical-lr {
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
  `,
})
export class TaskComponent {
  readonly nombre = input.required<string>();
  readonly fecha = input.required<{
    dia: string;
    mes: string;
  }>();
  readonly hora = input.required<string>();
}
