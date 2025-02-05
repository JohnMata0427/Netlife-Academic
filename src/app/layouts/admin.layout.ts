import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@/interfaces/user.interface';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';
import { CustomButtonComponent } from '@/components/custom-button.component';
import {
  CommonModule,
  NgClass,
  NgOptimizedImage,
  TitleCasePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  name: string;
  iconPath: string;
}
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CustomButtonComponent, NgClass, CommonModule, RouterLink],
  template: `
    <main class="flex">
      <header class="min-h-screen w-72 bg-black p-4 hidden lg:block">
        <img class="w-44 mt-1 mx-auto" src="/logo.webp" alt="Logo de Netlife" />
        <div class="my-4 flex items-center justify-center gap-x-2">
          <img
            class="size-10 rounded-full border-2 border-white"
            alt="Foto de perfil"
            [src]="user?.imageUrl ?? '/profile.webp'"
          />
          <div class="flex flex-col items-center text-xs text-white">
            <span>{{ user?.email }}</span>
            <strong>Administrador del sitio</strong>
          </div>
        </div>
        <strong class="text-xs text-white">GESTION DE:</strong>
        <hr class="border border-white" />
        <nav class="flex flex-col">
          <ul class="mt-6 flex flex-col gap-2">
            @for (item of menuItems; track $index) {
              @let condition = this.activeRoute === item.name;
              <li>
                <a
                  class="cursor-pointer font-medium relative overflow-hidden border px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center group w-full text-sm h-10 gap-2 rounded-lg"
                  [routerLink]="['/admin', item.name]"
                  [ngClass]="{
                    'border-black bg-white hover:text-white text-black before:bg-black':
                      condition,
                    'border-white bg-black hover:text-black text-white before:bg-white':
                      !condition,
                  }"
                >
                  <svg class="z-10 size-4" viewBox="0 0 18 18">
                    <path
                      [attr.d]="item.iconPath"
                      [ngClass]="{
                        'fill-black group-hover:fill-white': condition,
                        'fill-white group-hover:fill-black': !condition,
                      }"
                    />
                  </svg>
                  <span class="relative z-10">{{ item.name | titlecase }}</span>
                </a>
              </li>
            }
          </ul>
        </nav>
      </header>

      <section class="w-full px-8 py-4">
        <div class="flex w-full justify-end">
          <app-button-component
            text="Volver al Sitio Principal"
            moreStyles="text-xs h-8 gap-2 group"
            (click)="router.navigate(['/home'])"
          >
            <svg class="z-10 size-4" viewBox="0 0 18 18">
              <path
                class="fill-white group-hover:fill-black"
                d="M14.6 5.7v-5h-2.8V3L9 0 0 9.6h2.3V18h5v-6.4h3.4V18h5V9.6H18l-3.4-3.9Z"
              />
            </svg>
          </app-button-component>
        </div>
        <div>
          <ng-content />
        </div>
      </section>
    </main>
  `,
})
export class AdminLayout {
  public router = inject(Router);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private authService = inject(AuthService);
  private userService = inject(UserService);

  public user?: User;
  public activeRoute!: string;

  public menuItems: MenuItem[] = [
    {
      name: 'dashboard',
      iconPath:
        'M14.6 5.7v-5h-2.8V3L9 0 0 9.6h2.3V18h5v-6.4h3.4V18h5V9.6H18l-3.4-3.9Z',
    },
    {
      name: 'anuncios',
      iconPath:
        'm16.6 13.8-.2-.3c-1-1.1-1.5-1.9-1.5-5.2 0-1.8-.4-3.2-1.3-4.3a5.8 5.8 0 0 0-2.5-1.8C10.7.9 9.7 0 8.5 0 7.3 0 6.3.9 5.9 2.2c-2.6 1-3.8 3-3.8 6 0 3.4-.6 4.2-1.5 5.3l-.2.3a1.6 1.6 0 0 0-.2 1.7c.2.6.8 1 1.5 1h13.6c.7 0 1.3-.4 1.5-1a1.6 1.6 0 0 0-.1-1.7ZM8.5 20a3.5 3.5 0 0 0 3.1-2 .2.2 0 0 0 0-.1.2.2 0 0 0-.1 0h-6a.2.2 0 0 0-.1 0 .2.2 0 0 0 0 .2A3.6 3.6 0 0 0 8.5 20Z',
    },
    {
      name: 'cursos',
      iconPath:
        'M16 4.7a.2.2 0 0 0 .1-.1.2.2 0 0 0 0-.2L9.8.4a2.5 2.5 0 0 0-2.6 0l-6.3 4a.2.2 0 0 0 0 .2l7.5 4.9a.1.1 0 0 0 .2 0L16 4.7ZM.3 5.9a.1.1 0 0 0-.1 0A.2.2 0 0 0 0 6v7.8c0 .4.1.7.3 1 .1.4.4.6.7.8L7.6 20a.1.1 0 0 0 .2 0 .2.2 0 0 0 0-.2v-9a.2.2 0 0 0 0-.1L.3 5.9Zm9 5v9a.1.1 0 0 0 .2 0l6.6-4.3c.3-.2.6-.4.7-.8.2-.3.3-.6.3-1V6a.2.2 0 0 0 0-.1.1.1 0 0 0-.2 0l-7.6 4.8a.2.2 0 0 0 0 .2Z',
    },
    {
      name: 'certificados',
      iconPath:
        'M9 .1v6.7a.2.2 0 0 0 .2.2h6.7a.1.1 0 0 0 0-.2L9.3 0A.1.1 0 0 0 9 0Z',
    },
    // {
    //   name: 'reportes',
    //   iconPath:
    //     'M8.1 8.6a.4.4 0 0 1-.3-.1.3.3 0 0 1 0-.3V0H.5a.6.6 0 0 0-.4.2L0 .5v19c0 .1 0 .2.2.3l.4.2h15.8a.6.6 0 0 0 .4-.2l.2-.3v-11H8.1Zm5 7.1H4v-1.4h9v1.4Zm0-3.6H4v-1.4h9v1.4Z',
    // },
  ];

  ngOnInit() {
    this.userService
      .getUserById(this.authService.getInfoUser().sub)
      .subscribe((user) => (this.user = user));

    this.route.url.subscribe((urlSegments) => {
      this.activeRoute = urlSegments.pop()?.path!;
      this.title.setTitle(
        `Admin ${new TitleCasePipe().transform(this.activeRoute)} • Netlife Academic`,
      );
    });
  }
}
