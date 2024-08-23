import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  template: `
    <div
      class="items-center flex py-1 pr-1 rounded-lg cursor-pointer w-3/4 {{
        answerSelected == answerLetter
          ? 'bg-greenlight'
          : 'bg-quinary hover:bg-greenlight/50'
      }}"
    >
      <strong class="px-2">{{ answerLetter }}</strong>
      <div class="w-full rounded-lg bg-white p-2">
        <span class="select-none">{{ answerText }}</span>
      </div>
    </div>
  `,
})
export class QuestionsComponent {
  constructor() {}

  @Input() answerSelected!: string;
  @Input() answerLetter!: string;
  @Input() answerText!: string;
}
