import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  template: `
    <a href="/mis-cursos" class="flex gap-4">
      <div class="relative">
        <div
          class="bg-tertiary vertical-lr text-white font-bold text-xl rounded-lg pt-1 pb-3 uppercase"
        >
          {{ fecha.mes.substring(0, 3) }}
        </div>
        <div
          class="bg-black text-white absolute -bottom-0 -left-1 rounded-full px-2 py-1.5 font-bold min-w-9 text-center"
        >
          {{ fecha.dia }}
        </div>
      </div>
      <div
        class="h-28 w-96 pl-6 flex flex-col justify-center gap-2 rounded-lg shadow-sm shadow-black/40 bg-quinary"
      >
        <h3 class="text-sm"><strong>Tarea: </strong> {{ nombre }}</h3>
        <div class="flex gap-2">
          <img class="size-4" src="/icons/courses/time.svg" alt="Icono hora de entrega" />
          <span class="text-xs">{{ hora }}</span>
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
  @Input() nombre!: string;
  @Input() fecha!: {
    dia: string;
    mes: string;
  };
  @Input() hora!: string;
}
