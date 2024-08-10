import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="gap-4 flex flex-col">
      <div
        (click)="opcionSeleccionada = 1"
        [ngClass]="{
          'bg-[#72C234]': opcionSeleccionada == 1,
          'hover:bg-[#010101] bg-[#D9D9D9]': opcionSeleccionada != 1
        }"
        class="items-center flex py-1 pr-1 rounded-[10px] "
      >
        <strong class="px-2">A</strong>
        <div class="rounded-[10px] bg-white p-2 w-full">
          <input
            hidden
            type="radio"
            name="question1"
            value="1"
            id="question1-1"
          />
          <label for="question1-1">Saltos</label>
        </div>
      </div>

      <div
        (click)="opcionSeleccionada = 2"
        [ngClass]="{
          'bg-[#72C234]': opcionSeleccionada == 2,
          ' hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 2
        }"
        class="items-center flex   py-1 pr-1  rounded-[10px] "
      >
        <strong class="px-2">B</strong>
        <div class="rounded-[10px] bg-white p-2 w-full">
          <input
            hidden
            type="radio"
            name="question1"
            value="2"
            id="question1-2"
          />
          <label for="question1-2">Ancho de banda</label>
        </div>
      </div>
      <div
        (click)="opcionSeleccionada = 3"
        [ngClass]="{
          'bg-[#72C234]': opcionSeleccionada == 3,
          'hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 3
        }"
        class="items-center flex py-1 pr-1  rounded-[10px] "
      >
        <strong class="px-2">C</strong>
        <div class="rounded-[10px] bg-white p-2 w-full">
          <input
            hidden
            type="radio"
            name="question1"
            value="3"
            id="question1-3"
          />
          <label for="question1-3">Retardo</label>
        </div>
      </div>
      <div
        (click)="opcionSeleccionada = 4"
        [ngClass]="{
          'bg-[#72C234]': opcionSeleccionada == 4,
          'hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 4
        }"
        class="items-center flex   py-1 pr-1  rounded-[10px] "
      >
        <strong class="px-2">D</strong>
        <div class="rounded-[10px] bg-white p-2 w-full">
          <input
            hidden
            type="radio"
            name="question1"
            value="3"
            id="question1-3"
          />
          <label for="question1-3">Ninguna de las anteriores</label>
        </div>
      </div>
    </div>
  `,
})
export class QuestionsComponent {
  constructor() {}

  opcionSeleccionada = 0;
}
