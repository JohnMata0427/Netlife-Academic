import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { CustomButtonComponent } from '../components/custom-button.component';
import { QuestionsComponent } from '../components/connection/question.component';
import { QuestionsSelectComponent } from '../components/connection/question-select.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

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
      <img src="/logo.jpg" alt="Logo de la empresa" class="h-8" />
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

            <!-- <div class="gap-4 flex flex-col">
              <div class="flex gap-4 items-center">
                <input class="size-4 accent-[#72C234]" id="respuesta-1" name="respuesta-1" type="checkbox">
                <label for="respuesta-1">Tiene 48 bits (6 bytes) de longitud.</label>
              </div>
            </div> -->

            <!-- <div class="flex flex-col">
              <div class="flex gap-4 ">
                <input
                  class="accent-[#72C234]"
                  type="radio"
                  id="verdadero"
                  name="respuesta"
                  value="v"
                />
                <label for="verdadero">Verdadero</label>
              </div>
              
              <div class="flex gap-4">
                <input
                  class="accent-[#72C234]"
                  type="radio"
                  id="falso"
                  name="respuesta"
                  value="f"
                /><label for="falso">Falso</label>
              </div>
            </div> -->

            <div class="flex justify-between">
              <!-- <div class="">
                <ol>
                  <li>HTTP</li>
                  <li>DHCP</li>
                  <li>DNS</li>
                  <li>SMTP</li>
                  <li>FTP</li>
                </ol>
              </div>

              <div>
                <ul>
                  <li>Envío de correo electrónico</li>
                  <li>Resolución de nombres de dominio.</li>
                  <li>Transferencia de archivos.</li>
                  <li>Transferencia de páginas web.</li>
                  <li>Asignación automática de direcciones IP</li>
                </ul>
              </div> -->

              <div #questionsList>
                <h3 class="text-lg font-semibold">Preguntas</h3>
                <ul>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectQuestion(questions[0])"
                      [class.bg-blue-200]="selectedQuestion?.id === questions[0].id"
                    >
                      {{ questions[0].text}}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectQuestion(questions[1])"
                      [class.bg-blue-200]="selectedQuestion?.id === questions[1].id"
                    >
                      {{ questions[1].text}}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectQuestion(questions[2])"
                      [class.bg-blue-200]="selectedQuestion?.id === questions[2].id"
                    >
                      {{ questions[2].text}}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectQuestion(questions[3])"
                      [class.bg-blue-200]="selectedQuestion?.id === questions[3].id"
                    >
                      {{ questions[3].text}}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectQuestion(questions[4])"
                      [class.bg-blue-200]="selectedQuestion?.id === questions[4].id"
                    >
                      {{ questions[4].text}}
                    </div>
                  </li>
                </ul>
              </div>
              <div #answerList>
                <h3 class="text-lg font-semibold">Respuestas</h3>
                <ul>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectAnswer(answers[0])"
                      [class.bg-blue-200]="selectedAnswer?.id === answers[0].id"
                    >
                      {{ answers[0].text }}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectAnswer(answers[1])"
                      [class.bg-blue-200]="selectedAnswer?.id === answers[1].id"
                    >
                      {{ answers[1].text }}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectAnswer(answers[2])"
                      [class.bg-blue-200]="selectedAnswer?.id === answers[2].id"
                    >
                      {{ answers[2].text }}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectAnswer(answers[3])"
                      [class.bg-blue-200]="selectedAnswer?.id === answers[3].id"
                    >
                      {{ answers[3].text }}
                    </div>
                  </li>
                  <li class="mb-2">
                    <div
                      class="p-2 bg-gray-100 rounded cursor-pointer"
                      (click)="selectAnswer(answers[4])"
                      [class.bg-blue-200]="selectedAnswer?.id === answers[4].id"
                    >
                      {{ answers[4].text }}
                    </div>
                  </li>
                </ul>
              </div>

              <svg
                class="absolute top-0 left-0 w-full h-full pointer-events-none "
              >
                @for (line of lines; track $index) {
                <line
                  [attr.x1]="line.x1"
                  [attr.y1]="line.y1"
                  [attr.x2]="line.x2"
                  [attr.y2]="line.y2"
                  stroke="black"
                  stroke-with="7"
                />
                }
              </svg>
            </div>
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
  opcionSeleccionada = 0;
  numeroPregunta = 1;
  respuestaSeleccionada = ' ';
  booleanoRespuesta = false;
  // minutosElement = document.getElementById('minutos') as HTMLElement;
  // segundosElement = document.getElementById('segundos') as HTMLElement;
  // segundos=1000;
  // minutos=60*this.segundos;
  // fechaFinal=0;
  // ngOnInit() {
  //   this.fechaFinal = new Date(Date.now() + 600000).getTime();
  //   this.minutosElement = document.getElementById('minutos') as HTMLElement;
  //   this.segundosElement = document.getElementById('segundos') as HTMLElement;
  //   this.tiempoRestante();
  // }
  // tiempoRestante(){
  //   let tiempoRestante = this.fechaFinal - Date.now();
  //   let minuto = Math.floor(tiempoRestante / this.minutos).toString().padStart(2, '0');
  //   let segundo = Math.floor((tiempoRestante % this.minutos) / this.segundos).toString().padStart(2, '0');
  //   this.minutosElement.innerHTML = minuto;
  //   this.segundosElement.innerHTML = segundo;
  //   setInterval(() => this.tiempoRestante(), 1000);
  // }
  selectedQuestion: any = null;
  selectedAnswer: any = null;
  lines: any[] = [];
  items = [1, 2, 3, 4, 5];
  questions = [
    { id: 1, text: 'Pregunta 1' },
    { id: 2, text: 'Pregunta 2' },
    { id: 3, text: 'Pregunta 3' },
    { id: 4, text: 'Pregunta 4' },
    { id: 5, text: 'Pregunta 5' }
  ];

  answers = [
    { id: 1, text: 'Respuesta 1' },
    { id: 2, text: 'Respuesta 2' },
    { id: 3, text: 'Respuesta 3' },
    { id: 4, text: 'Respuesta 4' },
    { id: 5, text: 'Respuesta 5' }
  ];

  @ViewChild('questionList', { static: true }) questionList!: ElementRef;
  @ViewChild('answerList', { static: true }) answerList!: ElementRef;

  selectQuestion(question: any) {
    this.selectedQuestion = question;
    this.checkSelection();
  }

  selectAnswer(answer: any) {
    this.selectedAnswer = answer;
    this.checkSelection();
  }

  checkSelection() {
    if (this.selectedQuestion && this.selectedAnswer) {
      const questionElement =
        this.questionList.nativeElement.children[this.selectedQuestion.id - 1];
      const answerElement =
        this.answerList.nativeElement.children[this.selectedAnswer.id - 1];

      const questionRect = questionElement.getBoundingClientRect();
      const answerRect = answerElement.getBoundingClientRect();

      const x1 = questionRect.right;
      const y1 = questionRect.top + questionRect.height / 2;
      const x2 = answerRect.left;
      const y2 = answerRect.top + answerRect.height / 2;

      this.lines.push({ x1, y1, x2, y2 });

      this.selectedQuestion = null;
      this.selectedAnswer = null;
    }
  }
}
