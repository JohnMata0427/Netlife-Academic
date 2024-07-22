import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@netlifeacademic/components/footer.component';
import { CustomButtonComponent } from '../../components/custom-button.component';

@Component({
  selector: 'app-admin-anuncios',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    NgClass,
    FooterComponent,
    CustomButtonComponent,
  ],
  template: `
    <app-admin-layout>
      <h1 class="text-2xl text-[#F86A00] font-bold">
        Configuración del Anuncio
      </h1>
      <div class="flex flex-col items-center">
        <form class="w-full flex mt-4 gap-x-4">
          <div class="w-full flex flex-col gap-y-2">
            <label class="font-bold" for="">Asunto</label>
            <input class="border border-[#B8B8B8] rounded-lg p-1 text-sm" type="text" />
            <label class="font-bold" for="">Contenido del Asunto</label>
            <textarea
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm h-[240px] max-h-[240px] min-h-[240px]"
              name=""
              id=""
            ></textarea>
          </div>
          <div class="w-full flex flex-col gap-y-2">
            <label class="font-bold" for="">Tipo de asunto</label>
            <input class="border border-[#B8B8B8] rounded-lg p-1 text-sm" type="text" />
            <label class="font-bold" for="">Tipo de usuario</label>
            <input class="border border-[#B8B8B8] rounded-lg p-1 text-sm" type="text" />
            <label class="font-bold" for=""
              >Estado del usuario en el campus al que llegará el anuncio</label
            >
            <input class="border border-[#B8B8B8] rounded-lg p-1 text-sm" type="text" />
            <label class="relative inline-flex cursor-pointer items-center">
              <input id="switch" type="checkbox" class="peer sr-only" />
              <label for="switch" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Excluir a usuarios invitados
            </label>
            <span class="font-bold">Medio de envío</span>
            <label class="relative inline-flex cursor-pointer items-center">
              <input id="switch" type="checkbox" class="peer sr-only" />
              <label for="switch" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Enviar por correo electrónico </label
            ><label class="relative inline-flex cursor-pointer items-center">
              <input id="switch-3" type="checkbox" class="peer sr-only" />
              <label for="switch-3" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Envío a la Pantalla Principal/Inicio del aplicativo
            </label>
            <label class="font-bold" for=""
              >Fecha de caducidad del anuncio</label
            >
            <input
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              type="datetime-local"
            />
          </div>
        </form>
        <app-custom-button
          [color]="'orange'"
          [text]="'Guardar Cambios'"
          [hoverColor]="'white'"
          [moreStyles]="'text-sm h-8 mt-8'"
        />
      </div>
    </app-admin-layout>
  `,
})
export class AdminAnunciosComponent {}
