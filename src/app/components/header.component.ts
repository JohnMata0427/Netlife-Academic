import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@netlifeacademic/environments/environment.development';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="bg-[#0b0603] py-2 px-4 shadow-sm shadow-black">
      <nav class="flex">
        <div class="flex items-center w-full">
          <a class="pr-8" href="/">
            <img class="h-9" src="logo.jpg" alt="Netlife Logo" />
          </a>
          <div class="flex gap-x-8">
            <a
              id="home"
              class="text-white hover:text-[#ec7434] transition-all text-sm"
              href="/home"
              >Inicio</a
            >
            <a
              id="mi-perfil"
              class="text-white hover:text-[#ec7434] transition-all text-sm"
              href="/mi-perfil"
              >Mi Perfil</a
            >
            <a
              id="mis-cursos"
              class="text-white hover:text-[#ec7434] transition-all text-sm"
              href="/mis-cursos"
              >Mis Cursos</a
            >
            <a
              id="mis-certificados"
              class="text-white hover:text-[#ec7434] transition-all text-sm"
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
            <button class="absolute mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
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
            </button>
          </div>
          <div class="flex items-center gap-x-3">
            <button>
              <img src="icons/header/notify.svg" alt="Notificaciones">
            </button>
            <button>
              <img src="icons/header/message.svg" alt="Mensajes">
            </button>
            <button (click)="goToProfile()" class="flex items-center gap-x-2">
              <img src="profile-icon.png" alt="Perfil del Usuario">
              <img src="icons/header/deploy-info.svg" alt="Desplegar información">
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  active = 'home';
  activeLink: any;
  @Input() id = '';
  cloudinaryUrl = environment.CLOUDINARY_PROFILE + this.id + '.jpg';

  constructor(private activatedRouter: ActivatedRoute, private router: Router){
    this.activatedRouter.url.subscribe((url) => {
      try {
        this.active = url[0]['path'];
      } catch (error) {
        this.active = 'mi-perfil';
      }
      console.log(this.active);
    });
  }

  ngOnInit() {
    document.getElementById(this.active)?.classList.remove('text-white', 'hover:text-[#ec7434]', 'transition-all');
    document.getElementById(this.active)?.classList.add('text-[#ec7434]');
  }

  goToProfile() {
    this.router.navigate(['/mi-perfil']);
  }
}
