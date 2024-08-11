import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-questions-select',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex items-center gap-x-4">
      <strong>{{ question }}</strong>
      <div (click)="showOptions = !showOptions" class="relative w-3/4">
        <div
          [ngClass]="{
            'border-[#72C234]': showOptions,
            'border-zinc-300': !showOptions
          }"
          class="flex justify-between w-full border-4 rounded-lg border-[#72C234] min-h-12 items-center cursor-pointer hover:border-[#C5EAA9]"
        >
          <span class="ml-2 select-none">
            {{ answerSelected }}
          </span>
          <svg
            class="w-3 mr-2"
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
          class="border border-[#F2F2F2] bg-[#F2F2F2] rounded-lg absolute w-full z-20"
          [ngClass]="{ hidden: !showOptions, '': showOptions }"
        >
          <ol class="flex flex-col *:pl-5 *:py-2 rounded-lg">
            @for (answer of answers; track $index) {
            <li
              class="hover:bg-zinc-300 select-none"
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
