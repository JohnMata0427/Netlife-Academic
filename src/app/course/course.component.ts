import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  template: `
    <article class="w-72">
      <div>
        <img class="size-full rounded-t-lg" src="{{ src }}" alt="{{ title }}">
      </div>
      <div class="bg-black rounded-b-lg px-4">
        <div class="w-full">
          <h2 class="text-white text-xl font-bold pt-2">{{ title }}</h2>
          <p class="text-white text-md">Ing. {{ teacher }}</p>
          <p class="text-white text-sm">{{ duration }} horas</p>
          <p class="text-white text-sm">{{ rating }} estrellas</p>
        </div>
        <button class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] text-white py-1 px-3 rounded-md my-3 font-medium">Más información</button>
      </div>
    </article>
  `,
  styles: ``
})
export class CourseComponent {
  @Input() title = 'title';
  @Input() teacher = 'teacher';
  @Input() duration = '';
  @Input() rating = '';
  @Input() src = '';
}