import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
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
      class="flex gap-4 bg-[#0b0603] px-4 py-2.5 text-white shadow-sm shadow-black"
    >
      <img src="/logo.webp" alt="Logo de la empresa" class="h-8" />
      <h1 class="font-bold">
        Evaluación 1: Introducción a las redes de computadores
      </h1>
    </header>
    <main>
      <div class="mx-16 mb-7 mt-12 h-4 rounded-lg bg-quinary">
        <div
          [ngStyle]="{ 'width.%': (numeroPregunta / 5) * 100 }"
          class="h-full bg-gradient-to-r from-greenlight to-green-500 rounded-l-lg {{
            numeroPregunta == 5 ? 'rounded-r-lg' : ''
          }}"
        ></div>
      </div>
      <section class="mx-16 flex flex-col justify-between gap-7 md:flex-row">
        <div class="flex flex-col gap-4 md:w-1/4">
          <div class="flex justify-center gap-4">
            <div
              class="flex w-1/2 flex-col items-center rounded-lg bg-orangelight p-4"
            >
              <h2 class="font-bold">Pregunta</h2>
              <span>{{ numeroPregunta }}/5</span>
            </div>
            <div
              class="flex w-1/2 flex-col items-center rounded-lg bg-orangelight p-4"
            >
              <h3 class="font-bold">Puntuación</h3>
              <span>0/5</span>
            </div>
          </div>
          <div
            class="flex items-center justify-center gap-2 rounded-lg bg-tertiary p-2 text-white"
          >
            <span>Tiempo restante:</span>
            <strong>
              <span id="minutos"></span>:<span id="segundos"></span>
            </strong>
          </div>
        </div>
        <div class="flex flex-col md:w-4/5">
          <div
            class="flex h-80 w-full flex-col gap-4 rounded-lg border border-quinary p-4"
          >
            @if (numeroPregunta == 1) {
              <h2>1. Cual de las siguientes metricas representa a RIP v1</h2>

              <div class="flex flex-col gap-4">
                <app-question
                  (click)="answersSelected[0] = 'A'"
                  [answerSelected]="answersSelected[0]"
                  answerLetter="A"
                  answerText="Saltos"
                />

                <app-question
                  (click)="answersSelected[0] = 'B'"
                  [answerSelected]="answersSelected[0]"
                  answerLetter="B"
                  answerText="Ancho de banda"
                />

                <app-question
                  (click)="answersSelected[0] = 'C'"
                  [answerSelected]="answersSelected[0]"
                  answerLetter="C"
                  answerText="Retardo"
                />

                <app-question
                  (click)="answersSelected[0] = 'D'"
                  [answerSelected]="answersSelected[0]"
                  answerLetter="D"
                  answerText="Ninguna de las Anteriores"
                />
              </div>
            } @else if (numeroPregunta == 2) {
              <h2>
                2. Elige las siguientes métricas de cada protocolo de
                enrutamiento dinámico
              </h2>

              <div class="flex flex-col gap-4">
                <app-questions-select
                  question="OSPF"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                  [answerSelected]="answersSelected[1]"
                />

                <app-questions-select
                  question="RIP v1"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                  [answerSelected]="answersSelected[1]"
                />

                <app-questions-select
                  question="EIGRP"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                  [answerSelected]="answersSelected[1]"
                />
              </div>
            } @else if (numeroPregunta == 3) {
              <h2>
                3. Seleccione tres características sobre una dirección MAC
              </h2>
              <div class="flex flex-col gap-4">
                <app-question-checkbox
                  (click)="answersSelected[2] = 'A'"
                  question="Tiene 48 bits (6 bytes) de longitud."
                  answer="A"
                />
                <app-question-checkbox
                  (click)="answersSelected[2] = 'B'"
                  [question]="
                    'Se expresa generalmente en notación hexadecimal.'
                  "
                  answer="B"
                />
                <app-question-checkbox
                  (click)="answersSelected[2] = 'C'"
                  question="Es única para cada dispositivo de red."
                  answer="C"
                />
                <app-question-checkbox
                  [question]="
                    'Las direcciones MAC cambian cada vez que se reinicia el dispositivo.'
                  "
                  answer="D"
                />
                <app-question-checkbox
                  (click)="answersSelected[2] = 'E'"
                  [question]="
                    'Una dirección MAC está compuesta por 10 dígitos decimales.'
                  "
                  answer="E"
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
                  'Protocolo de transferencia de correo simple',
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
                text="Anterior"
                color="orange"
                moreStyles="mt-6 w-52 justify-center text-black"
                (click)="
                  router.navigate(['/examen'], {
                    queryParams: { pregunta: +numeroPregunta - 1 },
                  })
                "
              />
            }
            <app-custom-button
              [text]="numeroPregunta < 5 ? 'Siguiente' : 'Finalizar'"
              color="orange"
              moreStyles="mt-6 w-52 justify-center text-black"
              (click)="
                numeroPregunta < 5
                  ? router.navigate(['/examen'], {
                      queryParams: { pregunta: +numeroPregunta + 1 },
                    })
                  : (finish = true)
              "
            />
          </div>
        </div>
      </section>
    </main>
    @if (finish) {
      <div class="absolute inset-0 z-50 flex items-center justify-center">
        <div class="relative flex flex-col items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            (click)="finish = false"
            class="absolute -right-7 -top-7 z-50 size-4 cursor-pointer"
            viewBox="0 0 273 273"
          >
            <path
              d="m171 137 95-95a24 24 0 1 0-34-34l-95 95L42 8A24 24 0 0 0 8 42l95 95-95 95a24 24 0 0 0 34 34l95-95 95 95a24 24 0 1 0 34-34l-95-95Z"
              class="filltertiary"
            />
          </svg>
          <div
            class="flex flex-col items-center gap-4 rounded-lg bg-orangelight px-8 py-4"
          >
            <span class="text-center text-sm font-light"
              >Muy bien, has terminado un desafío más para tu aprendizaje.</span
            >
            <strong class="text-center text-sm"
              >¿Estás seguro de enviar tus respuestas?</strong
            >
            <div class="flex justify-center gap-4">
              <app-custom-button
                text="Cancelar"
                color="gray"
                moreStyles="gap-2 group"
                (click)="finish = false"
              />
              <app-custom-button
                text="Enviar"
                moreStyles="gap-2 group"
                (click)="router.navigate(['/grade'])"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed inset-0 z-40 bg-white opacity-75"
        (click)="finish = false"
      ></div>
    }
  `,
})
export class ExamenComponent {
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe(({ pregunta }) => {
      this.numeroPregunta = pregunta;
    });
  }

  finish = false;
  numeroPregunta!: number;
  answersSelected = ['', '', '', '', ''];

  minutosElement!: HTMLElement;
  segundosElement!: HTMLElement;
  fechaFinal!: number;

  ngOnInit() {
    this.fechaFinal = new Date(Date.now() + 600000).getTime();
    this.minutosElement = document.getElementById('minutos')!;
    this.segundosElement = document.getElementById('segundos')!;
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

    if (tiempoRestante < 0) this.router.navigate(['/grade']);

    setInterval(() => this.tiempoRestante(), 1000);
  }
}
