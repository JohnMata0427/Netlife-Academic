import { Component, input } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  template: `
    <div class="flex items-center gap-4">
        <input
        class="size-4 accent-greenlight"
        [id]="answer()"
        [name]="answer()"
        type="checkbox"
        />
        <label class="select-none" [htmlFor]="answer()">{{ answer() }}</label>
    </div>
  `,
})
export class QuestionsCheckboxComponent {
  readonly question = input.required<string>();
  readonly answer = input.required<string>();
}