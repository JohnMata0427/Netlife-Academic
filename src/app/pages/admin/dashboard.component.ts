import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminLayoutComponent],
  template: `
    <app-admin-layout>
      <h1 class="text-2xl text-[#F86A00] font-bold ml-8">
        Gestión de usuarios
      </h1>
      <div class="flex flex-col text-sm gap-y-1 ml-8 mt-4">
        <span>
          Para agregar, eliminar o editar usuarios y sus roles o privilegios.
        </span>
        <span> Se admite el formato CSV para exportar o importar datos. </span>
      </div>
      <div class="flex justify-end gap-x-2 my-2">
        <button
          class="bg-gradient-to-r from-[#4B4B4B] to-black text-white flex gap-x-2 py-[7px] px-3 rounded-lg text-xs items-center"
        >
          Importar Datos (CSV)
          <img
            class="size-4"
            src="icons/admin/import.svg"
            alt="Icono de Inicio"
          />
        </button>
        <button
          class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] flex gap-x-2 py-[7px] px-3 rounded-lg text-xs items-center font-medium"
        >
          Exportar Datos (CSV)
          <img
            class="size-4"
            src="icons/admin/download.svg"
            alt="Icono de Inicio"
          />
        </button>
      </div>
    </app-admin-layout>
  `,
})
export class AdminDashboardComponent {
  constructor() {}
}
