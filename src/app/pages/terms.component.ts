import { Component } from '@angular/core';
import { CustomTitleComponent } from '@components/custom-title.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CustomTitleComponent, CustomButtonComponent],
  template: `
    <section class="flex flex-col justify-start">
      <app-custom-title title="Términos y condiciones" />
      <p class="pl-16 my-4 text-sm">
        Aquí se mostrarán los términos y condiciones de uso de la plataforma.
      </p>
      <app-custom-button
        (click)="goBack()"
        text="Volver"
        color="black"
        hoverColor="white"
        class="pl-16"
      ></app-custom-button>
    </section>
  `,
})
export class TermsComponent {
  constructor() {}

  goBack() {
    window.history.back();
  }
}
