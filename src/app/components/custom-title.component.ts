import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  standalone: true,
  imports: [],
  template: `
    <div class="relative mt-10 mb-5">
      <img
        class="w-80 h-auto"
        src="/title-layout.webp"
        alt="Título: {{ title }}"
      />
      <h1 class="absolute top-2 left-16 text-white font-semibold">{{ title }}</h1>
    </div>
  `,
  styles: ``,
})
export class CustomTitleComponent {
    @Input() title = '';
}
