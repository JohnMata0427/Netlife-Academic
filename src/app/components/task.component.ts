import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <a href="/mis-cursos" class="flex gap-x-4">
      <div class="relative">
        <div
          class="bg-[#F50009] vertical-lr text-white font-bold text-xl rounded pt-1 pb-3"
        >
          JUL
        </div>
        <div
          class="bg-black text-white absolute -bottom-0 -left-1 rounded-full px-2 py-1.5 font-bold min-w-9 text-center"
        >
          20
        </div>
      </div>
      <div
        class="h-28 w-96 pl-6 flex flex-col justify-center gap-y-2 rounded-lg shadow-sm shadow-black/40 bg-zinc-300/50"
      >
        <h3 class="text-sm"><strong>Tarea: </strong> {{ nombre }}</h3>
        <div class="flex items-center gap-x-2">
          <img src="/icons/courses/time.svg" alt="Icono hora de entrega" />
          <span class="text-xs">11:59 PM</span>
        </div>
      </div>
    </a>
  `,
})
export class CustomButtonComponent {
  @Input() nombre!: string;
}
