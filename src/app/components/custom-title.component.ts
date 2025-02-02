import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  template: `
    <div class="relative mt-10 mb-5">
      <img class="h-auto w-80" src="/title-layout.webp" />
      <h1 class="absolute top-2 left-16 font-semibold text-white">
        {{ title() }}
      </h1>
    </div>
  `,
})
export class CustomTitleComponent {
  readonly title = input.required<string>();
}
