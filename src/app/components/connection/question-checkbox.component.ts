import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-checkbox',
  standalone: true,
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <input
          class="size-4 accent-greenlight"
          id="{{ answer }}"
          name="{{ answer }}"
          type="checkbox"
        />
        <label class="select-none" for="{{ answer }}">{{ question }}</label>
      </div>
    </div>
  `,
})
export class QuestionsCheckboxComponent {
  @Input() question!: string;
  @Input() answer!: string;
}
