import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
@Component({
  selector: 'app-header-component',
  standalone: true,
  template: `
    <header class="bg-[#0b0603] px-4 py-2 shadow-sm shadow-black">
      <nav class="relative flex">
        <button class="lg:hidden" (click)="mostrarHamburger()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="size-5 hover:scale-105"
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
          <div class="absolute -bottom-52 z-30 size-48 rounded-lg bg-white p-4">
            <a href="/home">
              <img src="/NetlifeLogo.webp" alt="Netlife Logo" />
            </a>
            <hr class="my-1 border border-quinary" />
            <ul class="flex flex-col gap-2 text-sm *:flex *:gap-2">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M16.3 6.4V.7H13v2.6L10 0 0 10.7h2.5V20h5.6v-7.1H12V20h5.6v-9.3H20l-3.8-4.3Z"
                  />
                </svg>
                <a href="/home">Inicio</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M13.7 1.4A5.1 5.1 0 0 0 10 0C8.6 0 7.2.5 6.3 1.4A4.5 4.5 0 0 0 5 5.2c.2 2.7 2.5 4.9 5 4.9s4.8-2.2 5-5a4.5 4.5 0 0 0-1.3-3.6ZM18.5 20h-17l-.6-.1a1.5 1.5 0 0 1-.9-1.7 7.6 7.6 0 0 1 3.7-5 12.1 12.1 0 0 1 12.6 0 7.6 7.6 0 0 1 3.7 5 1.5 1.5 0 0 1-.9 1.7l-.6.1Z"
                  />
                </svg>
                <a href="/mi-perfil">Mi perfil</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000"
                    d="M18.9 4.7a.2.2 0 0 0 0-.1.2.2 0 0 0 0-.2l-7.3-4a3.3 3.3 0 0 0-3.1 0L1 4.4a.2.2 0 0 0 0 .2l9 5a.2.2 0 0 0 .2 0L19 4.8ZM.3 5.9a.2.2 0 0 0-.2 0A.2.2 0 0 0 0 6v7.8c0 .4.1.7.3 1 .2.4.5.6.8.8L9 20a.2.2 0 0 0 .2 0 .2.2 0 0 0 .1 0 .2.2 0 0 0 0-.2v-9a.2.2 0 0 0 0-.1L.2 5.9Zm10.5 5v9a.2.2 0 0 0 .3 0l7.8-4.3a2.1 2.1 0 0 0 1.1-1.8V6a.2.2 0 0 0-.1-.1.2.2 0 0 0-.2 0L11 10.7a.2.2 0 0 0-.1 0 .2.2 0 0 0 0 .2Z"
                  />
                </svg>
                <a href="/mis-cursos">Mis cursos</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="size-4"
                  viewBox="0 0 17 20"
                >
                  <path
                    fill="#000"
                    d="M9 13.2a5.8 5.8 0 0 1-1 0 6.2 6.2 0 0 1-2.8-1A7 7 0 0 1 3 10a.1.1 0 0 0-.1 0L0 15.7a.8.8 0 0 0 0 .7l.2.2.3.1H4l.2.3 1.5 2.8s0 .2.2.2l.3.1a.7.7 0 0 0 .5-.4l2.5-6.2a.2.2 0 0 0 0-.1.2.2 0 0 0 0-.1.1.1 0 0 0-.1 0Zm8 2.4L14.1 10a.1.1 0 0 0-.2 0 6.9 6.9 0 0 1-3 2.6.7.7 0 0 0-.4.3l-1.4 3.5a.4.4 0 0 0 0 .3l1.2 2.8c0 .2.3.4.5.4l.3-.1.3-.2 1.4-2.8c.1-.2.3-.3.5-.3h3c.3 0 .5-.1.6-.4a.8.8 0 0 0 0-.6ZM8.4 0C5.5 0 3 2.7 3 6s2.5 6 5.5 6S14 9.3 14 6s-2.5-6-5.5-6Zm0 9.3a3 3 0 0 1-1.7-.5c-.5-.4-.9-1-1.1-1.5a3.6 3.6 0 0 1 .6-3.7A3 3 0 0 1 8 2.7c.6-.1 1.2 0 1.8.2s1 .7 1.3 1.3a3.5 3.5 0 0 1-.3 4.2 3 3 0 0 1-2.2 1Z"
                  />
                </svg>
                <a href="/mis-certificados">Mis certificados</a>
              </li>
            </ul>
          </div>
        }
        <div class="hidden lg:flex lg:w-full lg:items-center">
          <a class="pr-8" href="/home">
            <img class="h-9" src="/logo.webp" alt="Netlife Logo" />
          </a>
          <div class="flex gap-8">
            <a
              id="home"
              class="text-sm font-medium {{
                active === 'home'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/home"
              >Inicio</a
            >

            <a
              id="mi-perfil"
              class="text-sm font-medium {{
                active === 'mi-perfil'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              id="mis-cursos"
              class="text-sm font-medium {{
                active === 'mis-cursos'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              id="mis-certificados"
              class="text-sm font-medium {{
                active === 'mis-certificados'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              href="/mis-certificados"
              >Mis Certificados</a
            >
          </div>
        </div>
        <div class="flex w-full items-center justify-end">
          <div class="relative mr-4 flex items-center justify-end">
            <input
              type="search"
              id="search"
              name="search"
              class="rounded-2xl border-2 px-3 py-1 text-sm focus:border-primary focus:outline-none lg:w-96"
              type="text"
              placeholder="Buscar más cursos"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000"
              stroke-width="2.5"
              class="icon icon-tabler icon-tabler-search absolute mr-3 size-4 cursor-pointer hover:scale-105"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" />
            </svg>
          </div>
          <div class="relative flex gap-3">
            <button (click)="mostrarNotificaciones()" class="hover:scale-110">
              <img
                class="size-5"
                src="/icons/header/notify.svg"
                alt="Notificaciones"
              />
            </button>
            @if (showNotifications) {
              <div
                class="absolute right-24 top-11 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button (click)="mostrarMensajes()" class="hover:scale-110">
              <img
                class="size-5"
                src="/icons/header/message.svg"
                alt="Mensajes"
              />
            </button>
            @if (showMessages) {
              <div
                class="absolute right-16 top-11 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button
              (click)="mostrarMenu()"
              class="relative flex items-center gap-2 hover:scale-105"
            >
              <img
                class="size-8 rounded-full border-[3px] border-white"
                [src]="profile || '/profile.webp'"
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
                class="absolute right-2 top-12 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <div class="flex flex-col items-center">
                  <strong class="text-center">{{ username }}</strong>
                  <span class="text-xs">{{ email }}</span>
                </div>
                <hr class="border-2" />
                @if (role === 'ADMIN') {
                  <button
                    (click)="router.navigate(['/admin/dashboard'])"
                    class="flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black hover:bg-quinary"
                  >
                    Admin Dashboard
                  </button>
                }
                <button
                  (click)="router.navigate(['/mi-perfil'])"
                  class="flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black hover:bg-quinary"
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
                  class="flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black hover:bg-quinary"
                >
                  <img
                    class="size-4"
                    src="/icons/forms/user.svg"
                    alt="User Icon"
                  />
                  Configurar Perfil
                </button>
                <button
                  class="rounded-lg px-2 py-1 text-start text-sm text-black hover:bg-quinary"
                >
                  Calendario de Tareas
                </button>
                <button
                  class="flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-tertiary hover:bg-quinary"
                  (click)="logout()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    class="size-5"
                    viewBox="0 0 416 352"
                  >
                    <path
                      class="stroke-tertiary"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 256v40a40 40 0 0 1-40 40H56a40 40 0 0 1-40-40V56a40 40 0 0 1 40-40h152c22 0 48 18 48 40v40m64 160 80-80-80-80m-192 80h256"
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
      this.showMessages = false;
      this.showNotifications = false;
      this.showHamburguer = false;
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
        this.profile = imageUrl;
        this.username = `${name} ${lastname}`;
        this.email = email;
        this.role = role;
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
