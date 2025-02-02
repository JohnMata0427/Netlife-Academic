import { Component } from '@angular/core';
import { CustomTitleComponent } from '@/components/custom-title.component';
import { CustomButtonComponent } from '@/components/custom-button.component';

@Component({
  imports: [CustomTitleComponent, CustomButtonComponent],
  template: `
    <section class="flex flex-col">
      <app-title-component title="Términos y condiciones" />
      <p class="my-4 ml-16 text-sm">
        Aquí se mostrarán los términos y condiciones de uso de la plataforma.
      </p>
      <app-button-component
        (click)="goBack()"
        text="Volver"
        moreStyles="ml-16 px-8"
      />
    </section>
  `,
})
export class TermsPage {
  public goBack = () => window.history.back();
}
