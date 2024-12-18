import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  template: `
    <div class="relative mb-5 mt-10">
      <img class="h-auto w-80" src="/title-layout.webp" />
      <h1 class="absolute left-16 top-2 font-semibold text-white">
        {{ title() }}
      </h1>
    </div>
  `,
})
export class CustomTitleComponent {
  readonly title = input.required<string>();
}
