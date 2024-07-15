import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  template: `
    <div class="relative min-h-screen flex">
      <img
        class="w-[60vw]"
        src="https://img.freepik.com/free-photo/3d-futuristic-background-with-low-poly-plexus-design_1048-11872.jpg"
        alt=""
      />
      <div
        class="relative w-[40vw] flex justify-center items-center bg-[#E5E5E5]"
      >
        <img
          class="absolute top-0 left-0 w-[15vw] rounded-br-2xl"
          src="logo.jpg"
          alt="Logo Netlife"
        />
        <div class="w-96 my-40">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  constructor() {}
}
