import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-[#0b0603] py-2 px-4 shadow-sm shadow-black">
      <nav class="flex relative">
        <button class="lg:hidden " (click)="mostrarHamburger()">
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 27"
          >
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M2 2h26M2 13.5h26M2 25h26"
            />
          </svg>
        </button>
        @if (showHamburguer) {
          <div class="bg-white size-48 absolute -bottom-52 rounded-lg p-4 z-30">
            <a href="/home">
              <img src="/NetlifeLogo.webp " alt="Netlife Logo" />
            </a>
            <hr class="border-quinary border-[1px] my-1">
            <ul class="text-sm flex flex-col gap-2 *:flex *:gap-2 ">
              <li>
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M16.25 6.37V.71h-3.13v2.61L10 0 0 10.71h2.5V20h5.63v-7.14h3.74V20h5.63v-9.29H20l-3.75-4.34Z"
                  /></svg
                ><a href="/home">Inicio</a>
              </li>
              <li>
                <svg class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M13.68 1.45A5.14 5.14 0 0 0 10 0C8.55 0 7.24.51 6.3 1.45a4.52 4.52 0 0 0-1.28 3.6C5.22 7.78 7.46 10 10 10c2.54 0 4.77-2.22 4.98-4.95a4.5 4.5 0 0 0-1.3-3.6ZM18.46 20H1.54c-.22 0-.44-.04-.64-.13a1.5 1.5 0 0 1-.87-1.67 7.64 7.64 0 0 1 3.66-5.08c1.77-1.09 4.01-1.7 6.31-1.7s4.54.61 6.3 1.7a7.64 7.64 0 0 1 3.67 5.08 1.5 1.5 0 0 1-.87 1.67c-.2.09-.42.13-.64.13Z"
                  /></svg
                ><a href="/mi-perfil">Mi perfil</a>
              </li>
              <li>
                <svg class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M18.89 4.66a.19.19 0 0 0 .07-.07.17.17 0 0 0 0-.18.19.19 0 0 0-.07-.06L11.55.39a3.27 3.27 0 0 0-3.1 0L1.11 4.35a.19.19 0 0 0-.07.06.17.17 0 0 0 0 .18l.07.07 8.8 4.8a.2.2 0 0 0 .19 0l8.79-4.8ZM.29 5.87a.2.2 0 0 0-.2 0 .19.19 0 0 0-.06.07.17.17 0 0 0-.03.09v7.76c0 .37.1.74.3 1.06.2.33.5.6.85.79l7.8 4.34a.2.2 0 0 0 .18 0 .19.19 0 0 0 .07-.07.17.17 0 0 0 .03-.09v-9c0-.04 0-.07-.03-.1a.19.19 0 0 0-.07-.06L.3 5.87Zm10.48 4.98v8.97c0 .03 0 .06.03.09.01.03.04.05.07.06a.2.2 0 0 0 .19 0l7.8-4.34c.34-.18.63-.45.83-.78.2-.32.3-.69.31-1.06V6.03c0-.04 0-.07-.03-.1a.19.19 0 0 0-.07-.06.2.2 0 0 0-.19 0l-8.84 4.82a.19.19 0 0 0-.07.07.17.17 0 0 0-.03.09Z"
                  /></svg
                ><a href="/mis-cursos">Mis cursos</a>
              </li>
              <li>
                <svg class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 20"
                >
                  <path
                    fill="#000"
                    d="M9 13.18a5.81 5.81 0 0 1-1.08 0 6.19 6.19 0 0 1-2.73-.96 7.02 7.02 0 0 1-2.17-2.2.14.14 0 0 0-.15 0 .16.16 0 0 0-.05.07l-2.73 5.5a.75.75 0 0 0-.01.67c.05.1.13.2.23.25.1.06.2.09.3.09h2.97c.1 0 .2.02.3.08.08.05.16.13.21.23l1.47 2.75c.05.1.13.19.22.25.1.06.2.09.3.09a.67.67 0 0 0 .55-.4l2.51-6.18a.19.19 0 0 0-.01-.16.16.16 0 0 0-.06-.06.14.14 0 0 0-.08-.02Zm7.91 2.4-2.71-5.5a.16.16 0 0 0-.06-.05.14.14 0 0 0-.15 0 6.87 6.87 0 0 1-3.03 2.66.65.65 0 0 0-.32.34l-1.4 3.45a.37.37 0 0 0 0 .28l1.15 2.83c.1.23.32.4.55.41.1 0 .2-.04.3-.1.09-.06.17-.14.22-.25l1.46-2.74c.11-.2.31-.31.52-.3h3c.25 0 .44-.16.52-.43a.8.8 0 0 0-.05-.6ZM8.5 0C5.47 0 3 2.7 3 6s2.47 6 5.5 6S14 9.3 14 6s-2.47-6-5.5-6Zm0 9.33c-.6 0-1.2-.2-1.7-.56-.5-.36-.9-.89-1.12-1.5a3.62 3.62 0 0 1 .66-3.63c.43-.46.97-.78 1.56-.9.6-.14 1.21-.07 1.77.18s1.03.68 1.37 1.23a3.55 3.55 0 0 1-.38 4.2c-.57.63-1.35.98-2.16.98Z"
                  /></svg
                ><a href="/mis-certificados">Mis certificados</a>
              </li>
            </ul>
          </div>
        }
        <div class="lg:flex lg:items-center lg:w-full hidden">
          <a class="pr-8 " href="/home">
            <img class="h-9" src="/logo.webp" alt="Netlife Logo" />
          </a>
          <div class="flex gap-8">
            <a
              id="home"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 {{
                active === 'home'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/home"
              >Inicio</a
            >

            <a
              id="mi-perfil"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 {{
                active === 'mi-perfil'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              id="mis-cursos"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 {{
                active === 'mis-cursos'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              id="mis-certificados"
              class="text-sm relative inline cursor-pointer font-medium before:bg-primary  before:absolute before:-bottom-1 before:block before:h-0.5 before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 {{
                active === 'mis-certificados'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mis-certificados"
              >Mis Certificados</a
            >
          </div>
        </div>
        <div class="flex justify-end items-center w-full">
          <div class="flex justify-end items-center mr-4 relative">
            <input
              type="search"
              id="search"
              name="search"
              class="lg:w-96 py-1 px-3 rounded-2xl text-sm focus:outline-none border focus:border-primary"
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
          <div class="relative flex gap-3">
            <button
              (click)="mostrarNotificaciones()"
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
                class="w-56 flex flex-col z-30 absolute top-11 right-24 bg-white rounded-md shadow shadow-black/50 p-4 gap-1 cursor-default"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button
              (click)="mostrarMensajes()"
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
                class="w-56 flex flex-col z-30 absolute top-11 right-16 bg-white rounded-md shadow shadow-black/50 p-4 gap-1 cursor-default"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button
              (click)="mostrarMenu()"
              class="relative flex items-center gap-2 hover:scale-105"
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
                class="w-56 flex flex-col z-30 absolute top-12 right-2 bg-white rounded-md shadow shadow-black/50 p-4 gap-1 cursor-default "
              >
                <div class="flex flex-col items-center">
                  <strong class="text-center">{{ username }}</strong>
                  <span class="text-xs">{{ email }}</span>
                </div>
                <hr class="border-2" />
                @if (role === 'ADMIN') {
                  <button
                    (click)="router.navigate(['/admin/dashboard'])"
                    class="text-sm text-black hover:bg-quinary text-start  flex gap-2 rounded-lg py-1 px-2"
                  >
                    Admin Dashboard
                  </button>
                }
                <button
                  (click)="router.navigate(['/mi-perfil'])"
                  class="text-sm text-black hover:bg-quinary text-start  flex gap-2 rounded-lg py-1 px-2"
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
                  class="text-sm text-black hover:bg-quinary text-start flex gap-2 rounded-lg py-1 px-2"
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
                  class="flex gap-2 text-sm texttertiary hover:bg-quinary text-start rounded-lg py-1 px-2"
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
  showHamburguer = false;

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
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.activatedRouter.url.subscribe(([url]) => {
      this.active = url['path'];
    });

    this.title.setTitle(
      this.active
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + ' | Netlife Academic',
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
  mostrarNotificaciones() {
    this.showNotifications = !this.showNotifications;
    this.showMessages = false;
    this.showMenu = false;
    this.showHamburguer = false;
  }
  mostrarMensajes() {
    this.showNotifications = false;
    this.showMessages = !this.showMessages;
    this.showMenu = false;
    this.showHamburguer = false;
  }
  mostrarMenu() {
    this.showNotifications = false;
    this.showMessages = false;
    this.showMenu = !this.showMenu;
    this.showHamburguer = false;
  }
  mostrarHamburger() {
    this.showNotifications = false;
    this.showMessages = false;
    this.showMenu = false;
    this.showHamburguer = !this.showHamburguer;
  }
}
