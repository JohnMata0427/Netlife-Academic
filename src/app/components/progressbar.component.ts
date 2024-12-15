import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progressbar-component',
  imports: [NgStyle],
  template: `
    <div class="h-2.5 w-full rounded-lg border border-white bg-quinary">
      <div
        [ngStyle]="{ 'width.%': progress() }"
        class="h-full rounded-l bg-gradient-to-r from-secondary via-tertiary to-quaternary"
      ></div>
    </div>
  `,
})
export class ProgressBarComponent {
  readonly progress = input.required<number>();
}
