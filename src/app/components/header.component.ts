import { Component, HostListener, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  template: `
    <header class="bg-black px-4 py-2 shadow-sm shadow-black">
      <nav class="relative flex">
        <button class="lg:hidden" (click)="mostrarHamburger()">
          <svg
            class="size-5 hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 27"
          >
            <path class="stroke-white stroke-3" d="M2 2h26M2 13.5h26M2 25h26" />
          </svg>
        </button>
        @if (showHamburguer) {
          <div
            class="absolute top-10 z-30 size-52 rounded-lg bg-white p-4 border"
          >
            <a routerLink="/home">
              <img src="/NetlifeLogo.webp" alt="Netlife Logo" />
            </a>
            <hr class="border-black my-3 border" />
            <ul class="flex flex-col gap-y-2 text-sm *:flex *:gap-x-2">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.3 6.4V.7H13v2.6L10 0 0 10.7h2.5V20h5.6v-7.1H12V20h5.6v-9.3H20l-3.8-4.3Z"
                    class="fill-black"
                  />
                </svg>
                <a routerLink="/home">Inicio</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13.7 1.4A5.1 5.1 0 0 0 10 0C8.6 0 7.2.5 6.3 1.4A4.5 4.5 0 0 0 5 5.2c.2 2.7 2.5 4.9 5 4.9s4.8-2.2 5-5a4.5 4.5 0 0 0-1.3-3.6ZM18.5 20h-17l-.6-.1a1.5 1.5 0 0 1-.9-1.7 7.6 7.6 0 0 1 3.7-5 12.1 12.1 0 0 1 12.6 0 7.6 7.6 0 0 1 3.7 5 1.5 1.5 0 0 1-.9 1.7l-.6.1Z"
                    class="fill-black"
                  />
                </svg>
                <a routerLink="/mi-perfil">Mi perfil</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18.9 4.7a.2.2 0 0 0 0-.1.2.2 0 0 0 0-.2l-7.3-4a3.3 3.3 0 0 0-3.1 0L1 4.4a.2.2 0 0 0 0 .2l9 5a.2.2 0 0 0 .2 0L19 4.8ZM.3 5.9a.2.2 0 0 0-.2 0A.2.2 0 0 0 0 6v7.8c0 .4.1.7.3 1 .2.4.5.6.8.8L9 20a.2.2 0 0 0 .2 0 .2.2 0 0 0 .1 0 .2.2 0 0 0 0-.2v-9a.2.2 0 0 0 0-.1L.2 5.9Zm10.5 5v9a.2.2 0 0 0 .3 0l7.8-4.3a2.1 2.1 0 0 0 1.1-1.8V6a.2.2 0 0 0-.1-.1.2.2 0 0 0-.2 0L11 10.7a.2.2 0 0 0-.1 0 .2.2 0 0 0 0 .2Z"
                    class="fill-black"
                  />
                </svg>
                <a routerLink="/mis-cursos">Mis cursos</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  viewBox="0 0 17 20"
                >
                  <path
                    d="M9 13.2a5.8 5.8 0 0 1-1 0 6.2 6.2 0 0 1-2.8-1A7 7 0 0 1 3 10a.1.1 0 0 0-.1 0L0 15.7a.8.8 0 0 0 0 .7l.2.2.3.1H4l.2.3 1.5 2.8s0 .2.2.2l.3.1a.7.7 0 0 0 .5-.4l2.5-6.2a.2.2 0 0 0 0-.1.2.2 0 0 0 0-.1.1.1 0 0 0-.1 0Zm8 2.4L14.1 10a.1.1 0 0 0-.2 0 6.9 6.9 0 0 1-3 2.6.7.7 0 0 0-.4.3l-1.4 3.5a.4.4 0 0 0 0 .3l1.2 2.8c0 .2.3.4.5.4l.3-.1.3-.2 1.4-2.8c.1-.2.3-.3.5-.3h3c.3 0 .5-.1.6-.4a.8.8 0 0 0 0-.6ZM8.4 0C5.5 0 3 2.7 3 6s2.5 6 5.5 6S14 9.3 14 6s-2.5-6-5.5-6Zm0 9.3a3 3 0 0 1-1.7-.5c-.5-.4-.9-1-1.1-1.5a3.6 3.6 0 0 1 .6-3.7A3 3 0 0 1 8 2.7c.6-.1 1.2 0 1.8.2s1 .7 1.3 1.3a3.5 3.5 0 0 1-.3 4.2 3 3 0 0 1-2.2 1Z"
                    class="fill-black"
                  />
                </svg>
                <a routerLink="/mis-certificados">Mis certificados</a>
              </li>
            </ul>
          </div>
        }
        <div class="hidden lg:flex lg:w-full lg:items-center">
          <a class="pr-8" routerLink="/home">
            <img class="h-9" src="/logo.webp" alt="Netlife Logo" />
          </a>
          <div class="flex gap-8">
            <a
              class="text-sm font-medium {{
                active === 'home'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              id="home"
              routerLink="/home"
              >Inicio</a
            >

            <a
              class="text-sm font-medium {{
                active === 'mi-perfil'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              id="mi-perfil"
              routerLink="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              class="text-sm font-medium {{
                active === 'mis-cursos'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              id="mis-cursos"
              routerLink="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              class="text-sm font-medium {{
                active === 'mis-certificados'
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }}"
              id="mis-certificados"
              routerLink="/mis-certificados"
              >Mis Certificados</a
            >
          </div>
        </div>
        <div class="flex w-full items-center justify-end">
          <div class="relative mr-4 flex items-center justify-end">
            <input
              class="focus:border-primary rounded-2xl border-2 pr-4 pl-8 py-1 text-sm focus:outline-none lg:w-96 bg-white"
              id="search"
              name="search"
              type="search"
              placeholder="Buscar más cursos"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="stroke-3 stroke-black size-4 absolute left-3 pointer-events-none"
              viewBox="0 0 24 24"
            >
              <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" />
            </svg>
          </div>
          <div class="relative flex gap-3">
            <button class="hover:scale-110" (click)="mostrarNotificaciones()">
              <img
                class="size-5"
                src="/icons/header/notify.svg"
                alt="Notificaciones"
              />
            </button>
            @if (showNotifications) {
              <div
                class="absolute top-11 right-24 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button class="hover:scale-110" (click)="mostrarMensajes()">
              <img
                class="size-5"
                src="/icons/header/message.svg"
                alt="Mensajes"
              />
            </button>
            @if (showMessages) {
              <div
                class="absolute top-11 right-16 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <strong>Proximamente...</strong>
              </div>
            }
            <button
              class="relative flex items-center gap-2 hover:scale-105"
              (click)="mostrarMenu()"
            >
              <img
                class="size-8 rounded-full border-2 border-white"
                alt="Perfil del Usuario"
                [src]="profile || '/profile.webp'"
              />
              <img
                class="size-3"
                src="/icons/header/deploy-info.svg"
                alt="Desplegar información"
              />
            </button>
            @if (showMenu) {
              <div
                class="absolute top-12 right-2 z-30 flex w-56 cursor-default flex-col gap-1 rounded-md bg-white p-4 shadow shadow-black/50"
              >
                <div class="flex flex-col items-center">
                  <strong class="text-center">{{ username }}</strong>
                  <span class="text-xs">{{ email }}</span>
                </div>
                <hr class="border-2" />
                @if (role === 'ADMIN') {
                  <button
                    class="hover:bg-quinary flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black"
                    (click)="router.navigate(['/admin/dashboard'])"
                  >
                    Admin Dashboard
                  </button>
                }
                <button
                  class="hover:bg-quinary flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black"
                  (click)="router.navigate(['/mi-perfil'])"
                >
                  <img
                    class="size-4"
                    src="/icons/forms/user.svg"
                    alt="User Icon"
                  />
                  Mi Perfil
                </button>
                <button
                  class="hover:bg-quinary flex gap-2 rounded-lg px-2 py-1 text-start text-sm text-black"
                  (click)="router.navigate(['/actualizar-informacion'])"
                >
                  <img
                    class="size-4"
                    src="/icons/forms/user.svg"
                    alt="User Icon"
                  />
                  Configurar Perfil
                </button>
                <button
                  class="hover:bg-quinary rounded-lg px-2 py-1 text-start text-sm text-black"
                >
                  Calendario de Tareas
                </button>
                <button
                  class="text-tertiary hover:bg-quinary flex gap-2 rounded-lg px-2 py-1 text-start text-sm"
                  (click)="logout()"
                >
                  <svg
                    class="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 416 352"
                    fill="none"
                  >
                    <path
                      class="stroke-tertiary"
                      stroke-width="32"
                      stroke-linejoin="round"
                      stroke-linecap="round"
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
  public active!: string;
  public profile!: string;
  public username!: string;
  public email!: string;
  public role!: string;
  public showMenu = false;
  public showMessages = false;
  public showNotifications = false;
  public showHamburguer = false;

  public authService = inject(AuthService);
  public router = inject(Router);
  private userService = inject(UserService);
  private activatedRouter = inject(ActivatedRoute);
  private title = inject(Title);

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showMenu = false;
      this.showMessages = false;
      this.showNotifications = false;
      this.showHamburguer = false;
    }
  }

  public ngOnInit() {
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

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  public mostrarNotificaciones() {
    this.showNotifications = !this.showNotifications;
    this.showMessages = false;
    this.showMenu = false;
    this.showHamburguer = false;
  }

  public mostrarMensajes() {
    this.showNotifications = false;
    this.showMessages = !this.showMessages;
    this.showMenu = false;
    this.showHamburguer = false;
  }

  public mostrarMenu() {
    this.showNotifications = false;
    this.showMessages = false;
    this.showMenu = !this.showMenu;
    this.showHamburguer = false;
  }

  public mostrarHamburger() {
    this.showNotifications = false;
    this.showMessages = false;
    this.showMenu = false;
    this.showHamburguer = !this.showHamburguer;
  }
}
