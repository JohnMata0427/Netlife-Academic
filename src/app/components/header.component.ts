import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  template: `
    <header class="bg-[#0b0603] py-2 px-4 shadow-sm shadow-black">
      <nav class="flex">
        <div class="flex items-center w-full">
          <a class="pr-8" href="/home">
            <img class="h-9" src="/logo.webp" alt="Netlife Logo" />
          </a>
          <div class="flex gap-x-8">
            <a
              id="home"
              [ngClass]="{
                'text-primary': active === 'home',
                'text-white hover:text-primary': active !== 'home'
              }"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/home"
              >Inicio</a
            >

            <a
              id="mi-perfil"
              [ngClass]="{
                'text-primary': active === 'mi-perfil',
                'text-white hover:text-primary': active !== 'mi-perfil'
              }"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              id="mis-cursos"
              [ngClass]="{
                'text-primary': active === 'mis-cursos',
                'text-white hover:text-primary': active !== 'mis-cursos'
              }"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              id="mis-certificados"
              [ngClass]="{
                'text-primary': active === 'mis-certificados',
                'text-white hover:text-primary': active !== 'mis-certificados'
              }"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              href="/mis-certificados"
              >Mis Certificados</a
            >
          </div>
        </div>
        <div class="flex justify-end items-center w-full">
          <div class="flex justify-end items-center mr-4">
            <input
              type="search"
              id="search"
              name="search"
              class="w-96 py-1 px-3 rounded-2xl text-sm focus:outline-none border focus:border-primary"
              type="text"
              placeholder="Buscar más cursos"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000"
              stroke-width="2.5"
              class="absolute mr-3 icon icon-tabler icon-tabler-search cursor-pointer hover:scale-105 size-4"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" />
            </svg>
          </div>
          <div class="relative flex items-center gap-x-3">
            <button
              (click)="showNotifications = !showNotifications"
              class="hover:scale-110"
            >
              <img
                class="size-5"
                src="/icons/header/notify.svg"
                alt="Notificaciones"
              />
            </button>
            @if (showNotifications) {
            <div
              class="w-56 flex flex-col z-10 absolute top-11 right-24 bg-white rounded-md shadow shadow-black/60 p-4 gap-y-1 cursor-default"
            >
              <strong>Proximamente...</strong>
            </div>
            }
            <button
              (click)="showMessages = !showMessages"
              class="hover:scale-110"
            >
              <img
                class="size-5"
                src="/icons/header/message.svg"
                alt="Mensajes"
              />
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
                class="rounded-full size-8 border-white border-[3px]"
                src="{{ profile || '/profile.webp' }}"
                alt="Perfil del Usuario"
              />
              <img
                class="size-3"
                src="/icons/header/deploy-info.svg"
                alt="Desplegar información"
              />
            </button>
            @if (showMenu) {
            <div
              class="w-56 flex flex-col z-10 absolute top-12 right-2 bg-white rounded-md shadow shadow-black/60 p-4 gap-y-1 cursor-default"
            >
              <div class="flex flex-col items-center">
                <strong class="text-center">{{ username }}</strong>
                <span class="text-xs">{{ email }}</span>
              </div>
              <hr class="border-2" />
              @if (role === 'ADMIN') {
              <button
                (click)="router.navigate(['/admin/dashboard'])"
                class="text-sm text-black hover:bg-quinary text-start  flex items-center gap-x-2 rounded-lg py-1 px-2"
              >
                Admin Dashboard
              </button>
              }
              <button
                (click)="router.navigate(['/mi-perfil'])"
                class="text-sm text-black hover:bg-quinary text-start  flex items-center gap-x-2 rounded-lg py-1 px-2"
              >
                <img
                  class="size-4"
                  src="/icons/forms/user.svg"
                  alt="User Icon"
                />
                Mi Perfil
              </button>
              <button
                (click)="router.navigate(['/actualizar-informacion'])"
                class="text-sm text-black hover:bg-quinary text-start flex items-center gap-x-2 rounded-lg py-1 px-2"
              >
                <img
                  class="size-4"
                  src="/icons/forms/user.svg"
                  alt="User Icon"
                />
                Configurar Perfil
              </button>
              <button
                class="text-sm text-black hover:bg-quinary text-start rounded-lg py-1 px-2"
              >
                Calendario de Tareas
              </button>
              <button
                class="flex items-center gap-2 text-sm texttertiary hover:bg-quinary text-start rounded-lg py-1 px-2"
                (click)="logout()"
              >
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 416 352"
                >
                  <path
                    d="M112 176a16 16 0 0 1 16-16h144V56c0-32-33.79-56-64-56H56A56.06 56.06 0 0 0 0 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V192H128a16 16 0 0 1-16-16Zm299.31-11.31-80-80a16 16 0 0 0-22.62 22.62L361.37 160H272v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62Z"
                    class="filltertiary"
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
  active!: string;
  profile!: string;
  username!: string;
  email!: string;
  role!: string;
  showMenu = false;
  showMessages = false;
  showNotifications = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showMenu = false;
    }
  }

  constructor(
    public authService: AuthService,
    public router: Router,
    private activatedRouter: ActivatedRoute,
    private title: Title,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRouter.url.subscribe(([url]) => {
      this.active = url['path'];
    });

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
