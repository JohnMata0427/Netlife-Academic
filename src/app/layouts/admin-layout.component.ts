import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [NgClass, CustomButtonComponent],
  template: `
    <main class="flex">
      <header class="min-h-screen w-60 p-4 bg-black">
        <nav class="flex flex-col">
          <div class="grid place-content-center mt-1">
            <img class="h-auto w-48" src="logo.jpg" alt="Logo de Netlife" />
          </div>
          <div class="flex gap-x-2 justify-center items-center my-7">
            <img
              class="size-10 rounded-full border-2 border-white"
              src="{{ user.imageUrl }}"
              alt=""
            />
            <div class="flex flex-col items-center">
              <h4 class="text-white text-xs">{{ user.email }}</h4>
              <span class="text-white text-[10px]"
                >Administrador del sitio</span
              >
            </div>
          </div>
          <strong class="text-white text-xs">GESTION DE:</strong>
          <hr class="border-[1px]" />

          <ul class="flex flex-col gap-y-2 mt-6">
            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/dashboard'])"
                [text]="'Dashboard'"
                [color]="active === 'dashboard' ? 'white' : 'black'"
                [hoverColor]="active === 'dashboard' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 18 18">
                  <path
                    d="M14.63 5.74V.64H11.8V3L9 0 0 9.64h2.25V18h5.06v-6.43h3.38V18h5.06V9.64H18l-3.38-3.9Z"
                    class="{{
                      active === 'dashboard'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>
            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/anuncios'])"
                [text]="'Anuncios'"
                [color]="active === 'anuncios' ? 'white' : 'black'"
                [hoverColor]="active === 'anuncios' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="m16.64 13.8-.21-.26c-.98-1.18-1.57-1.9-1.57-5.26 0-1.75-.4-3.17-1.22-4.25a5.78 5.78 0 0 0-2.52-1.86C10.74.87 9.7 0 8.5 0 7.31 0 6.26.87 5.88 2.17a.14.14 0 0 1-.04.03c-2.5 1.03-3.7 3.02-3.7 6.07 0 3.37-.6 4.09-1.57 5.27l-.21.27a1.58 1.58 0 0 0-.2 1.68c.27.58.85.94 1.51.94h13.66c.67 0 1.24-.36 1.52-.94a1.58 1.58 0 0 0-.2-1.68ZM8.5 20a3.52 3.52 0 0 0 3.14-1.97.18.18 0 0 0-.1-.15.17.17 0 0 0-.08-.02H5.54a.18.18 0 0 0-.15.08.18.18 0 0 0 0 .18A3.56 3.56 0 0 0 8.5 20Z"
                    class="{{
                      active === 'anuncios'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>

            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/usuarios'])"
                [text]="'Usuarios'"
                [color]="active === 'usuarios' ? 'white' : 'black'"
                [hoverColor]="active === 'usuarios' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 20 20">
                  <path
                    d="M13.68 1.45A5.14 5.14 0 0 0 10 0C8.55 0 7.24.51 6.3 1.45a4.52 4.52 0 0 0-1.28 3.6C5.22 7.78 7.46 10 10 10c2.54 0 4.77-2.22 4.98-4.95a4.5 4.5 0 0 0-1.3-3.6ZM18.46 20H1.54c-.22 0-.44-.04-.64-.13a1.5 1.5 0 0 1-.87-1.67 7.64 7.64 0 0 1 3.66-5.08c1.77-1.09 4.01-1.7 6.31-1.7s4.54.61 6.3 1.7a7.64 7.64 0 0 1 3.67 5.08 1.5 1.5 0 0 1-.87 1.67c-.2.09-.42.13-.64.13Z"
                    class="{{
                      active === 'usuarios'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>

            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/cursos'])"
                [text]="'Cursos'"
                [color]="active === 'cursos' ? 'white' : 'black'"
                [hoverColor]="active === 'cursos' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="M16.06 4.66a.17.17 0 0 0 .06-.07.2.2 0 0 0 0-.18.17.17 0 0 0-.06-.06L9.8.39a2.45 2.45 0 0 0-2.62 0L.94 4.35a.17.17 0 0 0-.05.06.2.2 0 0 0 0 .18l.05.07 7.48 4.8a.15.15 0 0 0 .16 0l7.48-4.8ZM.25 5.87a.15.15 0 0 0-.17 0 .17.17 0 0 0-.06.07.2.2 0 0 0-.02.09v7.76c0 .37.1.74.26 1.06.17.33.42.6.71.79l6.63 4.34a.15.15 0 0 0 .16 0 .17.17 0 0 0 .06-.07.2.2 0 0 0 .03-.09v-9a.2.2 0 0 0-.03-.1.17.17 0 0 0-.06-.06L.25 5.87Zm8.9 4.98v8.97l.03.09c.01.03.03.05.06.06a.15.15 0 0 0 .16 0l6.63-4.34c.3-.18.54-.45.7-.78.18-.32.27-.69.27-1.06V6.03a.2.2 0 0 0-.02-.1.17.17 0 0 0-.06-.06.15.15 0 0 0-.17 0L9.24 10.7a.17.17 0 0 0-.06.07.2.2 0 0 0-.03.09Z"
                    class="{{
                      active === 'cursos'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>

            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/certificados'])"
                [text]="'Certificados'"
                [color]="active === 'certificados' ? 'white' : 'black'"
                [hoverColor]="active === 'certificados' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="M9 13.18a5.81 5.81 0 0 1-1.08 0 6.19 6.19 0 0 1-2.73-.96 7.02 7.02 0 0 1-2.17-2.2.14.14 0 0 0-.15 0 .16.16 0 0 0-.05.07l-2.73 5.5a.75.75 0 0 0-.01.67c.05.1.13.2.23.25.1.06.2.09.3.09h2.97c.1 0 .2.02.3.08.08.05.16.13.21.23l1.47 2.75c.05.1.13.19.22.25.1.06.2.09.3.09a.67.67 0 0 0 .55-.4l2.51-6.18a.19.19 0 0 0-.01-.16.16.16 0 0 0-.06-.06.14.14 0 0 0-.08-.02Zm7.91 2.4-2.71-5.5a.16.16 0 0 0-.06-.05.14.14 0 0 0-.15 0 6.87 6.87 0 0 1-3.03 2.66.65.65 0 0 0-.32.34l-1.4 3.45a.37.37 0 0 0 0 .28l1.15 2.83c.1.23.32.4.55.41.1 0 .2-.04.3-.1.09-.06.17-.14.22-.25l1.46-2.74c.11-.2.31-.31.52-.3h3c.25 0 .44-.16.52-.43a.8.8 0 0 0-.05-.6ZM8.5 0C5.47 0 3 2.7 3 6s2.47 6 5.5 6S14 9.3 14 6s-2.47-6-5.5-6Zm0 9.33c-.6 0-1.2-.2-1.7-.56-.5-.36-.9-.89-1.12-1.5a3.62 3.62 0 0 1 .66-3.63c.43-.46.97-.78 1.56-.9.6-.14 1.21-.07 1.77.18s1.03.68 1.37 1.23a3.55 3.55 0 0 1-.38 4.2c-.57.63-1.35.98-2.16.98Z"
                    class="{{
                      active === 'certificados'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>

            <li>
              <app-custom-button
                (click)="router.navigate(['/admin/reportes'])"
                [text]="'Reportes'"
                [color]="active === 'reportes' ? 'white' : 'black'"
                [hoverColor]="active === 'reportes' ? 'black' : 'white'"
                [moreStyles]="'w-full text-sm h-8 gap-x-2 group rounded-xl'"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="M9 .1v6.72a.18.18 0 0 0 .18.18h6.73a.1.1 0 0 0 .06-.16L9.16.03A.1.1 0 0 0 9 .09Z"
                    class="{{
                      active === 'reportes'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                  <path
                    d="M8.11 8.57a.4.4 0 0 1-.27-.1.34.34 0 0 1-.11-.26V0H.58a.6.6 0 0 0-.41.16C.07.26 0 .39 0 .54v18.92c0 .15.06.28.17.38.1.1.26.16.41.16h15.84a.6.6 0 0 0 .41-.16c.1-.1.17-.23.17-.38V8.57H8.11Zm5.03 7.14H3.86V14.3h9.28v1.42Zm0-3.57H3.86v-1.43h9.28v1.43Z"
                    class="{{
                      active === 'reportes'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    }}"
                  />
                </svg>
              </app-custom-button>
            </li>
          </ul>
        </nav>
      </header>
      <section class="w-full py-4 px-8">
        <div class="w-full flex justify-end">
          <app-custom-button
            (click)="router.navigate(['/home'])"
            [color]="'black'"
            [text]="'Volver al Sitio Principal'"
            [hoverColor]="'white'"
            [moreStyles]="'text-xs h-8 gap-x-2 group'"
          >
            <svg class="z-10 size-4" viewBox="0 0 18 18">
              <path
                d="M14.63 5.74V.64H11.8V3L9 0 0 9.64h2.25V18h5.06v-6.43h3.38V18h5.06V9.64H18l-3.38-3.9Z"
                class="fill-white group-hover:fill-black"
              />
            </svg>
          </app-custom-button>
        </div>
        <div>
          <ng-content></ng-content>
        </div>
      </section>
    </main>
  `,
})
export class AdminLayoutComponent {
  user = {} as User;
  active = '';

  constructor(
    private title: Title,
    private activatedRouter: ActivatedRoute,
    public router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.activatedRouter.url.subscribe((url) => {
      this.active = url[0]['path'];
    });
  }

  ngOnInit() {
    this.userService
      .getUserById(this.authService.getInfoUser().sub)
      .subscribe((user) => {
        this.user = user;
      });

    this.title.setTitle(
      'Admin ' +
        this.active
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ') +
        ' | Netlife Academic'
    );
  }
}
