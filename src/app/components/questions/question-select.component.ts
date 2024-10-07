import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-select-question',
  standalone: true,
  template: `
    <div class="flex gap-4">
      <strong>{{ question }}</strong>
      <div (click)="showOptions = !showOptions" class="relative w-3/4">
        <div
          class="flex justify-between w-full border-4 rounded-lg border-greenlight min-h-12 items-center cursor-pointer {{
            showOptions
              ? 'border-greenlight'
              : 'border-quinary hover:border-greenlight/50'
          }}"
        >
          <span class="ml-2 select-none">
            {{ answerSelected }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="mr-2 w-3"
            viewBox="0 0 13 7"
          >
            <path
              fill="#000"
              d="m.2 1.3 5.6 5.4.3.2a1.1 1.1 0 0 0 .8 0 1 1 0 0 0 .3-.2l5.6-5.4c.5-.5 0-1.3-.8-1.3H1C0 0-.4.8.1 1.3Z"
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
                class="cursor-pointer select-none hover:bg-greenlight/50"
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
  showOptions = false;

  @Input() answers!: string[];
  @Input() answerSelected!: string;
  @Input() question!: string;

  @HostListener('document:click', ['$event'])
  onDocumentClick({ target }: MouseEvent) {
    if (target instanceof HTMLElement && !target.closest('app-select-question'))
      this.showOptions = false;
  }
}
