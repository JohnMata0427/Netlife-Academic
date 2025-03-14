import { Component, input } from '@angular/core';

type ColorVariant =
  | 'black'
  | 'white'
  | 'orange'
  | 'yellow'
  | 'gray'
  | 'orangelight';
type HoverColorVariant = 'black' | 'white';

@Component({
  selector: 'app-button-component',
  template: `
    <button
      class="cursor-pointer font-medium rounded-md h-10 relative overflow-hidden border px-2 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center group select-none {{
        buttonStyles
      }}"
      [disabled]="loading()"
    >
      @if (loading()) {
        <svg
          class="size-5 animate-spin text-white {{ variantsColor[color()][1] }}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            class="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      } @else {
        <ng-content />
        @if (text()) {
          <span class="relative z-10">{{ text() }}</span>
        }
      }
    </button>
  `,
})
export class CustomButtonComponent {
  readonly text = input<string>('');
  readonly color = input<ColorVariant>('black');
  readonly hoverColor = input<HoverColorVariant>('white');
  readonly loading = input(false);
  readonly moreStyles = input<string>('');

  get buttonStyles() {
    return `${this.moreStyles()} ${this.variantsColor[this.color()][0]} ${this.variantsColor[this.hoverColor()][2]}`;
  }

  public variantsColor: Record<ColorVariant, string[]> = {
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
