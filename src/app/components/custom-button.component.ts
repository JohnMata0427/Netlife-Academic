import { Component, Input } from '@angular/core';

type ColorVariant =
  | 'black'
  | 'white'
  | 'orange'
  | 'yellow'
  | 'gray'
  | 'orangelight';
type HoverColorVariant = 'black' | 'white';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  template: `
    <button
      class="font-medium rounded-md h-10 relative overflow-hidden border px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center group {{
        moreStyles
      }} {{ variantsColor[color][0] }} {{ variantsColor[hoverColor][2] }} group"
    >
      @if (loading) {
        <svg
          class="size-5 animate-rotate-360 text-white animate-iteration-count-infinite {{
            variantsColor[color][1]
          }}"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
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

  variantsColor: Record<ColorVariant, string[]> = {
    black: [
      'border-black bg-black hover:text-black',
      'group-hover:text-black',
      'text-black before:bg-black hover:shadow-black',
    ],
    white: [
      'border-white bg-white hover:text-white',
      'group-hover:text-white',
      'text-white before:bg-white hover:shadow-white',
    ],
    orange: [
      'border-primary bg-primary hover:text-primary',
      'group-hover:text-primary',
    ],
    gray: [
      'border-neutral-500 bg-neutral-500 hover:text-neutral-500',
      'group-hover:text-neutral-500',
    ],
    orangelight: [
      'border-orangelight bg-orangelight hover:text-orangelight',
      'group-hover:text-orangelight',
    ],
    yellow: [
      'border-secondary bg-secondary hover:text-secondary',
      'group-hover:text-secondary',
    ],
  };
}
