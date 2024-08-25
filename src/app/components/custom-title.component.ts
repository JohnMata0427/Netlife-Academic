import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  standalone: true,
  template: `
    <div class="relative mb-5 mt-10">
      <img
        class="h-auto w-80"
        src="/title-layout.webp"
      />
      <h1 class="absolute left-16 top-2 font-semibold text-white">
        {{ title }}
      </h1>
    </div>
  `,
})
export class CustomTitleComponent {
  @Input() title!: string;
}
