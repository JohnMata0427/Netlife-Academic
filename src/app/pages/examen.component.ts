import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '../components/custom-button.component';
import { QuestionsComponent } from '../components/connection/question.component';
import { QuestionsSelectComponent } from '../components/connection/question-select.component';
import { QuestionsCheckboxComponent } from '../components/connection/question-checkbox.component';
import { QuestionsBooleanComponent } from '@components/connection/question-boolean.component';
import { QuestionsLineComponent } from '../components/connection/question-line.component';

@Component({
  standalone: true,
  selector: 'app-examen',
  imports: [
    NgClass,
    NgStyle,
    CustomButtonComponent,
    QuestionsComponent,
    QuestionsSelectComponent,
    QuestionsCheckboxComponent,
    QuestionsBooleanComponent,
    QuestionsLineComponent,
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
      <div class="mb-7 mt-12 mx-16 h-4 bg-zinc-300 rounded-lg">
        <div
          [ngStyle]="{ 'width.%': (numeroPregunta / 5) * 100 }"
          class="h-full bg-gradient-to-r from-[#72C234] to-[#7fff1c] rounded-l-lg transition-all duration-500 {{
            numeroPregunta == 5 ? 'rounded-r-lg' : ''
          }}"
        ></div>
      </div>
      <section class="flex md:flex-row flex-col justify-between mx-16 gap-7 ">
        <div class="flex flex-col gap-y-4 md:w-1/4 ">
          <div class="flex justify-center gap-x-4">
            <div
              class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg w-1/2"
            >
              <h2 class="font-bold">Pregunta</h2>
              <span>{{ numeroPregunta }}/5</span>
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
              <span id="minutos"></span>:<span id="segundos"></span>
            </strong>
          </div>
        </div>
        <div class="flex flex-col md:w-4/5">
          <div
            class="border border-[#a5a5a5] p-4 rounded-lg flex flex-col gap-y-4 w-full h-80"
          >
            @if (numeroPregunta == 1) {
            <h2>1. Cual de las siguientes metricas representa a RIP v1</h2>

            <div class="flex flex-col gap-y-4">
              <app-question
                (click)="answersSelected[0] = 'A'"
                [answerSelected]="answersSelected[0]"
                [answerLetter]="'A'"
                [answerText]="'Saltos'"
              />

              <app-question
                (click)="answersSelected[0] = 'B'"
                [answerSelected]="answersSelected[0]"
                [answerLetter]="'B'"
                [answerText]="'Ancho de banda'"
              />

              <app-question
                (click)="answersSelected[0] = 'C'"
                [answerSelected]="answersSelected[0]"
                [answerLetter]="'C'"
                [answerText]="'Retardo'"
              />

              <app-question
                (click)="answersSelected[0] = 'D'"
                [answerSelected]="answersSelected[0]"
                [answerLetter]="'D'"
                [answerText]="'Ninguna de las Anteriores'"
              />
            </div>
            } @else if (numeroPregunta == 2) {
            <h2>
              2. Elige las siguientes métricas de cada protocolo de enrutamiento
              dinámico
            </h2>

            <div class="flex flex-col gap-y-4">
              <app-questions-select
                [question]="'OSPF'"
                [answers]="[
                  'Saltos',
                  'Ancho de banda',
                  'Retardo',
                  'Ninguna de las Anteriores'
                ]"
                [answerSelected]="answersSelected[1]"
              />

              <app-questions-select
                [question]="'RIP v1'"
                [answers]="[
                  'Saltos',
                  'Ancho de banda',
                  'Retardo',
                  'Ninguna de las Anteriores'
                ]"
                [answerSelected]="answersSelected[1]"
              />

              <app-questions-select
                [question]="'EIGRP'"
                [answers]="[
                  'Saltos',
                  'Ancho de banda',
                  'Retardo',
                  'Ninguna de las Anteriores'
                ]"
                [answerSelected]="answersSelected[1]"
              />
            </div>
            } @else if (numeroPregunta == 3) {
            <h2>3. Seleccione tres características sobre una dirección MAC</h2>
            <div class="flex flex-col gap-y-4">
              <app-question-checkbox
                (click)="answersSelected[2] = 'A'"
                [question]="'Tiene 48 bits (6 bytes) de longitud.'"
                [answer]="'A'"
              />
              <app-question-checkbox
                (click)="answersSelected[2] = 'B'"
                [question]="'Se expresa generalmente en notación hexadecimal.'"
                [answer]="'B'"
              />
              <app-question-checkbox
                (click)="answersSelected[2] = 'C'"
                [question]="'Es única para cada dispositivo de red.'"
                [answer]="'C'"
              />
              <app-question-checkbox
                [question]="
                  'Las direcciones MAC cambian cada vez que se reinicia el dispositivo.'
                "
                [answer]="'D'"
              />
              <app-question-checkbox
                (click)="answersSelected[2] = 'E'"
                [question]="
                  'Una dirección MAC está compuesta por 10 dígitos decimales.'
                "
                [answer]="'E'"
              />
            </div>
            } @else if (numeroPregunta == 4) {
            <h2>4. Una mascara clase C tiene 256 redes</h2>
            <app-question-boolean [answerSelected]="answersSelected[3]" />
            } @else if (numeroPregunta == 5) {
            <h2>5. Une cada protoclo de red con su función principal</h2>
            <app-question-line
              [questions]="['HTTP', 'DHCP', 'DNS', 'SMTP', 'FTP']"
              [answers]="[
                'Protocolo de transferencia de archivos',
                'Protocolo de configuración dinámica de host',
                'Protocolo de resolución de nombres de dominio',
                'Protocolo de transferencia de hipertexto',
                'Protocolo de transferencia de correo simple'
              ]"
            />
            }
          </div>
          <div
            class="flex {{
              numeroPregunta > 1 ? 'justify-between' : 'justify-end'
            }}"
          >
            @if (numeroPregunta > 1) {
            <app-custom-button
              [text]="'Anterior'"
              [color]="'orange'"
              [hoverColor]="'white'"
              [moreStyles]="'mt-6 w-52 justify-center text-black'"
              (click)="
                router.navigate(['/examen'], {
                  queryParams: { pregunta: +numeroPregunta - 1 }
                })
              "
            ></app-custom-button>
            }
            <app-custom-button
              [text]="numeroPregunta < 5 ? 'Siguiente' : 'Finalizar'"
              [color]="'orange'"
              [hoverColor]="'white'"
              [moreStyles]="'mt-6 w-52 justify-center text-black'"
              (click)="
                numeroPregunta < 5
                  ? router.navigate(['/examen'], {
                      queryParams: { pregunta: +numeroPregunta + 1 }
                    })
                  : (finish = true)
              "
            ></app-custom-button>
          </div>
        </div>
      </section>
    </main>
    @if (finish) {
    <div class="z-50 items-center flex absolute inset-0 justify-center">
      <div class="flex flex-col items-end relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer absolute -top-7 -right-7 z-50 size-4"
          viewBox="0 0 273 273"
          (click)="finish = false"
        >
          <path
            d="m171 137 95-95a24 24 0 1 0-34-34l-95 95L42 8A24 24 0 0 0 8 42l95 95-95 95a24 24 0 0 0 34 34l95-95 95 95a24 24 0 1 0 34-34l-95-95Z"
            class="fill-red-600"
          />
        </svg>
        <div
          class="bg-[#FBA100] flex flex-col items-center py-4 px-8 rounded-lg gap-y-4"
        >
          <span class="text-center font-light text-sm"
            >Muy bien, has terminado un desafío más para tu aprendizaje.</span
          >
          <strong class="text-center text-sm"
            >¿Estás seguro de enviar tus respuestas?</strong
          >
          <div class="flex justify-center gap-x-4">
            <app-custom-button
              [text]="'Cancelar'"
              [color]="'gray'"
              [hoverColor]="'white'"
              [moreStyles]="'w-36 justify-center'"
              (click)="finish = false"
            ></app-custom-button>
            <app-custom-button
              [text]="'Enviar'"
              [color]="'black'"
              [hoverColor]="'white'"
              [moreStyles]="'w-36 justify-center'"
              (click)="router.navigate(['/mis-cursos'])"
            ></app-custom-button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-white/75" (click)="finish = false"></div>
    }
  `,
})
export class ExamenComponent {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.numeroPregunta = params['pregunta'];
    });
  }

  finish = false;
  numeroPregunta!: number;
  answersSelected!: string[];

  minutosElement!: HTMLElement;
  segundosElement!: HTMLElement;
  fechaFinal!: number;

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

    if (tiempoRestante < 0) this.router.navigate(['/mis-cursos']);

    setInterval(() => this.tiempoRestante(), 1000);
  }
}
