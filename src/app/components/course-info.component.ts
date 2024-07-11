import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [],
  template: `
    <article class="w-64 shadow-md shadow-black/50 rounded-lg">
      <a href="/mis-cursos/{{id}}">
        <img class="h-32 w-full rounded-t-lg" src="{{ src }}" alt="{{ title }}">
      </a>
      <div class="bg-black rounded-b-lg px-4 py-3 flex flex-col gap-y-1">
        <h3 class="text-white text-sm font-bold">{{ title }}</h3>
        <p class="text-white text-xs font-light">Prof. {{ teacher }}</p>
        <div class="flex flex-col gap-y-1 mt-2">
          <div class="w-full bg-[#D9D9D9] h-[10px] rounded border border-white">
              <div id="progress-bar" class="bg-gradient-to-r from-[#FEE500] via-[#F0000B] to-[#4C1B53] rounded-l h-full"></div>
          </div>
          <h4 class="text-xs text-white font-extralight text-end">{{progress}} Completado</h4>
      </div>
      </div>
    </article>
  `,
  styles: ``
})
export class CourseInfoComponent {
  @Input() title = 'title';
  @Input() teacher = 'teacher';
  @Input() duration = '';
  @Input() rating = '';
  @Input() src = '';
  @Input() id = '';
  @Input() progress = '1%';

  getStarsArray(rating: string) {
    let stars = [];
    const ratingInt = parseInt(rating);
    for (let i = 1; i <= ratingInt; i++) {
      stars.push(i);
    }
    return stars;
  }

  ngOnInit() {
    document.getElementById('progress-bar')?.classList.add('w-[' + this.progress + ']');
  }
}