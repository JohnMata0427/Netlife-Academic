import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { UserService } from '@netlifeacademic/services/user.service';
import { NgClass } from '@angular/common';
import { UserLayout } from '../layouts/user-layout.component';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [UserLayout, NgClass],
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
          <p class="text-sm mt-2">{{ user.email }}</p>
          <button
            (click)="router.navigate(['/actualizar-informacion'])"
            class="mt-4 text-md font-medium rounded-md h-10 hover:before:bg-redborder-red-500 relative overflow-hidden border border-[#FD6A00] bg-white px-3 text-[#FD6A00] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#FD6A00] before:transition-all before:duration-500 hover:text-white hover:shadow-[#FD6A00] hover:before:left-0 hover:before:w-full"
          >
            <span class="relative z-10"> Editar Perfil </span>
          </button>
        </div>
      </div>
      <section class="ml-[360px] mt-4">
        <div class="flex gap-1">
          <div>
            <button
              (click)="selectedButton = 'sobre-mi'"
              class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg hover:before:bg-redborder-red-500 relative overflow-hidden border border-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full"
            >
              <span class="relative z-10"> Sobre mí </span>
            </button>
          </div>
          <div>
            <button
              (click)="selectedButton = 'mis-cursos'"
              class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg hover:before:bg-redborder-red-500 relative overflow-hidden border border-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full"
            >
              <span class="relative z-10"> Mis Cursos </span>
            </button>
          </div>
          <div>
            <button
              (click)="selectedButton = 'mis-certificados'"
              class="bg-black text-white text-sm py-2 px-12 rounded-tr-lg hover:before:bg-redborder-red-500 relative overflow-hidden border border-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full"
            >
              <span class="relative z-10"> Mis Certificados </span>
            </button>
          </div>
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
              {{ birthdate.toDateString() }}
            </li>
            <li>
              <strong>Fecha de Ingreso a la Organización:</strong>
              {{ date.toDateString() }}
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
  date = new Date();
  birthdate = new Date();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.getUserById(this.authService.getSubFromToken()).subscribe({
      next: (result) => {
        this.user = result;
        this.date = result.createdAt ? new Date(result.createdAt) : new Date();
        this.birthdate = result.birthdate
          ? new Date(result.birthdate)
          : new Date();

        this.date.setHours(this.date.getHours() + 5);
        this.birthdate.setHours(this.birthdate.getHours() + 5);
      },
    });
  }
}
