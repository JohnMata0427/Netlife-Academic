import { Component } from '@angular/core';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { UserLayout } from "../layouts/user-layout.component";
import { CourseInfoComponent } from '@netlifeacademic/components/course-info.component';
import { CustomTitleComponent } from '@netlifeacademic/components/custom-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserLayout,
    CourseInfoComponent,
    CustomTitleComponent
],
  template: `
  <app-user-layout>
  <img class="w-full" src="banner.png" alt="Banner de Inicio" />
      <section>
        <app-custom-title title="Ranking de Estudiantes" />
        <div class="flex gap-20">
          <aside class="w-1/2 flex flex-col gap-y-2 ml-16">
            @for (user of users; track user.id) {
            <div
              class="bg-[#ececec] flex justify-between items-center shadow-sm shadow-black/30 rounded-lg p-2 pr-8"
            >
              <div class="flex items-center gap-x-2">
                @if (users[0] === user ) {
                <img class="size-12" src="1st.png" alt="" />
                } @else if (users[1] === user) {
                <img class="size-12" src="2nd.png" alt="" />
                } @else if (users[2] === user) {
                <img class="size-12" src="3rd.png" alt="" />
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
                  class="rounded-full size-[70px] border-white border-4"
                  src="{{ user.imageUrl || 'profile.png' }}"
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
          <article class="flex flex-col gap-y-2">
            <h2 class="text-[#FD6A00] font-bold">PROXIMAS TAREAS</h2>
            <a href="/mis-cursos" class="flex gap-x-4">
              <div class="relative">
                <div
                  class="bg-[#F50009] vertical-lr text-white font-bold text-xl rounded pt-1 pb-3"
                >
                  JUL
                </div>
                <div
                  class="bg-black text-white absolute -bottom-0 -left-[3px] rounded-full px-2 py-[6px] font-bold min-w-9 text-center"
                >
                  20
                </div>
              </div>
              <div
                class="h-28 w-96 pl-6 flex flex-col justify-center gap-y-2 rounded-lg shadow-sm shadow-black/40 bg-[#D9D9D9]/50"
              >
                <h3 class="text-sm">
                  <strong>Tarea: </strong> Redes neuronales
                </h3>
                <div class="flex items-center gap-x-2">
                  <img
                    src="icons/courses/time.svg"
                    alt="Icono hora de entrega"
                  />
                  <span class="text-xs">11:59 PM</span>
                </div>
              </div>
            </a>
            <a href="/mis-cursos" class="flex gap-x-4">
              <div class="relative">
                <div
                  class="bg-[#ec7434] vertical-lr text-white font-bold text-xl rounded pt-1 pb-3"
                >
                  JUL
                </div>
                <div
                  class="bg-black text-white absolute -bottom-0 -left-[3px] rounded-full px-2 py-[6px] font-bold min-w-9 text-center"
                >
                  31
                </div>
              </div>
              <div
                class="h-28 w-96 pl-6 flex flex-col justify-center gap-y-2 rounded-lg shadow-sm shadow-black/40 bg-[#D9D9D9]/50"
              >
                <h3 class="text-sm">
                  <strong>Tarea: </strong> Conceptos de Programación
                </h3>
                <div class="flex items-center gap-x-2">
                  <img
                    src="icons/courses/time.svg"
                    alt="Icono hora de entrega"
                  />
                  <span class="text-xs">11:59 PM</span>
                </div>
              </div>
            </a>
            <a href="/mis-cursos" class="flex gap-x-4">
              <div class="relative">
                <div
                  class="bg-[#F8E500] vertical-lr text-white font-bold text-xl rounded pt-1 pb-3"
                >
                  AGO
                </div>
                <div
                  class="bg-black text-white absolute -bottom-0 -left-[3px] rounded-full px-2 py-[6px] font-bold min-w-9 text-center"
                >
                  2
                </div>
              </div>
              <div
                class="h-28 w-96 pl-6 flex flex-col justify-center gap-y-2 rounded-lg shadow-sm shadow-black/40 bg-[#D9D9D9]/50"
              >
                <h3 class="text-sm"><strong>Tarea: </strong> Modelo OSI</h3>
                <div class="flex items-center gap-x-2">
                  <img
                    src="icons/courses/time.svg"
                    alt="Icono hora de entrega"
                  />
                  <span class="text-xs">11:59 PM</span>
                </div>
              </div>
            </a>
            <div class="flex gap-x-2 mt-2">
              <div class="bg-black flex flex-col gap-y-2 py-2 px-4 rounded-lg">
                <span class="text-sm text-white font-light"
                  >Prioridad de las tareas</span
                >
                <div class="flex">
                  <div class="w-20 flex flex-col gap-y-1">
                    <div
                      class="h-1 bg-[#F8E500] w-full rounded-l-lg flex justify-end items-center"
                    >
                      <div class="size-2 rounded-full bg-[#F8E500]"></div>
                    </div>
                    <span class="text-xs text-white text-end">Por hacer</span>
                  </div>
                  <div class="w-20 flex flex-col gap-y-1">
                    <div class="h-1 bg-[#FD6A00] flex justify-end items-center">
                      <div class="size-2 rounded-full bg-[#FD6A00]"></div>
                    </div>
                    <span class="text-xs text-white text-end">Proximo</span>
                  </div>
                  <div class="w-20 flex flex-col gap-y-1">
                    <div class="h-1 bg-[#F50009] flex justify-end items-center">
                      <div class="size-2 rounded-full bg-[#F50009]"></div>
                    </div>
                    <span class="text-xs text-white text-end">Urgente</span>
                  </div>
                </div>
              </div>
              <button
                class="bg-black flex items-center justify-center px-4 gap-x-2 rounded-lg hover:bg-black/95"
              >
                <img src="icons/courses/calendar.svg" alt="Calendario" />
                <span class="text-white text-xs">Ver calendario</span>
              </button>
            </div>
          </article>
        </div>
      </section>
      <section class="mb-20">
      <app-custom-title title="Nuevos Cursos" />

        <h2 class="text-[#ec7434] font-extrabold ml-16">
          CURSOS RECOMENDADOS PARA TI
        </h2>
        <div class="mt-4 flex gap-8 ml-16">
          <app-course-info
            title="Redes de Computadoras"
            teacher="Ivonne Maldonado"
            src="courses/sql.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="courses/analisis.png"
          />
          <app-course-info
            title="Analisis de Datos"
            teacher="Ivonne Maldonado"
            src="courses/analisis.png"
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
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getRankedUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
