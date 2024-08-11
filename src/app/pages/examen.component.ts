import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '../components/custom-button.component';
import { QuestionsComponent } from '../components/connection/question.component';
import { QuestionsSelectComponent } from '../components/connection/question-select.component';

@Component({
  standalone: true,
  selector: 'app-examen',
  imports: [
    NgClass,
    CustomButtonComponent,
    QuestionsComponent,
    QuestionsSelectComponent,
  ],
  template: `
    <header
      class="bg-black text-white text-center py-4 px-8 flex items-center gap-x-4"
    >
      <img src="/logo.webp" alt="Logo de la empresa" class="h-8" />
      <h1 class="text-lg font-bold">
        Evaluación 1: Introducción a las redes de computadores
      </h1>
    </header>
    <main>
      <hr class="mb-7 mt-12 mx-16 border-8 border-zinc-300 rounded-lg" />
      <section class="flex md:flex-row flex-col justify-between mx-16 gap-7 ">
        <div class="flex flex-col gap-y-4 md:w-1/4 ">
          <div class="flex justify-center gap-x-4">
            <div
              class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg w-1/2"
            >
              <h2 class="font-bold">Pregunta</h2>
              <span>1/5</span>
            </div>
            <div
              class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg  w-1/2"
            >
              <h3 class="font-bold">Puntuación</h3>
              <span>0/5</span>
            </div>
          </div>
          <div
            class="bg-[#f0000b] text-white flex justify-center items-center rounded-lg p-2 gap-x-2"
          >
            <span>Tiempo restante:</span>
            <strong>
              <span id="minutos">10</span>:<span id="segundos">00</span>
            </strong>
          </div>
        </div>
        <div class="flex flex-col  md:w-4/5 items-end">
          <div
            class="border border-[#a5a5a5] p-4 rounded-lg flex flex-col gap-y-4 w-full"
          >
            <h2>1. Cual de las siguientes metricas representa a RIP v1</h2>

            <div class="flex justify-between"></div>
          </div>
          <app-custom-button
            [text]="'Siguiente'"
            [color]="'orangelight'"
            [hoverColor]="'white'"
            [moreStyles]="'mt-6 w-52 justify-center text-black'"
            (click)="
              router.navigate(['/examen'], {
                queryParams: { pregunta: numeroPregunta + 1 }
              })
            "
          ></app-custom-button>
        </div>
      </section>
    </main>
  `,
})
export class ExamenComponent {
  constructor(public router: Router) {}
  numeroPregunta = 1;
  
  minutosElement!: HTMLElement;
  segundosElement!: HTMLElement;
  fechaFinal = 0;

  ngOnInit() {
    this.fechaFinal = new Date(Date.now() + 600000).getTime();
    this.minutosElement = document.getElementById('minutos') as HTMLElement;
    this.segundosElement = document.getElementById('segundos') as HTMLElement;
    this.tiempoRestante();
  }

  tiempoRestante() {
    let tiempoRestante = this.fechaFinal - Date.now();
    let minuto = Math.floor(tiempoRestante / 60000)
      .toString()
      .padStart(2, '0');
    let segundo = Math.floor((tiempoRestante % 60000) / 1000)
      .toString()
      .padStart(2, '0');
    this.minutosElement.innerHTML = minuto;
    this.segundosElement.innerHTML = segundo;
    setInterval(() => this.tiempoRestante(), 1000);
  }
}
