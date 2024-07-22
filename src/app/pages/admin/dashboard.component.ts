import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@netlifeacademic/components/footer.component';
import { CustomButtonComponent } from '../../components/custom-button.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    NgClass,
    FooterComponent,
    CustomButtonComponent,
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
              [moreStyles]="'text-xs h-8'"
            />
            <app-custom-button
              [color]="'orange'"
              [text]="'Exportar datos (CSV)'"
              [hoverColor]="'white'"
              [moreStyles]="'text-xs h-8'"
            />
          </div>
        </div>
        <table
          class="w-full text-sm border border-[#d4d4d4] shadow-sm shadow-black/30 mt-2"
        >
          <tr class="bg-[#cfcfcf]">
            <th class="font-medium pl-1 pr-2 py-1 text-start">
              Identificación
            </th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">
              Nombres y Apellidos
            </th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Empresa</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Área</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Nivel</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Cargo</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Email</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Rol</th>
            <th class="font-medium pl-1 pr-2 py-1 text-start">Estado</th>
          </tr>
          @for(user of users; track user) {
          <tr>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.identification || '1729151975' }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.name + ' ' + user.lastname }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.company }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.area }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.level }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.position }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.email }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
            >
              {{ user.role }}
            </th>
            <th
              class="font-normal pl-1 pr-2 text-start border border-[#d4d4d4]"
              [ngClass]="{
                'bg-green-500': !user.deleted,
                'bg-red-500': user.deleted
              }"
            >
              {{ user.deleted ? 'Bloqueado' : 'Activo' }}
            </th>
          </tr>
          }
        </table>
      </article>
      <div class="flex justify-center gap-x-4 mt-4">
        <app-custom-button
          [color]="'orange'"
          [text]="'Agregar usuario'"
          [moreStyles]="'text-xs h-8'"
          [hoverColor]="'white'"
        />
        <app-custom-button
          [color]="'orange'"
          [text]="'Editar usaurio'"
          [moreStyles]="'text-xs h-8'"
          [hoverColor]="'white'"
        />
        <app-custom-button
          [color]="'orange'"
          [text]="'Bloquear usuario'"
          [hoverColor]="'white'"
          [moreStyles]="'text-xs h-8'"
        />
      </div>
      <div class="mt-4  flex flex-col gap-y-4">
        <h3 class="font-bold">Permisos para editar información</h3>
        <input
          class="text-sm p-1 border border-[#cfcfcf] rounded-lg w-96"
          type="text"
          placeholder="Buscar usuario"
        />
        <app-custom-button
          [color]="'orange'"
          [text]="'Otorgar permisos'"
          [hoverColor]="'white'"
          [moreStyles]="'text-xs h-8'"
        />
      </div>
    </app-admin-layout>
  `,
})
export class AdminDashboardComponent {
  users = [] as User[];
  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (result) => {
        this.users = result;
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
