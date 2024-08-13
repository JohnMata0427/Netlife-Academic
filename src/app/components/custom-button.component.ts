import { Component, Input } from '@angular/core';

type ColorVariant = 'black' | 'white' | 'orange' | 'yellow' | 'gray' | 'orangelight';
type HoverColorVariant = 'black' | 'white';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  template: `
    <button
      class="font-medium rounded-md h-10 relative overflow-hidden border px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center {{
        moreStyles
      }} {{ variantsColor[color] }} {{ variantsHoverColor[hoverColor] }}"
    >
      @if (loading) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          class="inline w-4 h-4 me-3 text-{{ color }} animate-spin"
          viewBox="0 0 100 101"
        >
          <path
            fill="#E5E7EB"
            d="M100 50.6a50 50 0 1 1-100 0 50 50 0 0 1 100 0Zm-90.92 0a40.92 40.92 0 1 0 81.84 0 40.92 40.92 0 0 0-81.84 0Z"
          />
          <path
            fill="currentColor"
            d="M93.97 39.04A4.24 4.24 0 0 0 97 33.55 50 50 0 0 0 41.73 1.28a4.24 4.24 0 0 0-3.28 5.34 4.96 4.96 0 0 0 5.6 3.49 40.92 40.92 0 0 1 44.13 25.77 4.96 4.96 0 0 0 5.79 3.16Z"
          />
        </svg>
      } @else {
        <ng-content></ng-content>
        <span class="relative z-10"> {{ text }} </span>
      }
    </button>
  `,
})
export class CustomButtonComponent {
  constructor() {}

  @Input() text!: string;
  @Input() color: ColorVariant = 'black';
  @Input() hoverColor: HoverColorVariant = 'white';
  @Input() loading = false;
  @Input() moreStyles!: string;

  variantsColor: Record<ColorVariant, string> = {
    black: 'border-black bg-black hover:text-black',
    white: 'border-white bg-white hover:text-white',
    orange: 'border-primary bg-primary hover:text-primary',
    gray: 'border-neutral-500 bg-neutral-500 hover:text-neutral-500',
    orangelight: 'border-orangelight bg-orangelight hover:text-orangelight',
    yellow: 'border-secondary bg-secondary hover:text-secondary'
  };
  variantsHoverColor: Record<HoverColorVariant, string> = {
    black: 'text-black before:bg-black hover:shadow-black',
    white: 'text-white before:bg-white hover:shadow-white',
  };
}
