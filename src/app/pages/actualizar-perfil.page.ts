import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@/services/user.service';
import { User } from '@/interfaces/user.interface';
import { AuthService } from '@/services/auth.service';
import { UserLayout } from '@/layouts/user.layout';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [ReactiveFormsModule, UserLayout, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <div class="relative">
          <div class="bg-profile h-96 w-full"></div>
          <app-button-component
            color="white"
            hoverColor="black"
            text="Cambiar el fondo"
            moreStyles="gap-2"
            class="absolute top-3 right-3"
          >
            <svg class="z-10 size-7" viewBox="0 0 29 29">
              <path
                d="M22.8 3.6H5.3A3.5 3.5 0 0 0 1.8 7v14a3.5 3.5 0 0 0 3.5 3.5h17.5a3.5 3.5 0 0 0 3.5-3.4v-14a3.5 3.5 0 0 0-3.5-3.5ZM18.4 7a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2ZM5.3 22.8A1.8 1.8 0 0 1 3.5 21v-3.7l5.2-4.6a2.6 2.6 0 0 1 3.6.1l3.6 3.6-6.5 6.4H5.3ZM24.5 21a1.8 1.8 0 0 1-1.7 1.7H11.9l6.7-6.6a2.6 2.6 0 0 1 3.4 0l2.5 2.2V21Z"
                class="group-hover:fill-white"
              />
            </svg>
          </app-button-component>
        </div>
        <div
          class="absolute inset-x-0 -bottom-28 mx-auto flex w-80 flex-col items-center lg:left-8 lg:mx-0"
        >
          <img
            class="size-52 rounded-full border-8 border-white"
            [src]="imagePreview"
            alt="Foto de Perfil"
          />
          <label>
            <input
              type="file"
              id="filechooser"
              name="filechooser"
              accept="image/*"
              hidden
              (change)="onFileChange($event)"
            />

            <div
              class="group absolute right-16 bottom-3 grid size-12 cursor-pointer place-content-center overflow-hidden rounded-full border border-black bg-black shadow-2xl before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:w-0 before:bg-white before:duration-500 hover:shadow-white hover:before:left-0 hover:before:w-full"
            >
              <svg class="z-10 size-7" viewBox="0 0 29 21">
                <path
                  d="M25 3.8h-3.6a1 1 0 0 1-.6-.3l-1.6-2.4A2.8 2.8 0 0 0 16.9 0h-5.7A2.8 2.8 0 0 0 9 1L7.3 3.6c0 .2-.3.3-.5.3v-.5a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.3H4.3a1 1 0 0 0-.7.3 1 1 0 0 0-.3.6v.5h-.2a3 3 0 0 0-2.2.9 2.8 2.8 0 0 0-.8 2v11.4c0 .8.3 1.5.9 2a3 3 0 0 0 2 1h22a3 3 0 0 0 2.2-1 2.8 2.8 0 0 0 .9-2V6.7a2.8 2.8 0 0 0-1-2 3 3 0 0 0-2-.9Zm-7.1 12a6.1 6.1 0 0 1-6 1 6 6 0 0 1-2.5-1.7 5.6 5.6 0 0 1-1.3-2.7h-.6A1 1 0 0 1 7 12a1 1 0 0 1 .1-1.2l1.3-1.2a1 1 0 0 1 1.4 0l1.2 1.2a1 1 0 0 1 .2 1 1 1 0 0 1-.3.5 1 1 0 0 1-.7.1c.2.6.5 1.2 1 1.7a4.2 4.2 0 0 0 5.4.3 1 1 0 0 1 .7-.2 1 1 0 0 1 .7.3 1 1 0 0 1 .2.7 1 1 0 0 1-.3.7Zm3.1-3.7-1.2 1.2a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L17 12.1a1 1 0 0 1-.2-1 1 1 0 0 1 .4-.5h.6c-.1-.7-.5-1.3-1-1.8a4.2 4.2 0 0 0-5.4-.3 1 1 0 0 1-.7.3 1 1 0 0 1-.7-.4 1 1 0 0 1-.2-.7 1 1 0 0 1 .3-.7 6.1 6.1 0 0 1 6-.9 6 6 0 0 1 2.5 1.7 5.6 5.6 0 0 1 1.3 2.8h.6c.3 0 .4.2.6.4a1 1 0 0 1-.1 1Z"
                  class="fill-white group-hover:fill-black"
                />
              </svg>
            </div>
          </label>
        </div>
      </div>
      <section class="mt-28 flex justify-center p-8 lg:mt-2 lg:ml-16">
        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="flex flex-col lg:w-1/2"
        >
          <h1 class="text-primary text-2xl font-semibold">Datos generales</h1>
          <div class="mt-5 flex w-full gap-5">
            <div class="flex w-1/2 flex-col">
              <label for="">Nombre</label>
              <input
                id="name"
                name="name"
                formControlName="name"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.name"
                placeholder="Coloca tu nombre aquí"
              />
            </div>
            <div class="flex w-1/2 flex-col">
              <label for="">Apellidos</label>
              <input
                id="lastname"
                name="lastname"
                formControlName="lastname"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.lastname"
                placeholder="Coloca tus apellidos aquí"
              />
            </div>
          </div>
          <div class="mt-5 flex gap-5">
            <div class="flex w-full flex-col">
              <label for="">Empresa</label>
              <input
                id="company"
                name="company"
                formControlName="company"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.company"
                placeholder="Coloca tu empresa aquí"
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="">Área</label>
              <input
                id="area"
                name="area"
                formControlName="area"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.area"
                placeholder="Coloca tu área aquí"
              />
            </div>
          </div>
          <div class="mt-5 flex gap-5">
            <div class="flex w-full flex-col">
              <label for="">Nivel</label>
              <input
                id="level"
                name="level"
                formControlName="level"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.level"
                placeholder="Coloca tu nivel aquí"
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="">Cargo</label>
              <input
                id="position"
                name="position"
                formControlName="position"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.position"
                placeholder="Coloca tu cargo aquí"
              />
            </div>
          </div>
          <div class="mt-5 flex gap-5">
            <div class="flex w-full flex-col">
              <label for="">Fecha de Nacimiento</label>
              <input
                id="birthdate"
                name="birthdate"
                formControlName="birthdate"
                class="mt-2 rounded-lg border border-black p-1"
                type="date"
                [value]="user.birthdate"
                placeholder="Coloca tu fecha de nacimiento aquí"
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="">Estado</label>
              <input
                id="state"
                name="state"
                formControlName="state"
                class="mt-2 rounded-lg border border-black p-1"
                type="text"
                [value]="user.state"
                placeholder="Coloca tu estado aquí"
              />
            </div>
          </div>

          <div class="flex justify-center gap-5">
            <app-button-component
              color="orange"
              text="Actualizar Perfil"
              moreStyles="mt-10 w-40 justify-center"
              [loading]="loading"
            />
            <app-button-component
              (click)="cancel = true"
              color="gray"
              text="Cancelar"
              moreStyles="mt-10"
            />
          </div>
        </form>
      </section>
    </app-user-layout>
  `,
  styles: `
    .bg-profile {
      background-image: url('/banner-profile.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `,
})
export class ActualizarPerfilPage {
  public form!: FormGroup;
  public imagePreview: string | ArrayBuffer | null = null;
  public cancel = false;
  public loading = false;
  public user!: User;

  private id!: string;
  private image!: File;
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);

  public onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => (this.imagePreview = reader.result);
      this.image = file;
    }
  }

  public onSubmit() {
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

  public ngOnInit() {
    this.id = this.authService.getInfoUser().sub;
    this.userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      this.imagePreview = result.imageUrl;

      this.form = new FormGroup({
        name: new FormControl(result.name),
        lastname: new FormControl(result.lastname),
        company: new FormControl(result.company),
        area: new FormControl(result.area),
        level: new FormControl(result.level),
        position: new FormControl(result.position),
        birthdate: new FormControl(result.birthdate ?? null),
        state: new FormControl(result.state ?? null),
      });
    });
  }
}
