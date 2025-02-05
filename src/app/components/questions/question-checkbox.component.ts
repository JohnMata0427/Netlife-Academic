import { Component, input } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  template: `
    <div class="flex items-center gap-4">
      <input
        class="accent-greenlight size-4"
        type="checkbox"
        [name]="answer()"
        [id]="answer()"
      />
      <label class="select-none" [htmlFor]="answer()">{{ answer() }}</label>
    </div>
  `,
})
export class QuestionsCheckboxComponent {
  readonly question = input.required<string>();
  readonly answer = input.required<string>();
}
