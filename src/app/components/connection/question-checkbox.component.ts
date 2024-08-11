import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question-checkbox',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="gap-4 flex flex-col">
      <div class="flex gap-4 items-center">
        <input
          class="size-4 accent-greenlight"
          id="{{ answer }}"
          name="{{ answer }}"
          type="checkbox"
        />
        <label class="select-none" for="{{ answer }}">{{
          question
        }}</label>
      </div>
    </div>
  `,
})
export class QuestionsCheckboxComponent {
  constructor() {}

  @Input() question!: string;
  @Input() answer!: string;
}
