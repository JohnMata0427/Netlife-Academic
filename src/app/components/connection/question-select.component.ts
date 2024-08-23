import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-select',
  standalone: true,
  template: `
    <div class="flex gap-4">
      <strong>{{ question }}</strong>
      <div (click)="showOptions = !showOptions" class="relative w-3/4">
        <div
          class="flex justify-between w-full border-4 rounded-lg border-greenlight min-h-12 items-center cursor-pointer hover:border-greenlight/50 {{
            showOptions ? 'border-greenlight' : 'border-quinary'
          }}"
        >
          <span class="ml-2 select-none">
            {{ answerSelected }}
          </span>
          <svg
            class="mr-2 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 13 7"
          >
            <path
              fill="#000"
              d="m.23 1.31 5.55 5.41c.09.09.2.16.32.2a1.11 1.11 0 0 0 .8 0 .96.96 0 0 0 .32-.2l5.55-5.4C13.3.8 12.86 0 12.05 0H.95C.14 0-.3.8.23 1.31Z"
            />
          </svg>
        </div>

        <div
          class="border border-quinary bg-quinary rounded-lg absolute w-full z-20 {{
            showOptions ? '' : 'hidden'
          }}"
        >
          <ol class="flex flex-col rounded-lg *:py-2 *:pl-5">
            @for (answer of answers; track $index) {
              <li
                class="select-none hover:bg-quinary"
                (click)="answerSelected = answer"
              >
                {{ answer }}
              </li>
            }
          </ol>
        </div>
      </div>
    </div>
  `,
})
export class QuestionsSelectComponent {
  constructor() {}
  showOptions = false;

  @Input() answers!: string[];
  @Input() answerSelected!: string;
  @Input() question!: string;
}
