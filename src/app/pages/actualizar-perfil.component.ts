import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-actualizar-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, UserLayout, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <div class="relative">
          <div class="w-screen h-96 bg-profile"></div>
          <button
            class="group absolute bottom-4 right-12 flex items-center justify-center gap-x-2 px-4 text-md rounded-md h-10 hover:before:bg-redborder-red-500 overflow-hidden border border-white bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full text-sm"
          >
            <svg class="z-10 size-7" viewBox="0 0 29 29">
              <path
                d="m22.84 3.58-17.5-.06a3.5 3.5 0 0 0-3.51 3.49l-.05 14a3.5 3.5 0 0 0 3.48 3.51l17.5.06a3.5 3.5 0 0 0 3.52-3.48l.05-14a3.5 3.5 0 0 0-3.49-3.52Zm-4.39 3.49a2.63 2.63 0 1 1-.02 5.25 2.63 2.63 0 0 1 .02-5.25ZM5.27 22.77a1.75 1.75 0 0 1-1.74-1.76l.01-3.7 5.2-4.59a2.63 2.63 0 0 1 3.6.12l3.54 3.56-6.43 6.39-4.18-.02Zm19.26-1.68a1.75 1.75 0 0 1-1.76 1.74l-10.85-.04 6.67-6.61a2.6 2.6 0 0 1 3.37 0l2.58 2.17-.01 2.74Z"
                class="group-hover:fill-white"
              />
            </svg>

            <span class="z-10">Cambiar el fondo</span>
          </button>
        </div>
        <div class="absolute -bottom-28 left-8 flex flex-col items-center w-80">
          <img
            class="rounded-full size-52 border-white border-8"
            [src]="imagePreview"
            alt="Foto de Perfil"
          />
          <div
            (click)="fileChooser()"
            class="absolute group bottom-3 right-16 bg-black rounded-full size-12 group overflow-hidden border border-black shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-white before:duration-500 hover:shadow-white hover:before:left-0 hover:before:w-full"
          >
            <input
              type="file"
              id="filechooser"
              name="filechooser"
              hidden
              (change)="onFileChange($event)"
            />

            <svg class="absolute m-auto inset-0 size-7" viewBox="0 0 29 21">
              <path
                d="M25.07 3.82h-3.7a.93.93 0 0 1-.6-.3l-1.61-2.44A2.84 2.84 0 0 0 16.95 0h-5.76a2.84 2.84 0 0 0-2.21 1.08L7.35 3.52c-.13.15-.33.3-.53.3v-.48c0-.25-.11-.5-.3-.67a1.02 1.02 0 0 0-.7-.28h-1.5c-.27 0-.52.1-.71.28a.93.93 0 0 0-.3.67v.48h-.24c-.8 0-1.56.3-2.12.84A2.8 2.8 0 0 0 .07 6.7v11.45c0 .76.31 1.48.88 2.02.56.54 1.32.84 2.12.84h22c.8 0 1.55-.3 2.12-.84a2.8 2.8 0 0 0 .88-2.02V6.68a2.8 2.8 0 0 0-.88-2.02 3.08 3.08 0 0 0-2.12-.84Zm-7.2 12.07a6.14 6.14 0 0 1-5.94.92 6 6 0 0 1-2.52-1.74 5.61 5.61 0 0 1-1.27-2.71c-.21.07-.45.06-.66 0a1 1 0 0 1-.51-.4.92.92 0 0 1 .14-1.18l1.25-1.2a1.02 1.02 0 0 1 1.41 0l1.25 1.2a.92.92 0 0 1 .22 1.04.97.97 0 0 1-.37.43 1.03 1.03 0 0 1-.68.15c.17.62.5 1.2.96 1.66a4.19 4.19 0 0 0 5.46.34 1.02 1.02 0 0 1 .73-.2 1.04 1.04 0 0 1 .68.34.94.94 0 0 1 .22.7.92.92 0 0 1-.37.65Zm3.15-3.76-1.25 1.2c-.19.17-.44.27-.7.27-.27 0-.52-.1-.71-.28l-1.25-1.2a.92.92 0 0 1-.2-1.09.97.97 0 0 1 .42-.41c.18-.1.4-.14.6-.11-.17-.63-.5-1.2-.96-1.67a4.18 4.18 0 0 0-5.47-.33 1.01 1.01 0 0 1-.74.24 1.04 1.04 0 0 1-.69-.35.94.94 0 0 1-.22-.71.92.92 0 0 1 .38-.65 6.14 6.14 0 0 1 5.94-.94 6 6 0 0 1 2.54 1.74 5.6 5.6 0 0 1 1.27 2.72c.21-.07.45-.07.66 0 .21.07.4.2.52.39a.92.92 0 0 1-.14 1.18Z"
                class="fill-white group-hover:fill-black"
              />
            </svg>
          </div>
        </div>
      </div>
      <section class="flex justify-center mt-2">
        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="w-1/2 flex flex-col p-8"
        >
          <h1 class="text-2xl text-primary font-semibold">Datos generales</h1>
          <div class="w-full flex mt-5 gap-x-5">
            <div class="flex flex-col w-1/2">
              <label for="">Nombre</label>
              <input
                id="name"
                name="name"
                formControlName="name"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.name }}"
                placeholder="Coloca tu nombre aquí"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="">Apellidos</label>
              <input
                id="lastname"
                name="lastname"
                formControlName="lastname"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.lastname }}"
                placeholder="Coloca tus apellidos aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Empresa</label>
              <input
                id="company"
                name="company"
                formControlName="company"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.company }}"
                placeholder="Coloca tu empresa aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Área</label>
              <input
                id="area"
                name="area"
                formControlName="area"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.area }}"
                placeholder="Coloca tu área aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Nivel</label>
              <input
                id="level"
                name="level"
                formControlName="level"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.level }}"
                placeholder="Coloca tu nivel aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Cargo</label>
              <input
                id="position"
                name="position"
                formControlName="position"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.position }}"
                placeholder="Coloca tu cargo aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Fecha de Nacimiento</label>
              <input
                id="birthdate"
                name="birthdate"
                formControlName="birthdate"
                class="border border-black rounded p-1 mt-2"
                type="date"
                value="{{ user.birthdate }}"
                placeholder="Coloca tu fecha de nacimiento aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Estado</label>
              <input
                id="state"
                name="state"
                formControlName="state"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.state }}"
                placeholder="Coloca tu estado aquí"
              />
            </div>
          </div>

          <div class="flex justify-center gap-5">
            <app-custom-button
              [hoverColor]="'white'"
              [color]="'orange'"
              [text]="'Actualizar Perfil'"
              [moreStyles]="'mt-10 w-40 justify-center'"
              [loading]="loading"
            />
            <app-custom-button
              (click)="cancel = true"
              [hoverColor]="'white'"
              [color]="'gray'"
              [text]="'Cancelar'"
              [moreStyles]="'mt-10'"
            />
          </div>
        </form>
      </section>
    </app-user-layout>
  `,
  styles: `
    .bg-profile {
      background-image: url('https://img.freepik.com/foto-gratis/paisaje-surrealista-3d-al-estilo-marte_1048-9878.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `,
})
export class ActualizarPerfilComponent {
  id = '';
  form: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  image: File | null = null;
  cancel = false;
  loading = false;

  user = {} as User;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      company: new FormControl(),
      area: new FormControl(),
      level: new FormControl(),
      position: new FormControl(),
      birthdate: new FormControl(),
      state: new FormControl(),
    });
  }

  fileChooser() {
    document.getElementById('filechooser')?.click();
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => (this.imagePreview = reader.result);
      this.image = file;
    }
  }

  onSubmit() {
    if (this.cancel) {
      this.router.navigate(['/mi-perfil']);
      return;
    }

    if (this.image)
      this.userService.updatePhoto(this.image, this.id).subscribe();

    this.loading = true;
    this.userService.updateUser(this.form.value, this.id).subscribe({
      next: () => this.router.navigate(['/mi-perfil']),
      error: () => (this.loading = false),
    });
  }

  ngOnInit() {
    this.id = this.authService.getInfoUser().sub;
    this.userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      this.imagePreview = result.imageUrl;
    });
  }
}
