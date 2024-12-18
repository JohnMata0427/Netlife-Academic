import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boolean-question',
  template: `
    <div class="flex flex-col gap-2">
      <div class="flex gap-4">
        <input
          class="accent-greenlight"
          type="radio"
          id="true"
          name="answer"
          [value]="answerSelected()"
        />
        <label class="select-none" for="true">Verdadero</label>
      </div>
      <div class="flex gap-4">
        <input
          class="accent-greenlight"
          type="radio"
          id="false"
          name="answer"
          [value]="answerSelected()"
        /><label class="select-none" for="false">Falso</label>
      </div>
    </div>
  `,
})
export class QuestionsBooleanComponent {
  readonly answerSelected = input.required<string>();
}
