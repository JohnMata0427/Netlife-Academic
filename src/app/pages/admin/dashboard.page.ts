import { Component, inject } from '@angular/core';
import { AdminLayout } from '@/layouts/admin.layout';
import { UserService } from '@/services/user.service';
import { User } from '@/interfaces/user.interface';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    AdminLayout,
    CustomButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  template: `
    <app-admin-layout>
      <h1 class="text-primary text-2xl font-bold">Gestión de usuarios</h1>
      <div class="mt-4 flex flex-col gap-1 text-sm">
        <span>
          Para agregar, eliminar o editar usuarios y sus roles o privilegios.
        </span>
        <span> Se admite el formato CSV para exportar o importar datos. </span>
      </div>
      <div class="mt-4 flex flex-col gap-1">
        <h2 class="font-bold">Filtros de búsqueda</h2>
        <label class="text-sm" for="filter"
          ><input id="filter" name="filter" type="radio" />Nombres</label
        >
        <label class="text-sm" for="filter"
          ><input id="filter" name="filter" type="radio" />Correo</label
        >
        <input
          class="border-black w-96 rounded-lg border p-1 text-sm"
          id="search"
          name="search"
          type="search"
          placeholder="Coloque aquí su búsqueda"
        />
      </div>
      <div class="flex w-full items-center justify-between">
        <h2 class="font-bold">Tabla de Usuarios</h2>
        <div class="my-2 flex gap-2">
          <app-button-component
            text="Importar datos (CSV)"
            moreStyles="text-xs h-8 gap-2"
          >
            <svg class="z-10 size-4" viewBox="0 0 15 19">
              <path
                class="fill-white group-hover:fill-black"
                d="M4.38.13.2 4.28h3.12v7.3h2.09v-7.3h3.12L4.38.12Zm7.29 14.59v-7.3H9.58v7.3H6.46l4.17 4.15 4.16-4.15h-3.12Z"
              />
            </svg>
          </app-button-component>
          <app-button-component
            text="Exportar datos (CSV)"
            moreStyles="text-xs h-8 gap-2"
            color="orange"
          >
            <svg class="z-10 size-4" viewBox="0 0 16 16">
              <path
                class="group-hover:fill-primary fill-white"
                d="M8 11.57a1.1 1.1 0 0 1-.38-.06.87.87 0 0 1-.32-.21L3.7 7.7a.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7a1 1 0 0 1 .71-.29c.3 0 .53.08.71.27L7 8.14V1c0-.28.1-.52.29-.71C7.48.09 7.72 0 8 0c.28 0 .52.1.71.29.2.19.29.43.29.71v7.15l1.88-1.88a.93.93 0 0 1 .7-.26c.3.01.54.1.72.29.18.18.27.42.27.7 0 .28-.09.52-.27.7l-3.6 3.6c-.1.1-.2.17-.32.21a1.1 1.1 0 0 1-.38.06ZM2 16c-.55 0-1.02-.2-1.41-.59C.19 15.02 0 14.55 0 14v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h12v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H2Z"
              />
            </svg>
          </app-button-component>
        </div>
      </div>
      <table
        class="border-black mt-2 w-full border text-sm shadow-lg shadow-black/20"
      >
        <thead>
          <tr class="bg-black text-white *:p-1 *:text-start">
            <th>Identificación</th>
            <th>Nombres</th>
            <th>Empresa</th>
            <th>Área</th>
            <th>Nivel</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          @for (user of users; track $index) {
            <tr
              class="*:border-black even:bg-quinary *:border *:px-1 odd:bg-white *:font-normal"
            >
              <th>{{ user.identification }}</th>
              <th>{{ user.name | titlecase }} {{ user.lastname }}</th>
              <th>{{ user.company | titlecase }}</th>
              <th>{{ user.area | titlecase }}</th>
              <th>{{ user.level | titlecase }}</th>
              <th>{{ user.position | titlecase }}</th>
              <th>{{ user.email }}</th>
              <th>{{ user.role }}</th>
              <th [className]="!user.deleted ? 'bg-green-500' : 'bg-tertiary'">
                {{ user.deleted ? 'Bloqueado' : 'Activo' }}
              </th>
            </tr>
          }
        </tbody>
      </table>
      <div class="mt-4 flex justify-center gap-4">
        <app-button-component
          text="Agregar usuario"
          moreStyles="text-xs h-8"
          color="orange"
          (click)="selectedButton = 'Agregar'"
        />
        <app-button-component
          text="Bloquear usuario"
          moreStyles="text-xs h-8"
          color="orange"
          (click)="selectedButton = 'Bloquear'"
        />
      </div>

      <div
        class="w-full mt-4 flex flex-col gap-2 rounded-lg p-4 {{
          selectedButton ? 'border border-black' : ''
        }}"
      >
        @if (selectedButton) {
          <h3 class="font-bold">Correo del usuario</h3>

          <div class="flex gap-x-2">
            <input
              class="border-black w-96 rounded-lg border p-1 text-sm"
              id="email"
              name="email"
              type="text"
              placeholder="Buscar usuario"
              [formControl]="email"
            />

            @if (selectedButton === 'Agregar') {
              <select
                class="border-black w-96 rounded-lg border p-1 text-sm"
                id="role"
                name="role"
                [formControl]="role"
              >
                <option value="STUDENT">Estudiante</option>
                <option value="TEACHER">Docente</option>
                <option value="ADMIN">Administrador</option>
              </select>
            }
          </div>
          <app-button-component
            moreStyles="text-xs h-8"
            [text]="selectedButton"
            (click)="
              selectedButton === 'Agregar'
                ? createUser()
                : selectedButton === 'Bloquear'
                  ? blockUser()
                  : null
            "
          />
        }
        @if (message) {
          <div
            class="mt-5 max-w-96 rounded-lg bg-black p-2 text-white opacity-90"
          >
            {{ message }}
          </div>
        }
      </div>
    </app-admin-layout>
  `,
})
export class AdminDashboardPage {
  public users!: User[];
  public selectedButton = 'Agregar';
  public email = new FormControl('', Validators.required);
  public role = new FormControl('STUDENT');
  public message!: string;

  private userService = inject(UserService);

  public ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (result) => (this.users = result),
    });
  }

  public createUser() {
    this.userService.createUser(this.email.value!, this.role.value!).subscribe({
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

  public blockUser() {
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
