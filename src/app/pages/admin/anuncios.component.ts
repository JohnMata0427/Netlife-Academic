import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@netlifeacademic/components/footer.component';
import { CustomButtonComponent } from '../../components/custom-button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { AnnouncementService } from '@netlifeacademic/services/announcement.service';

@Component({
  selector: 'app-admin-anuncios',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    NgClass,
    FooterComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  template: `
    <app-admin-layout>
      <h1 class="text-2xl text-[#F86A00] font-bold">
        Configuración del Anuncio
      </h1>
      <div class="flex flex-col items-center">
        <form [formGroup]="form" class="w-full flex mt-4 gap-x-4">
          <div class="w-full flex flex-col gap-y-2">
            <label class="font-bold" for="">Asunto</label>
            <input
              formControlName="subject"
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              type="text"
              required
            />
            <label class="font-bold" for="">Contenido del Asunto</label>
            <angular-editor
              formControlName="content"
              [config]="editorConfig"
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              required
            />
          </div>
          <div class="w-full flex flex-col gap-y-2">
            <label class="font-bold" for="">Tipo de aviso</label>

            <select
              formControlName="type"
              name="type"
              id="type"
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
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
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              required
            >
              <option value="ALL">Todos</option>
              <option value="STUDENT">Estudiantes</option>
              <option value="TEACHER">Profesores</option>
            </select>

            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="exclude"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Excluir a usuarios
            </label>

            @if (form.get('exclude')?.value) {
            <label class="font-bold" for="">Correos a excluir </label>
            <input type="text">
            
            }

            <label class="font-bold" for=""
              >Estado del usuario en el campus al que llegará el anuncio</label
            >
            <select
              formControlName="state"
              name="state"
              id="state"
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              required
            >
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="blocked">Bloqueados</option>
            </select>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="guest"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Excluir a usuarios invitados
            </label>
            <span class="font-bold">Medio de envío</span>
            <label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="sendEmail"
                id="switch"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Enviar por correo electrónico </label
            ><label class="relative inline-flex cursor-pointer items-center">
              <input
                formControlName="publishHome"
                id="switch-3"
                type="checkbox"
                class="peer sr-only"
              />
              <label for="switch-3" class="hidden"></label>
              <div
                class="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
              ></div>
              Envío a la Pantalla Principal/Inicio del aplicativo
            </label>
            @if (form.get('publishHome')?.value) {
            <label class="font-bold" for=""
              >Fecha de caducidad del anuncio</label
            >
            <input
              class="border border-[#B8B8B8] rounded-lg p-1 text-sm"
              type="datetime-local"
              formControlName="deletedAt"
            />
            }
          </div>
        </form>
        <app-custom-button
          (click)="onSubmit()"
          [color]="'orange'"
          [text]="'Guardar Cambios'"
          [hoverColor]="'white'"
          [moreStyles]="'text-sm h-8 mt-8'"
        />
        @if (message) {
        <div class="text-white bg-black/90 p-2 rounded-lg mt-5">{{ message }}</div>
        } 
      </div>
    </app-admin-layout>
  `,
})
export class AdminAnunciosComponent {
  form: FormGroup;
  message = '';

  constructor(private announcementSerice: AnnouncementService) {
    this.form = new FormGroup({
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
  }

  onSubmit() {
    if (this.form.invalid) {
      this.message = 'Por favor, complete todos los campos';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    } else {
      this.announcementSerice.createAnnouncement(this.form.value).subscribe(
        (response) => {
          this.message = 'Anuncio creado correctamente';
          setTimeout(() => {
            this.message = '';
          }, 3000);
        },
        (error) => {
          this.message = error.error.message;
          setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      );
    }
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
}
