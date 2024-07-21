import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout.component';
import { NgClass } from '@angular/common';
import { FooterComponent } from '@netlifeacademic/components/footer.component';

@Component({
  selector: 'app-admin-anuncios',
  standalone: true,
  imports: [AdminLayoutComponent, NgClass, FooterComponent],
  template: `
    <app-admin-layout>
      <h1 class="text-2xl text-[#F86A00] font-bold ml-8">
        Configuración del Anuncio
      </h1>
      
    </app-admin-layout>
  `,
})
export class AdminAnunciosComponent {
}
