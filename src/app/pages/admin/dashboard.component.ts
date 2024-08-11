import { Component } from '@angular/core';
import { AdminLayoutComponent } from '@layouts/admin-layout.component';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/user.interface';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@components/footer.component';
import { CustomButtonComponent } from '@components/custom-button.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    NgClass,
    FooterComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
  ],
  template: `
    <app-admin-layout>
      <h1 class="text-2xl text-[#F86A00] font-bold">Gestión de usuarios</h1>
      <div class="flex flex-col text-sm gap-y-1 mt-4">
        <span>
          Para agregar, eliminar o editar usuarios y sus roles o privilegios.
        </span>
        <span> Se admite el formato CSV para exportar o importar datos. </span>
      </div>
      <div class=" mt-4 flex flex-col gap-y-1">
        <h2 class="font-bold">Filtros de búsqueda</h2>
        <label class="text-sm" for="filter"
          ><input
            class="border border-black"
            id="filter"
            name="filter"
            type="radio"
          />Nombres y Apellidos</label
        >
        <label class="text-sm" for="filter"
          ><input id="filter" name="filter" type="radio" />Correo</label
        >
        <input
          type="search"
          id="search"
          name="search"
          class="text-sm p-1 border border-[#cfcfcf] rounded-lg w-96"
          placeholder="Coloque aquí su búsqueda"
        />
      </div>
      <article class="mt-2">
        <div class="flex justify-between items-center w-full">
          <h2 class="font-bold">Tabla de Usuarios</h2>
          <div class="flex gap-x-2 my-2">
            <app-custom-button
              [color]="'black'"
              [text]="'Importar datos (CSV)'"
              [hoverColor]="'white'"
              [moreStyles]="'text-xs h-8 gap-x-2 group'"
            >
              <svg class="z-10 size-4" viewBox="0 0 15 19">
                <path
                  d="M4.38.13.2 4.28h3.12v7.3h2.09v-7.3h3.12L4.38.12Zm7.29 14.59v-7.3H9.58v7.3H6.46l4.17 4.15 4.16-4.15h-3.12Z"
                  class="fill-white group-hover:fill-black"
                />
              </svg>
            </app-custom-button>
            <app-custom-button
              [color]="'orange'"
              [text]="'Exportar datos (CSV)'"
              [hoverColor]="'white'"
              [moreStyles]="'text-xs h-8 gap-x-2 group'"
            >
              <svg class="z-10 size-4" viewBox="0 0 16 16">
                <path
                  d="M8 11.57a1.1 1.1 0 0 1-.38-.06.87.87 0 0 1-.32-.21L3.7 7.7a.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7a1 1 0 0 1 .71-.29c.3 0 .53.08.71.27L7 8.14V1c0-.28.1-.52.29-.71C7.48.09 7.72 0 8 0c.28 0 .52.1.71.29.2.19.29.43.29.71v7.15l1.88-1.88a.93.93 0 0 1 .7-.26c.3.01.54.1.72.29.18.18.27.42.27.7 0 .28-.09.52-.27.7l-3.6 3.6c-.1.1-.2.17-.32.21a1.1 1.1 0 0 1-.38.06ZM2 16c-.55 0-1.02-.2-1.41-.59C.19 15.02 0 14.55 0 14v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h12v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H2Z"
                  class="fill-white group-hover:fill-[#F86A00]"
                />
              </svg>
            </app-custom-button>
          </div>
        </div>
        <table
          class="w-full text-sm border border-[#d4d4d4] shadow-sm shadow-black/30 mt-2"
        >
          <tr
            class="bg-[#cfcfcf] *:font-medium *:pl-1 *:pr-2 *:py-1 *:text-start"
          >
            <th>Identificación</th>
            <th>Nombres y Apellidos</th>
            <th>Empresa</th>
            <th>Área</th>
            <th>Nivel</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
          @for(user of users; track user) {
          <tr
            class="*:font-normal *:pl-1 *:pr-2 *:text-start *:border *:border-[#d4d4d4]"
          >
            <th>
              {{ user.identification }}
            </th>
            <th>
              {{ user.name + ' ' + user.lastname }}
            </th>
            <th>
              {{ user.company }}
            </th>
            <th>
              {{ user.area }}
            </th>
            <th>
              {{ user.level }}
            </th>
            <th>
              {{ user.position }}
            </th>
            <th>
              {{ user.email }}
            </th>
            <th>
              {{ user.role }}
            </th>
            <th class="{{ !user.deleted ? 'bg-green-500' : 'bg-red-500' }}">
              {{ user.deleted ? 'Bloqueado' : 'Activo' }}
            </th>
          </tr>
          }
        </table>
      </article>
      <div class="flex justify-center gap-x-4 mt-4">
        <app-custom-button
          (click)="selectedButton = 'Agregar'"
          [color]="'orange'"
          [text]="'Agregar usuario'"
          [moreStyles]="'text-xs h-8'"
          [hoverColor]="'white'"
        />
        <app-custom-button
          (click)="selectedButton = 'Bloquear'"
          [color]="'orange'"
          [text]="'Bloquear usuario'"
          [hoverColor]="'white'"
          [moreStyles]="'text-xs h-8'"
        />
      </div>

      <div
        class="w-full mt-4 flex flex-col gap-y-2 rounded-lg p-4 {{
          selectedButton ? 'border border-black' : ''
        }}"
      >
        @if (!selectedButton) {
        <h3 class="font-bold">Correo del usuario</h3>

        <input
          [formControl]="email"
          id="email"
          name="email"
          class="text-sm p-1 border border-[#B8B8B8] rounded-lg w-96"
          type="text"
          placeholder="Buscar usuario"
        />

        @if (selectedButton === 'Agregar') {
        <select
          [formControl]="role"
          name="role"
          id="role"
          class="w-96 border border-[#B8B8B8] rounded-lg p-1 text-sm"
        >
          <option value="STUDENT">Estudiante</option>
          <option value="TEACHER">Docente</option>
          <option value="ADMIN">Administrador</option>
        </select>
        }
        <app-custom-button
          (click)="
            selectedButton === 'Agregar'
              ? createUser()
              : selectedButton === 'Bloquear'
              ? blockUser()
              : null
          "
          [color]="'black'"
          [text]="selectedButton"
          [hoverColor]="'white'"
          [moreStyles]="'text-xs h-8'"
        />
        } @if (message) {
        <div class="text-white bg-black/90 p-2 rounded-lg mt-5 max-w-96">
          {{ message }}
        </div>
        }
      </div>
    </app-admin-layout>
  `,
})
export class AdminDashboardComponent {
  users!: User[];
  selectedButton!: string;
  email = new FormControl('', Validators.required);
  role = new FormControl('STUDENT');
  message!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (result) => (this.users = result),
    });
  }

  createUser() {
    this.userService
      .createUser(this.email.value as string, this.role.value as string)
      .subscribe({
        next: (result) => {
          this.message = 'Usuario creado con éxito';
          setTimeout(() => {
            this.message = '';
          }, 5000);
          this.users = [...this.users, result];
        },
        error: ({ error }) => {
          this.message = error.message;
          setTimeout(() => {
            this.message = '';
          }, 5000);
        },
      });
  }

  blockUser() {
    this.userService.blockUser(this.email.value!).subscribe({
      next: () => {
        this.message = 'Usuario bloqueado con éxito';
        setTimeout(() => {
          this.message = '';
        }, 5000);
        this.users = this.users.map((user) => {
          if (user.email === this.email.value) {
            user.deleted = !user.deleted;
          }
          return user;
        });
      },
    });
  }
}
