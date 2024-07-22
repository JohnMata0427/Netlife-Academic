import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { UserLayout } from '../layouts/user-layout.component';
import { CustomButtonComponent } from '../components/custom-button.component';

@Component({
  selector: 'app-actualizar-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, UserLayout, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <div class="relative">
          <img
            class="w-full h-auto"
            src="profile/background-profile.png"
            alt="Portada del Perfil"
          />
          <button
            class="absolute bottom-4 right-12 flex items-center justify-center gap-x-2 px-4 text-md rounded-md h-10 hover:before:bg-redborder-red-500 overflow-hidden border border-white bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full text-sm"
          >
            <img src="icons/profile/change-background.svg" alt="" />
            <span class="relative z-10">Cambiar el fondo</span>
          </button>
        </div>
        <div class="absolute -bottom-28 left-16 flex flex-col items-center">
          <img
            class="rounded-full size-52 border-white border-8"
            [src]="imagePreview"
            alt="Foto de Perfil"
          />
          <div
            (click)="fileChooser()"
            class="absolute bottom-3 right-3 bg-black rounded-full size-12 hover:bg-black/90 transition-all"
          >
            <input
              id="filechooser"
              class="hidden"
              type="file"
              (change)="onFileChange($event)"
            />
            <img
              class="absolute bottom-[14px] right-[9px]"
              src="icons/profile/camera.svg"
              alt="Botón Actualizar Perfil"
            />
          </div>
        </div>
      </div>
      <section class="flex justify-center mt-2">
        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="w-1/2 flex flex-col p-8"
        >
          <h1 class="text-2xl text-[#FD6A00] font-semibold">Datos generales</h1>
          <div class="w-full flex mt-5 gap-x-5">
            <div class="flex flex-col w-1/2">
              <label for="">Nombre</label>
              <input
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
                formControlName="state"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.state }}"
                placeholder="Coloca tu estado aquí"
              />
            </div>
          </div>

          <div class="flex justify-center gap-5">
            <!-- <button
              class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-2 px-8 rounded-md mt-10 font-medium text-md"
            >
              Actualizar Perfil
            </button> -->

            <app-custom-button
              [hoverColor]="'white'"
              [color]="'orange'"
              [text]="'Actualizar Perfil'"
              [moreStyles]="'mt-10'"
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
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      this.image = file;
    }
  }

  onSubmit() {
    this.loading = true;
    if (this.cancel) {
      this.router.navigate(['/mi-perfil']);
      return;
    }

    if (this.image)
      this.userService.updatePhoto(this.image, this.id).subscribe();

    this.userService.updateUser(this.form.value, this.id).subscribe({
      next: () => {
        this.router.navigate(['/mi-perfil']);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit() {
    this.id = this.authService.getSubFromToken();
    this.userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      this.imagePreview = result.imageUrl;
    });
  }
}
