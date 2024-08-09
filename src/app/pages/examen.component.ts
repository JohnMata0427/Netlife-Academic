import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-examen',
  imports: [],
  template: `
    <header
      class="bg-black text-white text-center py-4 px-8 flex items-center gap-x-4"
    >
      <img src="/logo.jpg" alt="Logo de la empresa" class="h-8" />
      <h1 class="text-lg font-bold">
        Evaluación 1: Introducción a las redes de computadores
      </h1>
    </header>
    <main>
      <hr class="h-4" />
      <section class="flex justify-evenly">
        <div class="flex flex-col gap-y-4 w-1/5">
          <div class="flex justify-center gap-x-4">
            <div class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg">
              <h2 class="font-bold">Pregunta</h2>
              <span>1/5</span>
            </div>
            <div class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg">
              <h3 class="font-bold">Puntuación</h3>
              <span>0/5</span>
            </div>
          </div>
          <div
            class="bg-[#f0000b] text-white flex justify-center items-center rounded-lg p-2 gap-x-2"
          >
            <span>Tiempo restante</span>
            <strong> <span>10</span>:<span>00</span> </strong>
          </div>
        </div>
        <div class="border border-[#a5a5a5] p-4 w-3/5 rounded-lg flex flex-col gap-y-4">
          <h2>1. ¿Cual de las siguientes metricas representa a RIP v1?</h2>
          <div>
            <div>
              <input type="radio" name="question1" value="1" id="question1-1" />
              <label for="question1-1">Saltos</label>
            </div>
            <div>
              <input type="radio" name="question1" value="2" id="question1-2" />
              <label for="question1-2">Ancho de banda</label>
            </div>
            <div>
              <input type="radio" name="question1" value="3" id="question1-3" />
              <label for="question1-3">Retardo</label>
            </div>
            <div>
              <input type="radio" name="question1" value="3" id="question1-3" />
              <label for="question1-3">Ninguna de las anteriores</label>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class ExamenComponent {
  constructor() {}
}
