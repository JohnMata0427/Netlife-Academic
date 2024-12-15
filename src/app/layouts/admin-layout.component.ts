import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-admin-layout',
  imports: [CustomButtonComponent],
  template: `
    <main class="flex">
      <header class="min-h-screen w-60 bg-black p-4">
        <nav class="flex flex-col">
          <div class="mt-1 grid place-content-center">
            <img class="h-auto w-48" src="/logo.webp" alt="Logo de Netlife" />
          </div>
          <div class="my-7 flex items-center justify-center gap-2">
            <img
              class="size-10 rounded-full border-2 border-white"
              [src]="user.imageUrl"
              alt=""
            />
            <div class="flex flex-col items-center">
              <h4 class="text-xs text-white">{{ user.email }}</h4>
              <span class="text-xs text-white">Administrador del sitio</span>
            </div>
          </div>
          <strong class="text-xs text-white">GESTION DE:</strong>
          <hr class="border" />

          <ul class="mt-6 flex flex-col gap-2">
            <li>
              <app-button-component
                (click)="router.navigate(['/admin/dashboard'])"
                text="Usuarios"
                [color]="active === 'dashboard' ? 'white' : 'black'"
                [hoverColor]="active === 'dashboard' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 18 18">
                  <path
                    d="M14.6 5.7v-5h-2.8V3L9 0 0 9.6h2.3V18h5v-6.4h3.4V18h5V9.6H18l-3.4-3.9Z"
                    [className]="
                      active === 'dashboard'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    "
                  />
                </svg>
              </app-button-component>
            </li>
            <li>
              <app-button-component
                (click)="router.navigate(['/admin/anuncios'])"
                text="Anuncios"
                [color]="active === 'anuncios' ? 'white' : 'black'"
                [hoverColor]="active === 'anuncios' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="m16.6 13.8-.2-.3c-1-1.1-1.5-1.9-1.5-5.2 0-1.8-.4-3.2-1.3-4.3a5.8 5.8 0 0 0-2.5-1.8C10.7.9 9.7 0 8.5 0 7.3 0 6.3.9 5.9 2.2c-2.6 1-3.8 3-3.8 6 0 3.4-.6 4.2-1.5 5.3l-.2.3a1.6 1.6 0 0 0-.2 1.7c.2.6.8 1 1.5 1h13.6c.7 0 1.3-.4 1.5-1a1.6 1.6 0 0 0-.1-1.7ZM8.5 20a3.5 3.5 0 0 0 3.1-2 .2.2 0 0 0 0-.1.2.2 0 0 0-.1 0h-6a.2.2 0 0 0-.1 0 .2.2 0 0 0 0 .2A3.6 3.6 0 0 0 8.5 20Z"
                    [className]="
                      active === 'anuncios'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    "
                  />
                </svg>
              </app-button-component>
            </li>
            <!-- <li>
              <app-button-component
                (click)="router.navigate(['/admin/usuarios'])"
                text="Usuarios"
                [color]="active === 'usuarios' ? 'white' : 'black'"
                [hoverColor]="active === 'usuarios' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 20 20"><path d="M13.7 1.4A5.1 5.1 0 0 0 10 0C8.6 0 7.2.5 6.3 1.4A4.5 4.5 0 0 0 5 5.2c.2 2.7 2.5 4.9 5 4.9s4.8-2.2 5-5a4.5 4.5 0 0 0-1.3-3.6ZM18.5 20h-17l-.6-.1a1.5 1.5 0 0 1-.9-1.7 7.6 7.6 0 0 1 3.7-5 12.1 12.1 0 0 1 12.6 0 7.6 7.6 0 0 1 3.7 5 1.5 1.5 0 0 1-.9 1.7l-.6.1Z" [className]="active === 'usuarios' ? 'fill-black group-hover:fill-white' : 'fill-white group-hover:fill-black'"/></svg>
              </app-button-component>
            </li> -->
            <li>
              <app-button-component
                (click)="router.navigate(['/admin/cursos'])"
                text="Cursos"
                [color]="active === 'cursos' ? 'white' : 'black'"
                [hoverColor]="active === 'cursos' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="M16 4.7a.2.2 0 0 0 .1-.1.2.2 0 0 0 0-.2L9.8.4a2.5 2.5 0 0 0-2.6 0l-6.3 4a.2.2 0 0 0 0 .2l7.5 4.9a.1.1 0 0 0 .2 0L16 4.7ZM.3 5.9a.1.1 0 0 0-.1 0A.2.2 0 0 0 0 6v7.8c0 .4.1.7.3 1 .1.4.4.6.7.8L7.6 20a.1.1 0 0 0 .2 0 .2.2 0 0 0 0-.2v-9a.2.2 0 0 0 0-.1L.3 5.9Zm9 5v9a.1.1 0 0 0 .2 0l6.6-4.3c.3-.2.6-.4.7-.8.2-.3.3-.6.3-1V6a.2.2 0 0 0 0-.1.1.1 0 0 0-.2 0l-7.6 4.8a.2.2 0 0 0 0 .2Z"
                    [className]="
                      active === 'cursos'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    "
                  />
                </svg>
              </app-button-component>
            </li>

            <li>
              <app-button-component
                (click)="router.navigate(['/admin/certificados'])"
                text="Certificados"
                [color]="active === 'certificados' ? 'white' : 'black'"
                [hoverColor]="active === 'certificados' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20">
                  <path
                    d="M9 13.2a5.8 5.8 0 0 1-1 0 6.2 6.2 0 0 1-2.8-1A7 7 0 0 1 3 10a.1.1 0 0 0-.1 0L0 15.7a.8.8 0 0 0 0 .7l.2.2.3.1H4l.2.3 1.5 2.8s0 .2.2.2l.3.1a.7.7 0 0 0 .5-.4l2.5-6.2a.2.2 0 0 0 0-.1.2.2 0 0 0 0-.1.1.1 0 0 0-.1 0Zm8 2.4L14.1 10a.1.1 0 0 0-.2 0 6.9 6.9 0 0 1-3 2.6.7.7 0 0 0-.4.3l-1.4 3.5a.4.4 0 0 0 0 .3l1.2 2.8c0 .2.3.4.5.4l.3-.1.3-.2 1.4-2.8c.1-.2.3-.3.5-.3h3c.3 0 .5-.1.6-.4a.8.8 0 0 0 0-.6ZM8.4 0C5.5 0 3 2.7 3 6s2.5 6 5.5 6S14 9.3 14 6s-2.5-6-5.5-6Zm0 9.3a3 3 0 0 1-1.7-.5c-.5-.4-.9-1-1.1-1.5a3.6 3.6 0 0 1 .6-3.7A3 3 0 0 1 8 2.7c.6-.1 1.2 0 1.8.2s1 .7 1.3 1.3a3.5 3.5 0 0 1-.3 4.2 3 3 0 0 1-2.2 1Z"
                    [className]="
                      active === 'certificados'
                        ? 'fill-black group-hover:fill-white'
                        : 'fill-white group-hover:fill-black'
                    "
                  />
                </svg>
              </app-button-component>
            </li>
            <!-- <li>
              <app-button-component
                (click)="router.navigate(['/admin/reportes'])"
                text="Reportes"
                [color]="active === 'reportes' ? 'white' : 'black'"
                [hoverColor]="active === 'reportes' ? 'black' : 'white'"
                moreStyles="w-full text-sm h-8 gap-2 rounded-xl"
              >
                <svg class="z-10 size-4" viewBox="0 0 17 20"><path d="M9 .1v6.7a.2.2 0 0 0 .2.2h6.7a.1.1 0 0 0 0-.2L9.3 0A.1.1 0 0 0 9 0Z" [className]="active === 'reportes' ? 'fill-black group-hover:fill-white' : 'fill-white group-hover:fill-black'"/><path d="M8.1 8.6a.4.4 0 0 1-.3-.1.3.3 0 0 1 0-.3V0H.5a.6.6 0 0 0-.4.2L0 .5v19c0 .1 0 .2.2.3l.4.2h15.8a.6.6 0 0 0 .4-.2l.2-.3v-11H8.1Zm5 7.1H4v-1.4h9v1.4Zm0-3.6H4v-1.4h9v1.4Z" [className]="active === 'reportes' ? 'fill-black group-hover:fill-white' : 'fill-white group-hover:fill-black'"/></svg>
              </app-button-component>
            </li> -->
          </ul>
        </nav>
      </header>
      <section class="w-full px-8 py-4">
        <div class="flex w-full justify-end">
          <app-button-component
            (click)="router.navigate(['/home'])"
            text="Volver al Sitio Principal"
            moreStyles="text-xs h-8 gap-2 group"
          >
            <svg class="z-10 size-4" viewBox="0 0 18 18">
              <path
                d="M14.6 5.7v-5h-2.8V3L9 0 0 9.6h2.3V18h5v-6.4h3.4V18h5V9.6H18l-3.4-3.9Z"
                class="fill-white group-hover:fill-black"
              />
            </svg>
          </app-button-component>
        </div>
        <div>
          <ng-content></ng-content>
        </div>
      </section>
    </main>
  `,
})
export class AdminLayout {
  public user!: User;
  public active!: string;
  public router = inject(Router);
  private title = inject(Title);
  private activatedRouter = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private userService = inject(UserService);

  public ngOnInit() {
    this.active = this.activatedRouter.snapshot.url.map((url) => url['path'])[0];
    this.userService
      .getUserById(this.authService.getInfoUser().sub)
      .subscribe((user) => {
        this.user = user;
      });

    this.title.setTitle(
      'Admin ' +
        this.active?.split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ') +
        ' | Netlife Academic',
    );
  }
}
