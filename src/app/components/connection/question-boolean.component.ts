import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question-boolean',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex flex-col gap-y-2">
      <div class="flex gap-x-4">
        <input
          class="accent-[#72C234]"
          type="radio"
          id="true"
          name="answer"
          value="{{answerSelected}}"
        />
        <label class="select-none" for="true">Verdadero</label>
      </div>
      <div class="flex gap-x-4">
        <input
          class="accent-[#72C234]"
          type="radio"
          id="false"
          name="answer"
          value="{{answerSelected}}"
        /><label class="select-none" for="false">Falso</label>
      </div>
    </div>
  `,
})
export class QuestionsBooleanComponent {
  constructor() {}

  @Input() answerSelected!: string;
}