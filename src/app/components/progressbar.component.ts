import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progressbar-component',
  imports: [NgStyle],
  template: `
    <div class="bg-quinary h-2.5 w-full rounded-lg border border-white">
      <div
        class="from-secondary via-tertiary to-quaternary h-full rounded-l bg-gradient-to-r"
        [ngStyle]="{ 'width.%': progress() }"
      ></div>
    </div>
  `,
})
export class ProgressBarComponent {
  readonly progress = input.required<number>();
}
