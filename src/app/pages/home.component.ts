import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/user.interface';
import { UserLayout } from '@layouts/user-layout.component';
import { CourseInfoComponent } from '@components/course-info.component';
import { CustomTitleComponent } from '@components/custom-title.component';
import { TaskComponent } from "../components/task.component";
import { CustomButtonComponent } from "../components/custom-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayout, CourseInfoComponent, CustomTitleComponent, TaskComponent, CustomButtonComponent],
  template: `
    <app-user-layout>
      <img class="w-full" src="/banner.webp" alt="Banner de Inicio" />
      <section>
        <app-custom-title title="Ranking de Estudiantes" />
        <div class="flex gap-20">
          <aside class="w-1/2 flex flex-col gap-2 ml-16">
            @for (user of users; track user.id) {
              <div
                class="bg-quinary flex justify-between items-center shadow-sm shadow-black/30 rounded-lg p-2 pr-8"
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
                      class="size-12 font-bold text-black rounded-full flex items-center justify-center"
                    >
                      4
                    </div>
                  } @else {
                    <div
                      class="size-12 font-bold text-black rounded-full flex items-center justify-center"
                    >
                      5
                    </div>
                  }
                  <img
                    class="rounded-full size-16 border-white border-4"
                    src="{{ user.imageUrl || '/profile.webp' }}"
                    alt="Foto de Perfil"
                  />
                  <h4 class="text-md font-bold">
                    {{ user.name + ' ' + user.lastname }}
                  </h4>
                </div>
                <div class="flex flex-col items-end">
                  <strong class="text-sm font-extrabold"
                    >{{ user?.points }}
                  </strong>
                  <span class="text-xs">puntos</span>
                </div>
              </div>
            }
          </aside>
          <article class="flex flex-col gap-2">
            <h2 class="text-primary font-bold">PROXIMAS TAREAS</h2>
            <app-task [nombre]="'Introducción a las Redes'" [fecha]="{mes:'Julio', dia: '20'}" [hora]="'11:59 PM'"/>
            <app-task [nombre]="'Aprendizaje Automatico'" [fecha]="{mes:'Julio', dia: '24'}" [hora]="'11:59 PM'"/>
            <app-task [nombre]="'Analisis de Datos'" [fecha]="{mes:'Julio', dia: '28'}" [hora]="'11:59 PM'"/>
            
            <div class="flex gap-2 mt-2">
              <div class="bg-black flex flex-col gap-2 py-2 px-4 rounded-lg">
                <span class="text-sm text-white font-light"
                  >Prioridad de las tareas</span
                >
                <div class="flex">
                  <div class="w-20 flex flex-col gap-1">
                    <div
                      class="h-1 bg-secondary w-full rounded-l-lg flex justify-end items-center"
                    >
                      <div class="size-2 rounded-full bg-secondary"></div>
                    </div>
                    <span class="text-xs text-white text-end">Por hacer</span>
                  </div>
                  <div class="w-20 flex flex-col gap-1">
                    <div class="h-1 bg-primary flex justify-end items-center">
                      <div class="size-2 rounded-full bg-primary"></div>
                    </div>
                    <span class="text-xs text-white text-end">Proximo</span>
                  </div>
                  <div class="w-20 flex flex-col gap-1">
                    <div class="h-1 bg-tertiary flex justify-end items-center">
                      <div class="size-2 rounded-full bg-tertiary"></div>
                    </div>
                    <span class="text-xs text-white text-end">Urgente</span>
                  </div>
                </div>
              </div>

              <app-custom-button
                [text]="'Ver calendario'"
                [moreStyles]="'text-xs justify-center items-center gap-2 h-full group'"
              >
              <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path class="group-hover:fill-black fill-white" d="M0 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.3H0V19ZM14.3 8a.2.2 0 0 1 .2-.1h1.7a.2.2 0 0 1 .2.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.7a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8ZM10.7 8a.2.2 0 0 1 .2-.1h1.8a.2.2 0 0 1 .1.1v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2V8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2v1.8a.2.2 0 0 1-.1.2h-1.8a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .1.2V17a.2.2 0 0 1-.1.1h-1.8a.2.2 0 0 1-.2-.1v-1.8Zm-3.6-3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H7.3a.2.2 0 0 1-.2-.2v-1.8Zm0 3.6a.2.2 0 0 1 .2-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H7.3a.2.2 0 0 1-.2-.2v-1.7Zm-3.5-3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2v1.8a.2.2 0 0 1-.2.2H3.7a.2.2 0 0 1-.1-.2v-1.8Zm0 3.6a.2.2 0 0 1 .1-.2h1.8a.2.2 0 0 1 .2.2V17a.2.2 0 0 1-.2.1H3.7a.2.2 0 0 1-.1-.2v-1.7ZM18.9 1.4h-2.5V0h-2.1v1.4H5.7V0H3.6v1.4H1a1 1 0 0 0-1.1 1V5h20V2.5a1 1 0 0 0-1-1Z"/></svg>
              </app-custom-button>
            </div>
          </article>
        </div>
      </section>
      <section class="mb-20">
        <app-custom-title title="Nuevos Cursos" />

        <h2 class="text-primary font-extrabold ml-16">
          CURSOS RECOMENDADOS PARA TI
        </h2>
        <div class="mt-4 flex gap-8 ml-16">
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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getRankedUsers()
      .subscribe((users) => (this.users = users));
  }
}
