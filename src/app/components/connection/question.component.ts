import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="items-center flex py-1 pr-1 rounded-lg">
      <strong class="px-2">A</strong>
      <div class="rounded-lg bg-white p-2 w-full">
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
  `,
})
export class QuestionsComponent {
  constructor() {}

  // [ngClass]="{
  //   'bg-[#72C234]': opcionSeleccionada == 1,
  //   'hover:bg-[#010101] bg-zinc-300': opcionSeleccionada != 1
  // }"
}
