import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex flex-col">
      <div class="flex gap-4 ">
        <input
          class="accent-[#72C234]"
          type="radio"
          id="verdadero"
          name="respuesta"
          value="v"
        />
        <label for="verdadero">Verdadero</label>
      </div>

      <div class="flex gap-4">
        <input
          class="accent-[#72C234]"
          type="radio"
          id="falso"
          name="respuesta"
          value="f"
        /><label for="falso">Falso</label>
      </div>
    </div>
  `,
})
export class QuestionsBooleanComponent {
  constructor() {}
}
