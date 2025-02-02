import { Component, inject } from '@angular/core';
import { AdminLayout } from '@/layouts/admin.layout';
import { CustomButtonComponent } from '@/components/custom-button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AnnouncementService } from '@/services/announcement.service';

@Component({
  imports: [AdminLayout, CustomButtonComponent, ReactiveFormsModule],
  template: `
    <app-admin-layout>
      <h1 class="text-primary text-2xl font-bold">Configuración del Anuncio</h1>
      <div class="flex flex-col items-center">
        <form
          [formGroup]="form"
          class="mt-4 flex w-full flex-col gap-4 lg:flex-row"
        >
          <div class="flex w-full flex-col gap-2">
            <label class="font-bold" for="">Asunto</label>
            <input
              id="subject"
              name="subject"
              formControlName="subject"
              class="border-quinary rounded-lg border p-1 text-sm"
              type="text"
              required
            />
            <label class="font-bold" for="">Contenido del Asunto</label>
          </div>
          <div class="flex w-full flex-col gap-2">
            <label class="font-bold" for="">Tipo de aviso</label>

            <select
              formControlName="type"
              name="type"
              id="type"
              name="type"
              class="border-quinary rounded-lg border p-1 text-sm"
              required
            >
              <option value="info">Información o aviso</option>
              <option value="warning">Advertencia</option>
            </select>

            <label class="font-bold" for="">Tipo de usuario</label>
            <select
              formControlName="role"
              name="role"
              id="role"
              name="role"
              class="border-quinary rounded-lg border p-1 text-sm"
              required
            >
              <option value="ALL">Todos</option>
              <option value="STUDENT">Estudiantes</option>
              <option value="TEACHER">Profesores</option>
            </select>

            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="exclude"
                mame="exclude"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer after:border-quinary h-6 w-11 rounded-full border bg-slate-400 peer-checked:bg-green-500 peer-focus:ring-green-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
              ></div>
              Excluir a usuarios
            </label>

            @if (form.get('exclude')?.value) {
              <label class="font-bold" for="">Correos a excluir </label>
              <input type="text" />
            }

            <label class="font-bold" for=""
              >Estado del usuario en el campus al que llegará el anuncio</label
            >
            <select
              formControlName="state"
              name="state"
              id="state"
              class="border-quinary rounded-lg border p-1 text-sm"
              required
            >
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="blocked">Bloqueados</option>
            </select>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="guest"
                name="guest"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer after:border-quinary h-6 w-11 rounded-full border bg-slate-400 peer-checked:bg-green-500 peer-focus:ring-green-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
              ></div>
              Excluir a usuarios invitados
            </label>
            <span class="font-bold">Medio de envío</span>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="sendEmail"
                name="sendEmail"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer after:border-quinary h-6 w-11 rounded-full border bg-slate-400 peer-checked:bg-green-500 peer-focus:ring-green-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
              ></div>
              Enviar por correo electrónico </label
            ><label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="publishHome"
                id="switch-3"
                name="publishHome"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch-3" class="hidden"></label>
              <div
                class="peer after:border-quinary h-6 w-11 rounded-full border bg-slate-400 peer-checked:bg-green-500 peer-focus:ring-green-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
              ></div>
              Envío a la Pantalla Principal/Inicio del aplicativo
            </label>
            @if (form.get('publishHome')?.value) {
              <label class="font-bold" for=""
                >Fecha de caducidad del anuncio</label
              >
              <input
                class="border-quinary rounded-lg border p-1 text-sm"
                type="datetime-local"
                formControlName="deletedAt"
                name="deletedAt"
                id="deletedAt"
              />
            }
          </div>
        </form>
        <app-button-component
          (click)="onSubmit()"
          color="orange"
          text="Guardar Cambios"
          moreStyles="text-sm h-8 mt-8"
        />
        @if (message) {
          <div class="mt-5 rounded-lg bg-black p-2 text-white opacity-90">
            {{ message }}
          </div>
        }
      </div>
    </app-admin-layout>
  `,
})
export class AdminAnunciosPage {
  public form = new FormGroup({
    content: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    type: new FormControl('info', Validators.required),
    role: new FormControl('ALL', Validators.required),
    exclude: new FormControl(false),
    guest: new FormControl(false, Validators.required),
    state: new FormControl('all', Validators.required),
    sendEmail: new FormControl(true, Validators.required),
    publishHome: new FormControl(false, Validators.required),
    deletedAt: new FormControl(''),
  });
  public message!: string;
  private announcementSerice = inject(AnnouncementService);

  public onSubmit() {
    if (this.form.invalid) {
      this.message = 'Por favor, complete todos los campos';
      setTimeout(() => {
        this.message = '';
      }, 3000);
      return;
    }

    this.announcementSerice.createAnnouncement(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.message = 'Anuncio creado correctamente';
        setTimeout(() => {
          this.message = '';
        }, 3000);
      },
      error: ({ error }) => {
        this.message = error.message;
        setTimeout(() => {
          this.message = '';
        }, 3000);
      },
    });
  }
}
