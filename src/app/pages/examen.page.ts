import { Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { QuestionsComponent } from '@/components/questions/question.component';
import { QuestionsSelectComponent } from '@/components/questions/question-select.component';
import { QuestionsCheckboxComponent } from '@/components/questions/question-checkbox.component';
import { QuestionsBooleanComponent } from '@/components/questions/question-boolean.component';
import { QuestionsLineComponent } from '@/components/questions/question-line.component';
import { FooterComponent } from '@/components/footer.component';

@Component({
  imports: [
    NgStyle,
    CustomButtonComponent,
    QuestionsComponent,
    QuestionsSelectComponent,
    QuestionsCheckboxComponent,
    QuestionsBooleanComponent,
    QuestionsLineComponent,
    FooterComponent,
  ],
  template: `
    <header
      class="flex flex-col items-center gap-4 bg-black py-2.5 text-white shadow-sm shadow-black md:flex-row md:px-4"
    >
      <img class="h-8" src="/logo.webp" alt="Logo de la empresa" />
      <h1 class="text-center font-bold">
        Evaluación 1: Introducción a las redes de computadores
      </h1>
    </header>
    <main>
      <div class="bg-quinary mx-16 mt-12 mb-7 h-4 rounded-lg">
        <div
          class="h-full bg-gradient-to-r from-greenlight to-green-500 rounded-l-lg {{
            numeroPregunta == 5 ? 'rounded-r-lg' : ''
          }}"
          [ngStyle]="{ 'width.%': (numeroPregunta / 5) * 100 }"
        ></div>
      </div>
      <section class="mx-16 flex flex-col justify-between gap-7 md:flex-row">
        <div class="flex flex-col gap-4 md:w-1/4">
          <div class="flex justify-center gap-4">
            <div
              class="bg-orangelight flex w-1/2 flex-col items-center rounded-lg p-4"
            >
              <h2 class="font-bold">Pregunta</h2>
              <span>{{ numeroPregunta }}/5</span>
            </div>
            <div
              class="bg-orangelight flex w-1/2 flex-col items-center rounded-lg p-4 text-center"
            >
              <h3 class="font-bold">Puntuación</h3>
              <span>5 puntos</span>
            </div>
          </div>
          <div
            class="bg-tertiary flex items-center justify-center gap-2 rounded-lg p-2 text-white"
          >
            <span>Tiempo restante:</span>
            <strong>
              <span id="minutos"></span>:<span id="segundos"></span>
            </strong>
          </div>
        </div>
        <div class="flex flex-col md:w-4/5">
          <div
            class="border-quinary flex h-80 w-full flex-col gap-4 rounded-lg border p-4"
          >
            @if (numeroPregunta == 1) {
              <h2>1. Cual de las siguientes metricas representa a RIP v1</h2>

              <div class="flex flex-col gap-4">
                <app-answer-question
                  answerText="Saltos"
                  answerLetter="A"
                  [answerSelected]="answersSelected[0]"
                  (click)="answersSelected[0] = 'A'"
                />

                <app-answer-question
                  answerText="Ancho de banda"
                  answerLetter="B"
                  [answerSelected]="answersSelected[0]"
                  (click)="answersSelected[0] = 'B'"
                />

                <app-answer-question
                  answerText="Retardo"
                  answerLetter="C"
                  [answerSelected]="answersSelected[0]"
                  (click)="answersSelected[0] = 'C'"
                />

                <app-answer-question
                  answerText="Ninguna de las Anteriores"
                  answerLetter="D"
                  [answerSelected]="answersSelected[0]"
                  (click)="answersSelected[0] = 'D'"
                />
              </div>
            } @else if (numeroPregunta == 2) {
              <h2>
                2. Elige las siguientes métricas de cada protocolo de
                enrutamiento dinámico
              </h2>

              <div class="flex flex-col gap-4">
                <app-select-question
                  question="OSPF"
                  [answerSelected]="answersSelected[1]"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                />

                <app-select-question
                  question="RIP v1"
                  [answerSelected]="answersSelected[1]"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                />

                <app-select-question
                  question="EIGRP"
                  [answerSelected]="answersSelected[1]"
                  [answers]="[
                    'Saltos',
                    'Ancho de banda',
                    'Retardo',
                    'Ninguna de las Anteriores',
                  ]"
                />
              </div>
            } @else if (numeroPregunta == 3) {
              <h2>
                3. Seleccione tres características sobre una dirección MAC
              </h2>
              <div class="flex flex-col gap-4">
                <app-checkbox-question
                  question="Tiene 48 bits (6 bytes) de longitud."
                  answer="A"
                  (click)="answersSelected[2] = 'A'"
                />
                <app-checkbox-question
                  question="Se expresa generalmente en notación hexadecimal."
                  answer="B"
                  (click)="answersSelected[2] = 'B'"
                />
                <app-checkbox-question
                  question="Es única para cada dispositivo de red."
                  answer="C"
                  (click)="answersSelected[2] = 'C'"
                />
                <app-checkbox-question
                  question="Las direcciones MAC cambian cada vez que se reinicia el dispositivo."
                  answer="D"
                />
                <app-checkbox-question
                  question="Una dirección MAC está compuesta por 10 dígitos decimales."
                  answer="E"
                  (click)="answersSelected[2] = 'E'"
                />
              </div>
            } @else if (numeroPregunta == 4) {
              <h2>4. Una mascara clase C tiene 256 redes</h2>
              <app-boolean-question [answerSelected]="answersSelected[3]" />
            } @else if (numeroPregunta == 5) {
              <h2>5. Une cada protoclo de red con su función principal</h2>
              <app-line-question
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
            }} md:flex-row flex-col items-center mb-20"
          >
            @if (numeroPregunta > 1) {
              <app-button-component
                text="Anterior"
                moreStyles="mt-6 w-52 justify-center text-black"
                color="orange"
                (click)="
                  router.navigate(['/examen'], {
                    queryParams: { pregunta: +numeroPregunta - 1 },
                  })
                "
              />
            }
            <app-button-component
              moreStyles="mt-6 w-52 justify-center text-black"
              color="orange"
              [text]="numeroPregunta < 5 ? 'Siguiente' : 'Finalizar'"
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
    <app-footer-component />
    @if (finish) {
      <div class="absolute inset-0 z-50 flex items-center justify-center">
        <div class="relative flex flex-col items-end">
          <svg
            class="absolute -top-7 -right-7 z-50 size-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 273 273"
            (click)="finish = false"
          >
            <path
              class="filltertiary"
              d="m171 137 95-95a24 24 0 1 0-34-34l-95 95L42 8A24 24 0 0 0 8 42l95 95-95 95a24 24 0 0 0 34 34l95-95 95 95a24 24 0 1 0 34-34l-95-95Z"
            />
          </svg>
          <div
            class="bg-orangelight flex flex-col items-center gap-4 rounded-lg px-8 py-4"
          >
            <span class="text-center text-sm font-light"
              >Muy bien, has terminado un desafío más para tu aprendizaje.</span
            >
            <strong class="text-center text-sm"
              >¿Estás seguro de enviar tus respuestas?</strong
            >
            <div class="flex justify-center gap-4">
              <app-button-component
                text="Cancelar"
                moreStyles="gap-2 group"
                color="gray"
                (click)="finish = false"
              />
              <app-button-component
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
export class ExamenPage {
  public finish = false;
  public numeroPregunta!: number;
  public answersSelected = ['', '', '', '', ''];
  public router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);
  private minutosElement!: HTMLElement;
  private segundosElement!: HTMLElement;
  private fechaFinal!: number;

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({ pregunta }) => {
      this.numeroPregunta = pregunta;
    });
    this.fechaFinal = new Date(Date.now() + 600000).getTime();
    this.minutosElement = document.getElementById('minutos')!;
    this.segundosElement = document.getElementById('segundos')!;
    this.tiempoRestante();
  }

  private tiempoRestante() {
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
