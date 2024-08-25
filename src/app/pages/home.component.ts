import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/user.interface';
import { UserLayout } from '@layouts/user-layout.component';
import { CourseInfoComponent } from '@components/course-info.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { TaskComponent } from '../components/task.component';
import { CustomButtonComponent } from '../components/custom-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserLayout,
    CourseInfoComponent,
    CustomTitleComponent,
    TaskComponent,
    CustomButtonComponent,
  ],
  template: `
    <app-user-layout>
      <div class="w-full max-h-[58vh] relative flex justify-center">
        <img class="w-full object-cover" src="{{images[slide]}}" alt="Banner de Inicio" />
        <nav class="flex gap-x-1 absolute justify-center bottom-4">
          @for (image of images; track $index) {
            <button
              (click)="slide = $index"
              class="size-3 rounded-full border-2 border-quinary {{slide == $index ? 'bg-primary' : 'bg-white'}}"
            ></button>
          }
        </nav>
      </div>
      <section>
        <app-custom-title title="Ranking de Estudiantes" />
        <div class="flex flex-col lg:flex-row lg:gap-20">
          <aside class="mx-8 flex flex-col gap-2 lg:ml-16 lg:w-1/2">
            @for (user of users; track user.id) {
              <div
                class="flex items-center justify-between rounded-lg bg-quinary p-2 pr-8 shadow-md shadow-black/30"
              >
                <div class="flex items-center gap-2">
                  @if (users[0] === user) {
                    <img class="size-12" src="/1st.webp" alt="" />
                  } @else if (users[1] === user) {
                    <img class="size-12" src="/2nd.webp" alt="" />
                  } @else if (users[2] === user) {
                    <img class="size-12" src="/3rd.webp" alt="" />
                  } @else if (users[3] === user) {
                    <div
                      class="flex size-12 items-center justify-center rounded-full font-bold text-black"
                    >
                      4
                    </div>
                  } @else {
                    <div
                      class="flex size-12 items-center justify-center rounded-full font-bold text-black"
                    >
                      5
                    </div>
                  }
                  <img
                    class="size-16 rounded-full border-4 border-white"
                    src="{{ user.imageUrl || '/profile.webp' }}"
                    alt="Foto de Perfil"
                  />
                  <h4 class="text-md font-bold">
                    {{ user.name + ' ' + user.lastname }}
                  </h4>
                </div>
                <div class="flex flex-col items-end">
                  <strong class="text-md font-extrabold"
                    >{{ user?.points }}
                  </strong>
                  <span class="text-xs">puntos</span>
                </div>
              </div>
            }
          </aside>
          <article class="flex flex-col gap-2">
            <h2 class="hidden font-bold text-primary lg:block">
              PROXIMAS TAREAS
            </h2>
            <app-custom-title class="lg:hidden" [title]="'Próximas tareas'" />
            <div class="mx-8 flex flex-col items-center gap-4">
              <app-task
                [nombre]="'Introducción a las Redes'"
                [fecha]="{ mes: 'Julio', dia: '20' }"
                [hora]="'11:59 PM'"
              />
              <app-task
                [nombre]="'Aprendizaje Automatico'"
                [fecha]="{ mes: 'Julio', dia: '24' }"
                [hora]="'11:59 PM'"
              />
              <app-task
                [nombre]="'Analisis de Datos'"
                [fecha]="{ mes: 'Julio', dia: '28' }"
                [hora]="'11:59 PM'"
              />
              <div class="mt-2 flex gap-2">
                <div class="flex flex-col gap-2 rounded-lg bg-black px-4 py-2">
                  <span class="text-md font-light text-white"
                    >Prioridad de las tareas</span
                  >
                  <div class="flex">
                    <div class="flex w-20 flex-col gap-1">
                      <div
                        class="flex h-1 w-full items-center justify-end rounded-l-lg bg-secondary"
                      >
                        <div class="size-2 rounded-full bg-secondary"></div>
                      </div>
                      <span class="text-end text-xs text-white">Por hacer</span>
                    </div>
                    <div class="flex w-20 flex-col gap-1">
                      <div class="flex h-1 items-center justify-end bg-primary">
                        <div class="size-2 rounded-full bg-primary"></div>
                      </div>
                      <span class="text-end text-xs text-white">Proximo</span>
                    </div>
                    <div class="flex w-20 flex-col gap-1">
                      <div
                        class="flex h-1 items-center justify-end bg-tertiary"
                      >
                        <div class="size-2 rounded-full bg-tertiary"></div>
                      </div>
                      <span class="text-end text-xs text-white">Urgente</span>
                    </div>
                  </div>
                </div>

                <app-custom-button
                  [text]="'Ver calendario'"
                  [moreStyles]="
                    'text-xs justify-center items-center gap-2 h-full'
                  "
                >
                  <svg
                    class="z-10 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      class="fill-white group-hover:fill-black"
                      d="M0 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.3H0V19ZM14.3 8a.2.2 0 0 1 .2-.1h1.7a.2.2 0 0 1 .2.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.7a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8ZM10.7 8a.2.2 0 0 1 .2-.1h1.8a.2.2 0 0 1 .1.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2V17a.2.2 0 0 1-.1.1h-1.8a.2.2 0 0 1-.2-.1v-1.8Zm-3.6-3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H7.3a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H7.3a.2.2 0 0 1-.2-.2v-1.7Zm-3.5-3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H3.7a.2.2 0 0 1-.1-.2v-1.8Zm0 3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H3.7a.2.2 0 0 1-.1-.2v-1.7ZM18.9 1.4h-2.5V0h-2.1v1.4H5.7V0H3.6v1.4H1a1 1 0 0 0-1.1 1V5h20V2.5a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                </app-custom-button>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="mb-20">
        <app-custom-title title="Nuevos Cursos" />

        <div
          class="mt-4 flex flex-wrap justify-center gap-8 lg:ml-16 lg:justify-start"
        >
          <app-course-info
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            src="/courses/sql.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="/courses/analisis.png"
          />
        </div>
      </section>
    </app-user-layout>
  `,
  styles: `
    .vertical-lr {
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
  `,
})
export class HomeComponent {
  users!: User[];
  slide = 0
  images = [
    '/banner.webp',
    'https://as2.ftcdn.net/v2/jpg/03/65/94/79/1000_F_365947947_nBv9Yct5WRbpGrW4mb2UcsuJhVEPIDtw.jpg',
    'https://www.placementpreparation.io/blog/wp-content/uploads/2024/05/cyber-security-course-desktop-banner-horizontal.webp'
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getRankedUsers()
      .subscribe((users) => (this.users = users));

    setInterval(() => {
      this.slide = this.slide === this.images.length - 1 ? 0 : this.slide + 1;
    }, 10000)
  }
}
