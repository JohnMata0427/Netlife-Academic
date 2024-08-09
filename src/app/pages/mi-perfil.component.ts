import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { NgClass } from '@angular/common';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [UserLayout, NgClass, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <!-- <img
          class="w-full h-auto"
          src="profile/background-profile.png"
          alt="Portada del Perfil"
        /> -->
        <div class="w-screen h-96 bg-profile"></div>
        <div
          class="absolute -bottom-[216px] md:left-16 inset-x-0 md:right-auto flex flex-col items-center"
        >
          <img
            class="rounded-full size-52 border-white border-8"
            src="{{ user.imageUrl || 'profile.png' }}"
            alt="Foto de Perfil"
          />
          <h4 class="text-xl font-extrabold mt-4">
            {{ user.name + ' ' + user.lastname }}
          </h4>
          <small>{{ user.state || '' }}</small>
          <p class="text-sm mt-2">{{ user.email }}</p>
          <app-custom-button
            (click)="router.navigate(['/actualizar-informacion'])"
            [hoverColor]="'white'"
            [color]="'orange'"
            [text]="'Editar Perfil'"
            [moreStyles]="'mt-4'"
          />
        </div>
      </div>
      <section
        class="md:ml-[360px] md:mt-4 mb-20 flex flex-col items-center mt-72 md:items-start"
      >
        <div class="flex gap-x-1">
          <app-custom-button
            (click)="selectedButton = 'sobre-mi'"
            [hoverColor]="'white'"
            [color]="'black'"
            [text]="'Sobre Mí'"
            [moreStyles]="'w-full rounded-none rounded-tr-lg'"
          />

          <app-custom-button
            (click)="selectedButton = 'mis-cursos'"
            [hoverColor]="'white'"
            [color]="'black'"
            [text]="'Mis Cursos'"
            [moreStyles]="'w-full rounded-none rounded-tr-lg'"
          />

          <app-custom-button
            (click)="selectedButton = 'mis-certificados'"
            [hoverColor]="'white'"
            [color]="'black'"
            [text]="'Mis Certificados'"
            [moreStyles]="'w-full rounded-none rounded-tr-lg'"
          />
        </div>
        <div
          class="border border-solid border-black min-h-52 min-w-[365px] w-[90%] md:mr-16 rounded mt-1 p-4"
        >
          @if (selectedButton === 'sobre-mi') {
          <ul>
            <li><strong>Rol:</strong> {{ user.role }}</li>
            <li><strong>Compañia:</strong> {{ user.company }}</li>
            <li><strong>Area:</strong> {{ user.area }}</li>
            <li><strong>Nivel:</strong> {{ user.level }}</li>
            <li><strong>Cargo:</strong> {{ user.position }}</li>
            <li>
              <strong>Fecha de Cumpleaños:</strong>
              {{ birthdate?.toDateString() }}
            </li>
            <li>
              <strong>Fecha de Ingreso a la Organización:</strong>
              {{ date?.toDateString() }}
            </li>
          </ul>
          } @else if (selectedButton === 'mis-cursos') {
          <ul>
            <li>Redes de Computadores</li>
            <li>Lógica de Programación</li>
            <li>Análisis de Datos</li>
          </ul>
          } @else {
          <img src="courses/analisis.png" alt="" />
          }
        </div>
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
export class MiPerfilComponent {
  selectedButton = 'sobre-mi';
  user = {} as User;
  date = null as Date | null;
  birthdate = null as Date | null;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.getUserById(this.authService.getInfoUser().sub).subscribe({
      next: (result) => {
        this.user = result;
        this.date = result.createdAt ? new Date(result.createdAt) : null;
        this.birthdate = result.birthdate ? new Date(result.birthdate) : null;

        this.date?.setHours(this.date.getHours() + 5);
        this.birthdate?.setHours(this.birthdate.getHours() + 5);
      },
    });
  }
}
