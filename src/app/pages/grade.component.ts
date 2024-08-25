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
        <app-custom-title title="Revisión de la prueba" />
        <h1 class="ml-16 font-bold">Prueba conceptos básicos de redes</h1>
        <div class="m-16 flex flex-col items-center font-light">
          <span>Intentos permitidos</span>
          <span>Este cuestionario se cerró el {{ date }}</span>
          <span>Limite de tiempo: 15 minutos</span>
          <table class="mt-8 w-full">
            <thead class="bg-quinary">
              <tr class="*:w-1/4 *:p-2 *:text-center">
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
                    class="rounded-lg bg-greenlight px-7 py-1 text-xs font-bold hover:bg-greenlight/50"
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
