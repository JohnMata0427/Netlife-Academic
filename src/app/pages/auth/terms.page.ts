import { Component } from '@angular/core';
import { CustomTitleComponent } from '@components/custom-title.component';
import { CustomButtonComponent } from '@components/custom-button.component';

@Component({
  standalone: true,
  imports: [CustomTitleComponent, CustomButtonComponent],
  template: `
    <section class="flex flex-col justify-start">
      <app-title-component title="Términos y condiciones" />
      <p class="my-4 pl-16 text-sm">
        Aquí se mostrarán los términos y condiciones de uso de la plataforma.
      </p>
      <app-button-component
        (click)="goBack()"
        text="Volver"
        moreStyles="pl-16"
      />
    </section>
  `,
})
export class TermsPage {
  goBack = () => window.history.back();
}
