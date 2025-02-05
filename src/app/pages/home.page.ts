import { Component, inject } from '@angular/core';
import { UserService } from '@/services/user.service';
import { User } from '@/interfaces/user.interface';
import { UserLayout } from '@/layouts/user.layout';
import { CourseInfoComponent } from '@/components/course-info.component';
import { CustomTitleComponent } from '@/components/custom-title.component';
import { TaskComponent } from '@/components/task.component';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { AuthService } from '@/services/auth.service';

@Component({
  imports: [
    UserLayout,
    CourseInfoComponent,
    CustomTitleComponent,
    TaskComponent,
    CustomButtonComponent,
  ],
  template: `
    <app-user-layout>
      <img
        class="w-full aspect-[7/2] object-cover"
        alt="Banner de Inicio"
        src="/banner.webp"
      />
      <section>
        <app-title-component title="Ranking de Estudiantes" />
        <div class="flex flex-col lg:flex-row lg:gap-20">
          <aside class="mx-8 flex flex-col gap-2 lg:ml-16 lg:w-1/2">
            @for (user of users; track $index) {
              <div
                class="flex items-center justify-between rounded-lg p-2 pr-8 border {{
                  ownId === user.id
                    ? 'border-primary bg-primary/15'
                    : 'border-neutral-300 bg-quinary'
                }}"
              >
                <div class="flex items-center gap-2">
                  @if ($index < 3) {
                    <img
                      class="size-12"
                      src="/{{ $index + 1 }}-medall.webp"
                      alt="Medalla"
                    />
                  } @else {
                    <div
                      class="flex size-10 items-center justify-center rounded-full bg-neutral-300 font-bold text-black"
                    >
                      {{ $index + 1 }}
                    </div>
                  }

                  <img
                    class="size-16 rounded-full border-4 border-white"
                    alt="Foto de Perfil"
                    [src]="user.imageUrl || '/profile.webp'"
                  />
                  <h4 class="text-md font-bold">
                    {{ user.name + ' ' + user.lastname }}
                  </h4>
                </div>
                <div class="flex flex-col items-end">
                  <strong class="text-md font-extrabold"
                    >{{ user.points }}
                  </strong>
                  <span class="text-xs">puntos</span>
                </div>
              </div>
            }
          </aside>
          <article class="flex flex-col gap-2">
            <h2 class="text-primary hidden font-bold lg:block">
              PROXIMAS TAREAS
            </h2>
            <app-title-component class="lg:hidden" title="Próximas tareas" />
            <div class="mx-8 flex flex-col items-center gap-4">
              <app-task-component
                nombre="Introducción a las Redes"
                hora="11:59 PM"
                [fecha]="{ mes: 'Julio', dia: '20' }"
              />
              <app-task-component
                nombre="Aprendizaje Automatico"
                hora="11:59 PM"
                [fecha]="{ mes: 'Julio', dia: '24' }"
              />
              <app-task-component
                nombre="Analisis de Datos"
                hora="11:59 PM"
                [fecha]="{ mes: 'Julio', dia: '28' }"
              />
              <div class="mt-2 flex gap-2">
                <div class="flex flex-col gap-2 rounded-lg bg-black px-4 py-2">
                  <span class="text-md font-light text-white"
                    >Prioridad de las tareas</span
                  >
                  <div class="flex">
                    <div class="flex w-20 flex-col gap-1">
                      <div
                        class="bg-secondary flex h-1 w-full items-center justify-end rounded-l-lg"
                      >
                        <div class="bg-secondary size-2 rounded-full"></div>
                      </div>
                      <span class="text-end text-xs text-white">Por hacer</span>
                    </div>
                    <div class="flex w-20 flex-col gap-1">
                      <div class="bg-primary flex h-1 items-center justify-end">
                        <div class="bg-primary size-2 rounded-full"></div>
                      </div>
                      <span class="text-end text-xs text-white">Proximo</span>
                    </div>
                    <div class="flex w-20 flex-col gap-1">
                      <div
                        class="bg-tertiary flex h-1 items-center justify-end"
                      >
                        <div class="bg-tertiary size-2 rounded-full"></div>
                      </div>
                      <span class="text-end text-xs text-white">Urgente</span>
                    </div>
                  </div>
                </div>

                <app-button-component
                  text="Ver calendario"
                  moreStyles="text-xs justify-center items-center gap-2 h-full"
                >
                  <svg
                    class="z-10 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      class="fill-white group-hover:fill-black"
                      d="M0 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.3H0V19ZM14.3 8a.2.2 0 0 1 .2-.1h1.7a.2.2 0 0 1 .2.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.7a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8ZM10.7 8a.2.2 0 0 1 .2-.1h1.8a.2.2 0 0 1 .1.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2V17a.2.2 0 0 1-.1.1h-1.8a.2.2 0 0 1-.2-.1v-1.8Zm-3.6-3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H7.3a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H7.3a.2.2 0 0 1-.2-.2v-1.7Zm-3.5-3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H3.7a.2.2 0 0 1-.1-.2v-1.8Zm0 3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H3.7a.2.2 0 0 1-.1-.2v-1.7ZM18.9 1.4h-2.5V0h-2.1v1.4H5.7V0H3.6v1.4H1a1 1 0 0 0-1.1 1V5h20V2.5a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                </app-button-component>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <app-title-component title="Nuevos Cursos" />
        <div
          class="mt-4 flex flex-wrap justify-center gap-8 lg:ml-16 lg:justify-start"
        >
          <app-courseinfo-component
            id="control-de-versiones"
            src="https://fireship.io/courses/git/img/featured.png"
            title="Control de Versiones"
            teacher="Gabriel García"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="metodologias-agiles"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240208183413/In-Demand-Scrum-Master-Certifications.png"
            title="Metodologias Agiles"
            teacher="Ivonne Maldonado"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="html-y-css"
            src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6"
            title="HTML y CSS"
            teacher="Katherine Díaz"
            [newCourse]="true"
          />
          <app-courseinfo-component
            id="python-desde-cero"
            src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png"
            title="Python desde cero"
            teacher="Ivonne Maldonado"
            [newCourse]="true"
          />
        </div>
      </section>
    </app-user-layout>
  `,
})
export class HomePage {
  public users!: User[];
  public ownId!: string;

  private userService = inject(UserService);
  private authService = inject(AuthService);

  public ngOnInit() {
    this.userService.getRankedUsers().subscribe((users) => {
      this.users = users;
      this.ownId = this.authService.getInfoUser().sub;
    });
  }
}
