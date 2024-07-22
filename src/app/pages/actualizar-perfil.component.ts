import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@netlifeacademic/services/user.service';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { AuthService } from '@netlifeacademic/services/auth.service';
import { UserLayout } from '../layouts/user-layout.component';
import { CustomButtonComponent } from '../components/custom-button.component';

@Component({
  selector: 'app-actualizar-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, UserLayout, CustomButtonComponent],
  template: `
    <app-user-layout>
      <div class="relative">
        <div class="relative">
          <img
            class="w-full h-auto"
            src="profile/background-profile.png"
            alt="Portada del Perfil"
          />
          <button
            class="group absolute bottom-4 right-12 flex items-center justify-center gap-x-2 px-4 text-md rounded-md h-10 hover:before:bg-redborder-red-500 overflow-hidden border border-white bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full text-sm"
          >
            <svg class="z-10" width="29" height="29" viewBox="0 0 29 29">
              <g id="image">
                <path
                  class="group-hover:fill-white"
                  id="Vector"
                  d="M22.8409 3.58484L5.34104 3.51984C4.4131 3.5174 3.52208 3.88317 2.86349 4.53689C2.2049 5.1906 1.83252 6.07888 1.82806 7.00681L1.77606 21.0067C1.77363 21.9347 2.1394 22.8257 2.79311 23.4843C3.44683 24.1429 4.3351 24.5152 5.26304 24.5197L22.7629 24.5847C23.6909 24.5871 24.5819 24.2214 25.2405 23.5676C25.8991 22.9139 26.2714 22.0257 26.2759 21.0977L26.3279 7.09782C26.3303 6.16987 25.9646 5.27886 25.3108 4.62027C24.6571 3.96168 23.7689 3.5893 22.8409 3.58484ZM18.4529 7.06856C18.9721 7.07049 19.4791 7.22633 19.9097 7.51637C20.3403 7.80641 20.6752 8.21763 20.8721 8.69802C21.069 9.17841 21.119 9.7064 21.0158 10.2152C20.9127 10.724 20.6609 11.1908 20.2924 11.5566C19.924 11.9223 19.4553 12.1706 18.9457 12.27C18.4362 12.3694 17.9086 12.3154 17.4297 12.115C16.9507 11.9145 16.542 11.5765 16.2552 11.1438C15.9684 10.7111 15.8163 10.203 15.8182 9.6838C15.8215 8.98783 16.1008 8.32161 16.5947 7.83131C17.0887 7.34102 17.757 7.0667 18.4529 7.06856ZM5.26954 22.7697C4.80541 22.768 4.36098 22.582 4.03401 22.2525C3.70705 21.9231 3.52433 21.4773 3.52605 21.0132L3.53979 17.3147L8.74344 12.7239C9.2455 12.2819 9.89717 12.048 10.5657 12.0698C11.2342 12.0916 11.8692 12.3674 12.3415 12.8411L15.8802 16.3986L9.44599 22.7852L5.26954 22.7697ZM24.5259 21.0912C24.5242 21.5553 24.3382 21.9998 24.0087 22.3267C23.6793 22.6537 23.2335 22.8364 22.7694 22.8347L11.9211 22.7944L18.5859 16.179C19.0575 15.7809 19.6549 15.5629 20.2721 15.5636C20.8892 15.5642 21.4861 15.7836 21.9569 16.1827L24.5361 18.3481L24.5259 21.0912Z"
                />
              </g>
            </svg>

            <span class="z-10">Cambiar el fondo</span>
          </button>
        </div>
        <div class="absolute -bottom-28 left-16 flex flex-col items-center">
          <img
            class="rounded-full size-52 border-white border-8"
            [src]="imagePreview"
            alt="Foto de Perfil"
          />
          <div
            (click)="fileChooser()"
            class="absolute group bottom-3 right-3 bg-black rounded-full size-12 group overflow-hidden border border-black shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-white before:duration-500 hover:shadow-white hover:before:left-0 hover:before:w-full"
          >
            <input
              id="filechooser"
              class="hidden"
              type="file"
              (change)="onFileChange($event)"
            />

            <svg
              class="absolute bottom-[13px] right-2"
              width="29"
              height="21"
              viewBox="0 0 29 21"
            >
              <path
                class="fill-white group-hover:fill-black"
                id="Vector"
                d="M25.0654 3.81818H21.3779C21.1904 3.81818 20.9579 3.70244 20.7767 3.51989L19.1554 1.07744C19.1298 1.03868 19.1012 1.00179 19.0698 0.967074C18.5098 0.343636 17.7529 0 16.9404 0H11.1904C10.3779 0 9.62105 0.343636 9.06105 0.967074C9.02969 1.00179 9.00107 1.03868 8.97543 1.07744L7.35418 3.52347C7.21543 3.66784 7.02043 3.82176 6.81543 3.82176V3.34449C6.81543 3.09133 6.71007 2.84854 6.52254 2.66952C6.335 2.49051 6.08065 2.38994 5.81543 2.38994H4.31543C4.05021 2.38994 3.79586 2.49051 3.60832 2.66952C3.42079 2.84854 3.31543 3.09133 3.31543 3.34449V3.82176H3.06543C2.27003 3.82255 1.50745 4.12451 0.945023 4.66137C0.382593 5.19824 0.0662569 5.92616 0.0654297 6.6854V18.1364C0.0662569 18.8956 0.382593 19.6235 0.945023 20.1604C1.50745 20.6973 2.27003 20.9992 3.06543 21H25.0654C25.8608 20.9992 26.6234 20.6973 27.1858 20.1604C27.7483 19.6235 28.0646 18.8956 28.0654 18.1364V6.68182C28.0646 5.92258 27.7483 5.19466 27.1858 4.65779C26.6234 4.12093 25.8608 3.81897 25.0654 3.81818ZM17.8679 15.8872C17.0509 16.525 16.0721 16.9458 15.0303 17.1074C13.9885 17.269 12.9205 17.1656 11.9339 16.8075C10.9473 16.4495 10.0771 15.8495 9.41086 15.0681C8.74464 14.2867 8.30601 13.3514 8.13918 12.3566C7.92567 12.4257 7.69395 12.424 7.48161 12.3516C7.26927 12.2793 7.08879 12.1405 6.96944 11.9579C6.8501 11.7753 6.79889 11.5596 6.82415 11.3458C6.8494 11.1319 6.94962 10.9325 7.10855 10.7798L8.35855 9.58662C8.54607 9.40774 8.80033 9.30726 9.06543 9.30726C9.33053 9.30726 9.58479 9.40774 9.7723 9.58662L11.0223 10.7798C11.1621 10.9133 11.2572 11.0833 11.2958 11.2684C11.3343 11.4535 11.3145 11.6454 11.2389 11.8198C11.1632 11.9941 11.0351 12.1432 10.8708 12.2481C10.7064 12.353 10.5131 12.409 10.3154 12.4091C10.2736 12.4086 10.2319 12.4058 10.1904 12.4007C10.3578 13.0229 10.6866 13.5947 11.1466 14.0634C11.6066 14.5322 12.183 14.8827 12.8224 15.0827C13.4619 15.2826 14.1438 15.3255 14.8052 15.2075C15.4666 15.0894 16.0862 14.8141 16.6067 14.4071C16.7084 14.3273 16.8257 14.2674 16.9517 14.231C17.0777 14.1945 17.2101 14.1822 17.3411 14.1947C17.4722 14.2072 17.5993 14.2443 17.7153 14.3038C17.8313 14.3633 17.9338 14.4442 18.017 14.5416C18.1001 14.6391 18.1623 14.7513 18.2 14.8717C18.2376 14.9922 18.2499 15.1186 18.2362 15.2436C18.2226 15.3686 18.1832 15.4899 18.1203 15.6003C18.0574 15.7107 17.9723 15.8083 17.8698 15.8872H17.8679ZM21.0223 12.1287L19.7723 13.3219C19.5848 13.5008 19.3305 13.6012 19.0654 13.6012C18.8003 13.6012 18.5461 13.5008 18.3586 13.3219L17.1086 12.1287C16.9624 11.9887 16.8653 11.8089 16.8307 11.614C16.7962 11.4192 16.8258 11.2189 16.9156 11.0408C17.0054 10.8627 17.1509 10.7156 17.332 10.6198C17.5131 10.524 17.7209 10.4842 17.9267 10.506C17.7596 9.88277 17.4303 9.30997 16.9693 8.84075C16.5083 8.37152 15.9306 8.02107 15.2898 7.82194C14.649 7.62281 13.9659 7.58145 13.3038 7.7017C12.6418 7.82194 12.0223 8.0999 11.5029 8.50977C11.4025 8.5946 11.2852 8.65927 11.1581 8.69995C11.0309 8.74063 10.8965 8.75648 10.7628 8.74656C10.6291 8.73664 10.4988 8.70115 10.3798 8.6422C10.2608 8.58326 10.1554 8.50206 10.0699 8.40344C9.98437 8.30482 9.92052 8.19079 9.88213 8.06814C9.84374 7.94549 9.83159 7.81672 9.8464 7.6895C9.8612 7.56227 9.90266 7.43919 9.96832 7.32757C10.034 7.21595 10.1225 7.11808 10.2286 7.03977C11.0444 6.39583 12.0242 5.96938 13.0685 5.80373C14.1128 5.63807 15.1844 5.7391 16.1746 6.09657C17.1648 6.45404 18.0382 7.05521 18.7063 7.83906C19.3744 8.62291 19.8133 9.56154 19.9786 10.5597C20.1922 10.487 20.4253 10.4858 20.6397 10.5562C20.8541 10.6267 21.0371 10.7646 21.1586 10.9474C21.2801 11.1302 21.3329 11.3469 21.3084 11.5621C21.2838 11.7773 21.1834 11.9781 21.0236 12.1317L21.0223 12.1287Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <section class="flex justify-center mt-2">
        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="w-1/2 flex flex-col p-8"
        >
          <h1 class="text-2xl text-[#FD6A00] font-semibold">Datos generales</h1>
          <div class="w-full flex mt-5 gap-x-5">
            <div class="flex flex-col w-1/2">
              <label for="">Nombre</label>
              <input
                formControlName="name"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.name }}"
                placeholder="Coloca tu nombre aquí"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="">Apellidos</label>
              <input
                formControlName="lastname"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.lastname }}"
                placeholder="Coloca tus apellidos aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Empresa</label>
              <input
                formControlName="company"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.company }}"
                placeholder="Coloca tu empresa aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Área</label>
              <input
                formControlName="area"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.area }}"
                placeholder="Coloca tu área aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Nivel</label>
              <input
                formControlName="level"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.level }}"
                placeholder="Coloca tu nivel aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Cargo</label>
              <input
                formControlName="position"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.position }}"
                placeholder="Coloca tu cargo aquí"
              />
            </div>
          </div>
          <div class="flex mt-5 gap-x-5">
            <div class="flex flex-col w-full">
              <label for="">Fecha de Nacimiento</label>
              <input
                formControlName="birthdate"
                class="border border-black rounded p-1 mt-2"
                type="date"
                value="{{ user.birthdate }}"
                placeholder="Coloca tu fecha de nacimiento aquí"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Estado</label>
              <input
                formControlName="state"
                class="border border-black rounded p-1 mt-2"
                type="text"
                value="{{ user.state }}"
                placeholder="Coloca tu estado aquí"
              />
            </div>
          </div>

          <div class="flex justify-center gap-5">
            <!-- <button
              class="bg-gradient-to-r from-[#FEE500] to-[#FD6A00] py-2 px-8 rounded-md mt-10 font-medium text-md"
            >
              Actualizar Perfil
            </button> -->

            <app-custom-button
              [hoverColor]="'white'"
              [color]="'orange'"
              [text]="'Actualizar Perfil'"
              [moreStyles]="'mt-10'"
              [loading]="loading"
            />
            <app-custom-button
              (click)="cancel = true"
              [hoverColor]="'white'"
              [color]="'gray'"
              [text]="'Cancelar'"
              [moreStyles]="'mt-10'"
            />
          </div>
        </form>
      </section>
    </app-user-layout>
  `,
})
export class ActualizarPerfilComponent {
  id = '';
  form: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  image: File | null = null;
  cancel = false;
  loading = false;

  user = {} as User;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      company: new FormControl(),
      area: new FormControl(),
      level: new FormControl(),
      position: new FormControl(),
      birthdate: new FormControl(),
      state: new FormControl(),
    });
  }

  fileChooser() {
    document.getElementById('filechooser')?.click();
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      this.image = file;
    }
  }

  onSubmit() {
    this.loading = true;
    if (this.cancel) {
      this.router.navigate(['/mi-perfil']);
      return;
    }

    if (this.image)
      this.userService.updatePhoto(this.image, this.id).subscribe();

    this.userService.updateUser(this.form.value, this.id).subscribe({
      next: () => {
        this.router.navigate(['/mi-perfil']);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit() {
    this.id = this.authService.getSubFromToken();
    this.userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      this.imagePreview = result.imageUrl;
    });
  }
}
