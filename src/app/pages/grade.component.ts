import { Component } from '@angular/core';
import { UserLayout } from '@layouts/user-layout.component';
import { CustomTitleComponent } from '../components/custom-title.component';

@Component({
  standalone: true,
  selector: 'app-grade',
  imports: [UserLayout, CustomTitleComponent],
  template: `
    <app-user-layout>
      <section>
        <app-custom-title [title]="'Revisión de la prueba'" />
        <h1 class="ml-16 font-bold">Prueba conceptos básicos de redes</h1>
        <div class="flex flex-col items-center font-light m-16">
          <span>Intentos permitidos</span>
          <span>Este cuestionario se cerró el {{ date }}</span>
          <span>Limite de tiempo: 15 minutos</span>
          <table class="w-full mt-8">
            <thead class="bg-quinary">
              <tr class="*:p-2 *:text-center *:w-1/4">
                <th>Estado</th>
                <th>Puntos</th>
                <th>Calificación</th>
                <th>Revisión</th>
              </tr>
            </thead>
            <tbody>
              <tr class="*:p-2 *:text-center">
                <td>Finalizado</td>
                <td>20/25</td>
                <td>8/10</td>
                <td>
                  <button
                    class="bg-greenlight py-1 px-7 rounded-lg font-bold text-xs hover:bg-greenlight/50 transition-all"
                  >
                    Revisión de la prueba
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </app-user-layout>
  `,
})
export class GradeComponent {
  date = Intl.DateTimeFormat('es-EC', { dateStyle: 'full' }).format(Date.now());

  constructor() {}
}
