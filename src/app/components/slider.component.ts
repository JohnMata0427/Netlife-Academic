import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-slider-component',
  template: `
    <div class="relative hidden max-h-[58vh] w-full">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        [style.transform]="'translateX(-' + slide * 100 + '%)'"
      >
        <div class="min-w-full">
          @for (image of images; track $index) {
            <img
              class="w-full object-cover"
              [src]="image"
              alt="Banner de Inicio"
            />
          }
        </div>
      </div>
      <nav class="absolute bottom-4 flex justify-center gap-x-1">
        @for (image of images; track $index) {
          <button
            (click)="slide = $index"
            class="size-3 rounded-full border-2 border-quinary {{
              slide == $index ? 'bg-primary' : 'bg-white'
            }}"
          ></button>
        }
      </nav>
      <button (click)="prevSlide()">&#10094;</button>
      <button (click)="nextSlide()">&#10095;</button>
    </div>
  `,
})
export class SliderComponent {
  images = [
    '/banner.webp',
    'https://as2.ftcdn.net/v2/jpg/03/65/94/79/1000_F_365947947_nBv9Yct5WRbpGrW4mb2UcsuJhVEPIDtw.jpg',
    'https://www.placementpreparation.io/blog/wp-content/uploads/2024/05/cyber-security-course-desktop-banner-horizontal.webp',
  ];
  slide = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.slide = (this.slide + 1) % this.images.length;
  }

  prevSlide() {
    this.slide = (this.slide - 1 + this.images.length) % this.images.length;
  }
}
