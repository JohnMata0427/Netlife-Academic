import { Component, Input } from '@angular/core';

type Question = {
  question: string,
  answers: string[]
}

@Component({
  selector: 'app-checkbox-question',
  standalone: true,
  template: `
    <div class="flex items-center gap-4">
      @for (answer of question.answers; track $index) {
        <input
        class="size-4 accent-greenlight"
        [id]="answer"
        [name]="userAnswer"
        type="checkbox"
        />
        <label class="select-none" [htmlFor]="userAnswer">{{ answer }}</label>
      }
    </div>
  `,
})
export class QuestionsCheckboxComponent {
  @Input() question!: Question
  @Input() userAnswer!: string
}
