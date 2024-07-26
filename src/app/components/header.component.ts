import { NgClass } from '@angular/common';
import { Component, HostListener, inject, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { UserService } from '@netlifeacademic/services/user.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  template: `
    <header class="bg-[#0b0603] py-2 px-4 shadow-sm shadow-black">
      <nav class="flex">
        <div class="flex items-center w-full">
          <a class="pr-8" href="/home">
            <img class="h-9" src="logo.jpg" alt="Netlife Logo" />
          </a>
          <div class="flex gap-x-8">
            <!-- <a
              id="home"
              class="text-white hover:text-[#ec7434] text-sm"
              href="/home"
              >Inicio</a
            > -->
            <a
              id="home"
              class="text-white hover:text-[#ec7434] text-sm relative inline cursor-pointer font-medium before:bg-[#ec7434]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/home"
              >Inicio</a
            >

            <a
              id="mi-perfil"
              class="text-white hover:text-[#ec7434] text-sm relative inline cursor-pointer font-medium before:bg-[#ec7434]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              id="mis-cursos"
              class="text-white hover:text-[#ec7434] text-sm relative inline cursor-pointer font-medium before:bg-[#ec7434]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              id="mis-certificados"
              class="text-white hover:text-[#ec7434] text-sm relative inline cursor-pointer font-medium before:bg-[#ec7434]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mis-certificados"
              >Mis Certificados</a
            >
          </div>
        </div>
        <div class="flex justify-end items-center w-full">
          <div class="flex justify-end items-center mr-4">
            <input
              class="w-96 py-1 px-3 rounded-2xl text-sm focus:outline-none border focus:border-[#ec7434]"
              type="text"
              placeholder="Buscar más cursos"
            />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute mr-3 icon icon-tabler icon-tabler-search cursor-pointer hover:scale-105"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
          </div>
          <div class="relative flex items-center gap-x-3">
            <button (click)="showNotifications = !showNotifications" class="hover:scale-110">
              <img src="icons/header/notify.svg" alt="Notificaciones" />
            </button>
            @if (showNotifications) {
              <div
                class="w-56 flex flex-col z-10 absolute top-11 right-24 bg-white rounded-md shadow shadow-black/60 p-4 gap-y-1 cursor-default"
              >
                  <strong>Proximamente...</strong>
              </div>
              }
            <button (click)="showMessages = !showMessages" class="hover:scale-110">
              <img src="icons/header/message.svg" alt="Mensajes" />
            </button>
            @if (showMessages) {
              <div
                class="w-56 flex flex-col z-10 absolute top-11 right-16 bg-white rounded-md shadow shadow-black/60 p-4 gap-y-1 cursor-default"
              >
                  <strong>Proximamente...</strong>
              </div>
              }
            <button
              (click)="showMenu = !showMenu"
              class="relative flex items-center gap-x-2 hover:scale-105"
            >
              <img
                class="rounded-full size-9 border-white border-[3px]"
                src="{{ profile }}"
                alt="Perfil del Usuario"
              />
              <img
                src="icons/header/deploy-info.svg"
                alt="Desplegar información"
              />
            </button>
            @if (showMenu) {
              <div
                class="w-56 flex flex-col z-10 absolute top-12 right-2 bg-white rounded-md shadow shadow-black/60 p-4 gap-y-1 cursor-default"
              >
                <div class="flex flex-col items-center">
                  <strong>{{ username }}</strong>
                  <span class="text-xs">{{ email }}</span>
                </div>
                <hr />
                @if (role === 'ADMIN') {
                <button
                  (click)="router.navigate(['/admin/dashboard'])"
                  class="text-sm text-black hover:bg-gray-300 text-start  flex items-center gap-x-2 rounded-lg py-1 px-2"
                >
                  Admin Dashboard
                </button>
                }
                <button
                  (click)="router.navigate(['/mi-perfil'])"
                  class="text-sm text-black hover:bg-gray-300 text-start  flex items-center gap-x-2 rounded-lg py-1 px-2"
                >
                  <img class="size-4" src="icons/forms/user.svg" alt="User Icon" />
                  Mi Perfil
                </button>
                <button
                  (click)="router.navigate(['/actualizar-informacion'])"
                  class="text-sm text-black hover:bg-gray-300 text-start flex items-center gap-x-2 rounded-lg py-1 px-2"
                >
                  <img class="size-4" src="icons/forms/user.svg" alt="User Icon" />
                  Configurar Perfil
                </button>
                <button
                  class="text-sm text-black hover:bg-gray-300 text-start rounded-lg py-1 px-2"
                >
                  Calendario de Tareas
                </button>
                <button
                  class="flex items-center gap-2 text-sm text-red-700 hover:bg-gray-300 text-start rounded-lg py-1 px-2"
                  (click)="authService.logout()"
                >
                  <svg
                    width="20"
                    viewBox="0 0 416 352"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-red-700"
                      d="M112 176C112 171.757 113.686 167.687 116.686 164.686C119.687 161.686 123.757 160 128 160H272V56C272 24 238.21 0 208 0H56C41.1528 0.0158823 26.9182 5.92097 16.4196 16.4196C5.92097 26.9182 0.0158823 41.1528 0 56V296C0.0158823 310.847 5.92097 325.082 16.4196 335.58C26.9182 346.079 41.1528 351.984 56 352H216C230.847 351.984 245.082 346.079 255.58 335.58C266.079 325.082 271.984 310.847 272 296V192H128C123.757 192 119.687 190.314 116.686 187.314C113.686 184.313 112 180.243 112 176ZM411.31 164.69L331.31 84.69C328.285 81.8161 324.257 80.2376 320.085 80.291C315.913 80.3444 311.926 82.0255 308.976 84.976C306.026 87.9264 304.344 91.9126 304.291 96.0848C304.238 100.257 305.816 104.285 308.69 107.31L361.37 160H272V192H361.37L308.69 244.69C307.142 246.161 305.904 247.927 305.049 249.884C304.194 251.841 303.739 253.949 303.712 256.085C303.684 258.22 304.085 260.34 304.889 262.318C305.694 264.296 306.887 266.093 308.397 267.603C309.907 269.113 311.704 270.306 313.682 271.111C315.66 271.915 317.78 272.316 319.915 272.288C322.051 272.261 324.159 271.806 326.116 270.951C328.073 270.096 329.839 268.858 331.31 267.31L411.31 187.31C414.308 184.31 415.993 180.242 415.993 176C415.993 171.758 414.308 167.69 411.31 164.69Z"
                    />
                  </svg>
                  Cerrar Sesión
                </button>
              </div>
              }
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  active = '';
  activeLink: any;
  profile = '';
  username = '';
  email = '';
  userService = inject(UserService);
  authService = inject(AuthService);
  showMenu = false;
  showNotifications = false;
  showMessages = false;
  role = '';

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.relative');
    if (!clickedInside) {
      this.showMenu = false;
    }
  }

  constructor(
    private activatedRouter: ActivatedRoute,
    public router: Router,
    private title: Title
  ) {
    this.activatedRouter.url.subscribe((url) => {
      console.log(url);
      this.active = url[0]['path'];
    });
  }

  ngOnInit() {
    document
      .getElementById(this.active)
      ?.classList.remove(
        'text-white',
        'hover:text-[#ec7434]',
      );
    document.getElementById(this.active)?.classList.add('text-[#ec7434]');
    this.title.setTitle(
      this.active
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + ' | Netlife Academic'
    );

    this.userService
      .getUserById(this.authService.getInfoUser().sub)
      .subscribe(({ imageUrl, name, lastname, email, role }) => {
        this.profile = imageUrl as string;
        this.username = name + ' ' + lastname;
        this.email = email as string;
        this.role = role as string;
      });
  }
}
