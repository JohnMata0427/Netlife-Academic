import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      [ngClass]="{
        'bg-greenlight': answerSelected == answerLetter,
        'hover:bg-greenlight/50 bg-quinary': answerSelected != answerLetter
      }"
      class="items-center flex py-1 pr-1 rounded-lg cursor-pointer w-3/4"
    >
      <strong class="px-2">{{ answerLetter }}</strong>
      <div class="rounded-lg bg-white p-2 w-full">
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
