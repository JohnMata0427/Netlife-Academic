import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { UserService } from '@netlifeacademic/services/user.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [NgClass],
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
              <button
                (click)="
                  router.navigate(['/admin/dashboard']);
                  selectedButton = 'Dashboard'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Dashboard',
                  'bg-black text-white': selectedButton !== 'Dashboard'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="18" viewBox="0 0 18 18">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Dashboard',
                      'fill-white': selectedButton !== 'Dashboard'
                    }"
                    id="Vector"
                    d="M14.625 5.73509V0.642857H11.8125V2.99129L9 0L0 9.64286H2.25V18H7.3125V11.5714H10.6875V18H15.75V9.64286H18L14.625 5.73509Z"
                  />
                </svg>
                Dashboard
              </button>
            </li>
            <li>
              <button
                (click)="
                  router.navigate(['/admin/anuncios']);
                  selectedButton = 'Anuncios'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Anuncios',
                  'bg-black text-white': selectedButton !== 'Anuncios'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="17" height="20" viewBox="0 0 17 20">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Anuncios',
                      'fill-white': selectedButton !== 'Anuncios'
                    }"
                    id="Vector"
                    d="M16.6426 13.8085C16.5692 13.7192 16.4971 13.6299 16.4263 13.5438C15.4532 12.3558 14.8644 11.6388 14.8644 8.27589C14.8644 6.53482 14.4517 5.10625 13.6383 4.03482C13.0385 3.2433 12.2277 2.64286 11.159 2.19911C11.1452 2.19139 11.133 2.18126 11.1227 2.1692C10.7383 0.870089 9.68647 0 8.50012 0C7.31378 0 6.26235 0.870089 5.87796 2.16786C5.8677 2.17948 5.85559 2.18928 5.84213 2.19688C3.34824 3.23304 2.13625 5.22098 2.13625 8.27455C2.13625 11.6388 1.54838 12.3558 0.57436 13.5424C0.503586 13.6286 0.431485 13.7161 0.358058 13.8071C0.168385 14.038 0.0482111 14.3189 0.0117593 14.6165C-0.0246924 14.9141 0.0241033 15.2161 0.152372 15.4866C0.425292 16.067 1.00696 16.4272 1.67091 16.4272H15.3342C15.9951 16.4272 16.5727 16.0674 16.8465 15.4897C16.9754 15.2191 17.0246 14.917 16.9885 14.619C16.9523 14.321 16.8323 14.0397 16.6426 13.8085ZM8.50012 20C9.13931 19.9995 9.76645 19.8244 10.315 19.4932C10.8636 19.1621 11.3131 18.6873 11.6159 18.1192C11.6302 18.092 11.6372 18.0615 11.6364 18.0307C11.6355 17.9999 11.6268 17.9699 11.611 17.9435C11.5953 17.9171 11.573 17.8953 11.5464 17.8802C11.5199 17.865 11.4899 17.8571 11.4593 17.8571H5.54178C5.51123 17.857 5.48117 17.8649 5.45453 17.88C5.42789 17.8951 5.40557 17.9169 5.38976 17.9433C5.37395 17.9697 5.36518 17.9998 5.3643 18.0306C5.36342 18.0614 5.37047 18.0919 5.38476 18.1192C5.68755 18.6872 6.13701 19.162 6.68549 19.4931C7.23397 19.8242 7.86101 19.9994 8.50012 20Z"
                  />
                </svg>
                Anuncios
              </button>
            </li>
            <li>
              <button
                (click)="
                  router.navigate(['/admin/usuarios']);
                  selectedButton = 'Usuarios'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Usuarios',
                  'bg-black text-white': selectedButton !== 'Usuarios'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Usuarios',
                      'fill-white': selectedButton !== 'Usuarios'
                    }"
                    id="Vector"
                    d="M13.6845 1.45446C12.749 0.516515 11.4423 0 10 0C8.55004 0 7.23902 0.51339 6.30779 1.44553C5.36647 2.38793 4.90783 3.66873 5.01552 5.05176C5.22898 7.78031 7.46497 9.99994 10 9.99994C12.535 9.99994 14.7672 7.78076 14.984 5.05265C15.0931 3.68212 14.6316 2.404 13.6845 1.45446ZM18.4613 19.9999H1.53869C1.31719 20.0026 1.09783 19.9593 0.896579 19.8734C0.695324 19.7874 0.517233 19.6609 0.375265 19.503C0.0627733 19.1561 -0.0631848 18.6825 0.0300818 18.2035C0.43584 16.1133 1.70215 14.3575 3.69248 13.1249C5.4607 12.0307 7.70055 11.4285 10 11.4285C12.2995 11.4285 14.5393 12.0312 16.3075 13.1249C18.2979 14.3571 19.5642 16.1129 19.9699 18.203C20.0632 18.682 19.9372 19.1557 19.6247 19.5026C19.4828 19.6606 19.3047 19.7872 19.1035 19.8732C18.9022 19.9592 18.6828 20.0025 18.4613 19.9999Z"
                  />
                </svg>
                Usuarios
              </button>
            </li>

            <li>
              <button
                (click)="
                  router.navigate(['/admin/cursos']); selectedButton = 'Cursos'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Cursos',
                  'bg-black text-white': selectedButton !== 'Cursos'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="17" height="20" viewBox="0 0 17 20">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Cursos',
                      'fill-white': selectedButton !== 'Cursos'
                    }"
                    id="Vector"
                    d="M16.056 4.65571C16.0807 4.63998 16.1012 4.61747 16.1154 4.59041C16.1296 4.56335 16.1371 4.53269 16.1371 4.50148C16.1371 4.47028 16.1296 4.43962 16.1154 4.41256C16.1012 4.3855 16.0807 4.36298 16.056 4.34726L9.81423 0.386038C9.41485 0.133169 8.96142 0 8.4998 0C8.03818 0 7.58474 0.133169 7.18536 0.386038L0.944811 4.34726C0.920136 4.36298 0.899664 4.3855 0.885436 4.41256C0.871208 4.43962 0.863721 4.47028 0.863721 4.50148C0.863721 4.53269 0.871208 4.56335 0.885436 4.59041C0.899664 4.61747 0.920136 4.63998 0.944811 4.65571L8.41827 9.45792C8.44341 9.47409 8.47205 9.48262 8.50123 9.48262C8.5304 9.48262 8.55905 9.47409 8.58418 9.45792L16.056 4.65571ZM0.245196 5.87032C0.220269 5.8546 0.191983 5.84635 0.163199 5.8464C0.134416 5.84645 0.106154 5.8548 0.0812737 5.87061C0.0563929 5.88642 0.0357748 5.90912 0.0215043 5.93643C0.00723371 5.96373 -0.000183273 5.99467 3.44001e-06 6.02611V13.7883C0.000620386 14.1624 0.0908754 14.5297 0.261792 14.8539C0.432709 15.178 0.678332 15.4476 0.974234 15.6359L7.60096 19.9761C7.6258 19.9917 7.65397 20 7.68265 20C7.71133 20 7.73951 19.9918 7.76435 19.9761C7.7892 19.9605 7.80984 19.938 7.82419 19.9108C7.83855 19.8837 7.84613 19.853 7.84616 19.8216V10.8158C7.84613 10.7845 7.83856 10.7538 7.82421 10.7266C7.80987 10.6995 7.78925 10.677 7.76443 10.6614L0.245196 5.87032ZM9.15385 10.8471V19.8194C9.15388 19.8507 9.16145 19.8815 9.17581 19.9086C9.19017 19.9357 9.21081 19.9582 9.23565 19.9739C9.2605 19.9895 9.28867 19.9978 9.31735 19.9978C9.34603 19.9978 9.3742 19.9895 9.39904 19.9738L16.0254 15.6336C16.321 15.4456 16.5666 15.1764 16.7375 14.8527C16.9085 14.529 16.999 14.162 17 13.7883V6.02611C16.9999 5.99482 16.9923 5.96411 16.9779 5.93705C16.9635 5.91 16.9429 5.88755 16.918 5.87195C16.8932 5.85635 16.865 5.84816 16.8364 5.84818C16.8078 5.84821 16.7796 5.85646 16.7548 5.87211L9.23558 10.6931C9.21081 10.7087 9.19023 10.7311 9.17589 10.7581C9.16155 10.7852 9.15395 10.8158 9.15385 10.8471Z"
                  />
                </svg>
                Cursos
              </button>
            </li>

            <li>
              <button
                (click)="
                  router.navigate(['/admin/certificados']);
                  selectedButton = 'Certificados'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Certificados',
                  'bg-black text-white': selectedButton !== 'Certificados'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="17" height="20" viewBox="0 0 17 20">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Certificados',
                      'fill-white': selectedButton !== 'Certificados'
                    }"
                    d="M8.99351 13.1843C8.83337 13.1977 8.6717 13.2043 8.50852 13.2043C8.31005 13.2043 8.11385 13.1941 7.91993 13.175C6.96061 13.0798 6.031 12.7535 5.19476 12.2185C4.35853 11.6835 3.63543 10.9525 3.07499 10.0755C3.06023 10.0519 3.04036 10.0329 3.01725 10.0203C2.99414 10.0076 2.96854 10.0018 2.94286 10.0033C2.91718 10.0048 2.89225 10.0135 2.87043 10.0288C2.8486 10.044 2.83059 10.0652 2.81807 10.0903L0.0857499 15.5891C-0.0182302 15.8016 -0.0345482 16.0565 0.0751243 16.2639C0.132215 16.3667 0.211747 16.4516 0.306225 16.5105C0.400702 16.5693 0.507013 16.6003 0.615138 16.6005H3.57516C3.67827 16.5962 3.78053 16.6228 3.87139 16.6776C3.96224 16.7323 4.03841 16.8132 4.09202 16.9119L5.55913 19.66C5.61282 19.762 5.689 19.8468 5.78037 19.9064C5.87174 19.9659 5.97523 19.9981 6.08093 20C6.30634 19.986 6.53973 19.8219 6.63346 19.5921L9.14227 13.424C9.1531 13.3972 9.15754 13.3677 9.15515 13.3384C9.15276 13.3092 9.14362 13.2811 9.12863 13.2569C9.11364 13.2328 9.09331 13.2134 9.06962 13.2007C9.04594 13.1879 9.01971 13.1823 8.99351 13.1843ZM16.9112 15.5755L14.1967 10.0865C14.1842 10.0616 14.1662 10.0406 14.1445 10.0256C14.1228 10.0105 14.0981 10.0018 14.0726 10.0002C14.0471 9.99872 14.0216 10.0044 13.9986 10.0168C13.9756 10.0292 13.9558 10.0479 13.9409 10.0712C13.1944 11.2424 12.1628 12.1484 10.9691 12.6812C10.8226 12.7459 10.704 12.8715 10.6382 13.0318L9.23942 16.4781C9.22141 16.5221 9.21209 16.5699 9.21209 16.6183C9.21209 16.6667 9.22141 16.7145 9.23942 16.7585L10.3881 19.5882C10.4811 19.8181 10.7141 19.986 10.9392 20C11.0449 19.9971 11.1483 19.9638 11.2393 19.9034C11.3303 19.843 11.406 19.7575 11.4591 19.6549L12.9212 16.9107C13.0309 16.7046 13.2298 16.5992 13.4442 16.6005H16.4334C16.6865 16.6005 16.8782 16.4526 16.9647 16.1755C16.9951 16.0771 17.0061 15.9725 16.9968 15.8689C16.9876 15.7653 16.9584 15.6652 16.9112 15.5755Z"
                  />
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Certificados',
                      'fill-white': selectedButton !== 'Certificados'
                    }"
                    d="M8.5 0C5.4666 0 3 2.69125 3 6C3 9.30875 5.46774 12 8.5 12C11.5323 12 14 9.30833 14 6C14 2.69167 11.533 0 8.5 0ZM8.5 9.33333C7.89567 9.33333 7.30491 9.13784 6.80242 8.77157C6.29994 8.40529 5.9083 7.8847 5.67703 7.27561C5.44577 6.66652 5.38526 5.9963 5.50316 5.3497C5.62106 4.7031 5.91207 4.10915 6.3394 3.64298C6.76672 3.1768 7.31117 2.85933 7.90389 2.73072C8.49661 2.6021 9.11098 2.66811 9.66931 2.9204C10.2276 3.17269 10.7049 3.59994 11.0406 4.1481C11.3763 4.69626 11.5556 5.34073 11.5556 6C11.5545 6.88372 11.2323 7.73092 10.6595 8.35581C10.0867 8.98069 9.31007 9.33223 8.5 9.33333Z"
                  />
                </svg>
                Certificados
              </button>
            </li>
            <li>
              <button
                (click)="
                  router.navigate(['/admin/reportes']);
                  selectedButton = 'Reportes'
                "
                [ngClass]="{
                  'bg-white text-black': selectedButton === 'Reportes',
                  'bg-black text-white': selectedButton !== 'Reportes'
                }"
                class="rounded-xl py-2 px-4 flex gap-x-2 items-center text-sm w-full transition-all"
              >
                <svg width="17" height="20" viewBox="0 0 17 20">
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Reportes',
                      'fill-white': selectedButton !== 'Reportes'
                    }"
                    d="M9 0.0919897V6.81617C9 6.86492 9.01937 6.91168 9.05384 6.94616C9.08832 6.98063 9.13508 7 9.18383 7H15.908C15.9262 7.00001 15.9439 6.99465 15.959 6.98458C15.9742 6.97451 15.986 6.96019 15.9929 6.94342C15.9999 6.92665 16.0018 6.90819 15.9983 6.89037C15.9948 6.87255 15.9861 6.85616 15.9733 6.84328L9.15672 0.0267288C9.14384 0.0139244 9.12745 0.00522296 9.10963 0.00172294C9.09181 -0.00177708 9.07335 8.10782e-05 9.05658 0.00706311C9.03981 0.0140451 9.02549 0.0258379 9.01542 0.0409529C9.00535 0.0560678 8.99999 0.0738273 9 0.0919897Z"
                  />
                  <path
                    [ngClass]="{
                      'fill-black': selectedButton === 'Reportes',
                      'fill-white': selectedButton !== 'Reportes'
                    }"
                    d="M8.11364 8.57143C8.01117 8.57143 7.91289 8.5338 7.84044 8.46682C7.76798 8.39985 7.72727 8.30901 7.72727 8.21429V0H0.579545C0.42584 0 0.278431 0.0564411 0.169745 0.156907C0.061059 0.257373 0 0.393634 0 0.535714V19.4643C0 19.6064 0.061059 19.7426 0.169745 19.8431C0.278431 19.9436 0.42584 20 0.579545 20H16.4205C16.5742 20 16.7216 19.9436 16.8303 19.8431C16.9389 19.7426 17 19.6064 17 19.4643V8.57143H8.11364ZM13.1364 15.7143H3.86364V14.2857H13.1364V15.7143ZM13.1364 12.1429H3.86364V10.7143H13.1364V12.1429Z"
                  />
                </svg>
                Reportes
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section class="p-2">
        <div class="w-full flex justify-end">
          <button
            (click)="router.navigate(['/home'])"
            class="bg-gradient-to-r from-[#4B4B4B] to-black text-white flex gap-x-2 py-[7px] px-3 rounded-lg text-xs items-center shadow-md shadow-black/20"
          >
            Volver al Sitio Principal
            <img
              class="size-4"
              src="icons/admin/home.svg"
              alt="Icono de Inicio"
            />
          </button>
        </div>
        <div>
          <ng-content></ng-content>
        </div>
      </section>
    </main>
  `,
})
export class AdminLayoutComponent {
  authService = inject(AuthService);
  userService = inject(UserService);
  router = inject(Router);

  user = {} as User;
  selectedButton = 'Dashboard';

  constructor() {}

  ngOnInit() {
    this.userService
      .getUserById(this.authService.getSubFromToken())
      .subscribe((user) => {
        this.user = user;
        console.log(this.user);
      });
  }
}
