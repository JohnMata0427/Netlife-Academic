import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-questions-select',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      (click)="booleanoRespuesta = !booleanoRespuesta"
      class="relative w-full"
    >
      <div
        class="flex justify-between w-full border-4 rounded-[10px] border-[#72C234] min-h-[48px] items-center"
      >
        <span class="ml-2">
          {{ respuestaSeleccionada }}
        </span>
        <svg
          class="w-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 13 7"
        >
          <path
            fill="#000"
            d="m.23 1.31 5.55 5.41c.09.09.2.16.32.2a1.11 1.11 0 0 0 .8 0 .96.96 0 0 0 .32-.2l5.55-5.4C13.3.8 12.86 0 12.05 0H.95C.14 0-.3.8.23 1.31Z"
          />
        </svg>
      </div>
      <div
        class="border border-[#F2F2F2] bg-[#F2F2F2] rounded-[10px] absolute w-full"
        [ngClass]="{ hidden: !booleanoRespuesta, '': booleanoRespuesta }"
      >
        <ol class="flex flex-col *:pl-5 *:py-2   rounded-[10px] ">
          <li
            class="hover:bg-[#D9D9D9] rounded-t-[10px]"
            (click)="respuestaSeleccionada = 'Saltos'"
          >
            Saltos
          </li>
          <li
            class="hover:bg-[#D9D9D9]"
            (click)="respuestaSeleccionada = 'Ancho de banda'"
          >
            Ancho de banda
          </li>
          <li
            class="hover:bg-[#D9D9D9]"
            (click)="respuestaSeleccionada = 'Retardo'"
          >
            Retardo
          </li>
          <li
            class="hover:bg-[#D9D9D9] rounded-b-[10px]"
            (click)="respuestaSeleccionada = 'Ninguna de las anteriores'"
          >
            Ninguna de las anteriores
          </li>
        </ol>
      </div>
    </div>
  `,
})
export class QuestionsSelectComponent {
  constructor() {}
  respuestaSeleccionada = '';
  booleanoRespuesta = false;
}
