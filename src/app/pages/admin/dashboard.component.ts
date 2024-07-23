import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@netlifeacademic/components/footer.component';
import { CustomButtonComponent } from '../../components/custom-button.component';
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
        <label
          (click)="toggleRadioButtonUsername()"
          class="text-sm"
          for="filter"
          ><input id="username" type="radio" name="filter" /> Nombres y
          Apellidos</label
        >
        <label (click)="toggleRadioButtonEmail()" class="text-sm" for="filter"
          ><input id="email" type="radio" name="filter" /> Correo</label
        >
        <input
          class="text-sm p-1 border border-[#cfcfcf] rounded-lg w-96"
          type="text"
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
              <svg class="z-10" width="15" height="19" viewBox="0 0 15 19">
                <path
                  class="fill-white group-hover:fill-black"
                  d="M4.37504 0.125L0.208374 4.28125H3.33337V11.5833H5.41671V4.28125H8.54171L4.37504 0.125ZM11.6667 14.7188V7.41667H9.58337V14.7188H6.45837L10.625 18.875L14.7917 14.7188H11.6667Z"
                />
              </svg>
            </app-custom-button>
            <app-custom-button
              [color]="'orange'"
              [text]="'Exportar datos (CSV)'"
              [hoverColor]="'white'"
              [moreStyles]="'text-xs h-8 gap-x-2 group'"
            >
              <svg class="z-10" width="16" height="16" viewBox="0 0 16 16">
                <path
                  class="fill-white group-hover:fill-[#F86A00]"
                  d="M8 11.575C7.86667 11.575 7.74167 11.554 7.625 11.512C7.50833 11.4707 7.4 11.4 7.3 11.3L3.7 7.7C3.51667 7.51667 3.425 7.28333 3.425 7C3.425 6.71667 3.51667 6.48333 3.7 6.3C3.88333 6.11667 4.12067 6.02067 4.412 6.012C4.704 6.004 4.94167 6.09167 5.125 6.275L7 8.15V1C7 0.716667 7.096 0.479 7.288 0.287C7.47933 0.0956668 7.71667 0 8 0C8.28333 0 8.521 0.0956668 8.713 0.287C8.90433 0.479 9 0.716667 9 1V8.15L10.875 6.275C11.0583 6.09167 11.296 6.004 11.588 6.012C11.8793 6.02067 12.1167 6.11667 12.3 6.3C12.4833 6.48333 12.575 6.71667 12.575 7C12.575 7.28333 12.4833 7.51667 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4707 8.375 11.512C8.25833 11.554 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V12C0 11.7167 0.0956668 11.479 0.287 11.287C0.479 11.0957 0.716667 11 1 11C1.28333 11 1.521 11.0957 1.713 11.287C1.90433 11.479 2 11.7167 2 12V14H14V12C14 11.7167 14.096 11.479 14.288 11.287C14.4793 11.0957 14.7167 11 15 11C15.2833 11 15.5207 11.0957 15.712 11.287C15.904 11.479 16 11.7167 16 12V14C16 14.55 15.8043 15.021 15.413 15.413C15.021 15.8043 14.55 16 14 16H2Z"
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
              {{ user.identification || '1729151975' }}
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
          (click)="selectedButton = 'Editar'"
          [color]="'orange'"
          [text]="'Editar usaurio'"
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
          selectedButton !== '' ? 'border border-black' : ''
        }}"
      >
        @if (selectedButton !== '') {
        <h3 class="font-bold">Correo del usuario</h3>

        <input
          [formControl]="email"
          class="text-sm p-1 border border-[#B8B8B8] rounded-lg w-96"
          type="text"
          placeholder="Buscar usuario"
        />

        @if (selectedButton === 'Agregar') {
        <select [formControl]="role" name="role" id="role" class="w-96 border border-[#B8B8B8] rounded-lg p-1 text-sm">
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
        }
      </div>
    </app-admin-layout>
  `,
})
export class AdminDashboardComponent {
  users = [] as User[];
  selectedButton = '';
  email = new FormControl('', Validators.required);
  role = new FormControl('STUDENT');
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (result) => {
        this.users = result;
      },
    });
  }

  createUser() {
    this.userService.createUser(this.email.value as string, this.role.value as string).subscribe({
      next: (result) => {
        console.log(result);
      },
    });
  }

  blockUser() {
    this.userService.blockUser(this.email.value as string).subscribe({
      next: (result) => {
        console.log(result);
      },
    });
  }

  toggleRadioButtonUsername() {
    document.getElementById('username')?.click();
  }

  toggleRadioButtonEmail() {
    document.getElementById('email')?.click();
  }
}
