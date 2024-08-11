import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question-checkbox',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="gap-4 flex flex-col">
      <div class="flex gap-4 items-center">
        <input
          class="size-4 accent-[#72C234]"
          id="respuesta-1"
          name="respuesta-1"
          type="checkbox"
        />
        <label for="respuesta-1">Tiene 48 bits (6 bytes) de longitud.</label>
      </div>
    </div>
  `,
})
export class QuestionsComponent {
  constructor() {}
}
