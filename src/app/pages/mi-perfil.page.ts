import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { User } from '@/interfaces/user.interface';
import { UserService } from '@/services/user.service';

import { UserLayout } from '@/layouts/user.layout';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [UserLayout, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <div
          class="bg-profile h-96 w-full bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          class="absolute inset-x-0 -bottom-56 mx-auto flex w-80 flex-col items-center md:left-8 md:mx-0"
        >
          <img
            class="size-52 rounded-full border-8 border-white"
            alt="Foto de Perfil"
            [src]="user.imageUrl || '/profile.webp'"
          />
          <div class="flex flex-col items-center justify-between">
            <h4 class="text-center text-xl font-extrabold">
              {{ user.name + ' ' + user.lastname }}
            </h4>
            <small class="my-1">{{ user.state }}</small>
            <p class="text-sm">{{ user.email }}</p>
            <app-button-component
              text="Editar Perfil"
              moreStyles="mt-4"
              color="orange"
              (click)="router.navigate(['/actualizar-informacion'])"
            />
          </div>
        </div>
      </div>
      <section
        class="mx-16 mt-72 flex flex-col items-center md:mt-4 md:ml-96"
      >
        <div class="flex w-full gap-1">
          <app-button-component
            text="Sobre Mí"
            moreStyles="w-full rounded-none rounded-tr-lg"
            (click)="selectedButton = 'sobre-mi'"
          />

          <app-button-component
            text="Mis Cursos"
            moreStyles="w-full rounded-none rounded-tr-lg"
            (click)="selectedButton = 'mis-cursos'"
          />

          <app-button-component
            text="Mis Certificados"
            moreStyles="w-full rounded-none rounded-tr-lg"
            (click)="selectedButton = 'mis-certificados'"
          />
        </div>
        <div
          class="mt-1 min-h-52 w-full min-w-[365px] rounded-lg border border-solid border-black p-4"
        >
          @if (selectedButton === 'sobre-mi') {
            <ul>
              <li><strong>Rol:</strong>{{ user.role }}</li>
              <li><strong>Compañia:</strong>{{ user.company }}</li>
              <li><strong>Area:</strong>{{ user.area }}</li>
              <li><strong>Nivel:</strong>{{ user.level }}</li>
              <li><strong>Cargo:</strong>{{ user.position }}</li>
              <li>
                <strong>Fecha de Cumpleaños:</strong>
                {{ birthdate }}
              </li>
              <li>
                <strong>Fecha de Ingreso a la Organización:</strong>
                {{ date }}
              </li>
            </ul>
          } @else if (selectedButton === 'mis-cursos') {
            <ul>
              <li>Redes de Computadores</li>
              <li>Lógica de Programación</li>
              <li>Análisis de Datos</li>
            </ul>
          } @else {
            <img src="/courses/analisis.png" alt="" />
          }
        </div>
      </section>
    </app-user-layout>
  `,
  styles: `
    .bg-profile {
      background-image: url('/banner-profile.webp');
    }
  `,
})
export class MiPerfilPage {
  public selectedButton = 'sobre-mi';
  public user!: User;
  public date!: string;
  public birthdate!: string;
  public router = inject(Router);

  private authService = inject(AuthService);
  private userService = inject(UserService);

  public ngOnInit() {
    this.userService.getUserById(this.authService.getInfoUser().sub).subscribe({
      next: (result) => {
        this.user = result;

        let formatDate = new Date(result.createdAt);

        this.date = Intl.DateTimeFormat('es-EC', { dateStyle: 'long' }).format(
          formatDate.setMinutes(
            formatDate.getMinutes() + formatDate.getTimezoneOffset(),
          ),
        );

        if (result.birthdate) {
          formatDate = new Date(result.birthdate);

          this.birthdate = Intl.DateTimeFormat('es-EC', {
            dateStyle: 'long',
          }).format(
            formatDate.setMinutes(
              formatDate.getMinutes() + formatDate.getTimezoneOffset(),
            ),
          );
        }
      },
    });
  }
}
