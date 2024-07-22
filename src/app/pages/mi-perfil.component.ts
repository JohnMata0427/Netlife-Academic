import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { UserService } from '@netlifeacademic/services/user.service';
import { NgClass } from '@angular/common';
import { UserLayout } from '../layouts/user-layout.component';
import { CustomButtonComponent } from "../components/custom-button.component";

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [UserLayout, NgClass, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <img
          class="w-full h-auto"
          src="profile/background-profile.png"
          alt="Portada del Perfil"
        />
        <div
          class="absolute -bottom-[216px] left-16 flex flex-col items-center"
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
      <section class="ml-[360px] mt-4">
        <div class="flex gap-1">

          <app-custom-button
          (click)="selectedButton = 'sobre-mi'"
          [hoverColor]="'white'"
          [color]="'black'"
          [text]="'Sobre Mí'"
          [moreStyles]="'w-44 rounded-none rounded-tr-lg'"
          />

          <app-custom-button
          (click)="selectedButton = 'mis-cursos'"
          [hoverColor]="'white'"
          [color]="'black'"
          [text]="'Mis Cursos'"
          [moreStyles]="'w-44 rounded-none rounded-tr-lg'"
          />

          <app-custom-button
          (click)="selectedButton = 'mis-certificados'"
          [hoverColor]="'white'"
          [color]="'black'"
          [text]="'Mis Certificados'"
          [moreStyles]="'w-44 rounded-none rounded-tr-lg'"
          />
          
        </div>
        <div
          class="border border-solid border-black min-h-52 mr-16 rounded mt-1 p-4"
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
    this.userService.getUserById(this.authService.getSubFromToken()).subscribe({
      next: (result) => {
        this.user = result;
        this.date = result.createdAt ? new Date(result.createdAt) : null;
        this.birthdate = result.birthdate
          ? new Date(result.birthdate)
          : null;

        this.date?.setHours(this.date.getHours() + 5);
        this.birthdate?.setHours(this.birthdate.getHours() + 5);
      },
    });
  }
}
