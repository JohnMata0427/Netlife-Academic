import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-question-line',
  standalone: true,
  template: `
    <div>
      <h3 class="text-lg font-semibold">Preguntas</h3>
      <ul #questionList>

        @for (question of questions; track $index) {
        <li class="mb-2">
          <div
            class="p-2 bg-gray-100 rounded cursor-pointer"
            (click)="selectQuestion(question)"
            [class.bg-blue-200]="selectedQuestion?.id === question.id"
          >
            {{ question.text }}
          </div>
        }

      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold">Respuestas</h3>
      <ul #answerList>

        @for (answer of answers; track $index) {
        <li class="mb-2">
          <div
            class="p-2 bg-gray-100 rounded cursor-pointer"
            (click)="selectAnswer(answer)"
            [class.bg-blue-200]="selectedAnswer?.id === answer.id"
          >
            {{ answer.text }}
          </div>
        }

      </ul>
    </div>

    <svg class="absolute top-0 left-0 w-full h-full pointer-events-none ">
      @for (line of lines; track $index) {
      <line
        [attr.x1]="line.x1"
        [attr.y1]="line.y1"
        [attr.x2]="line.x2"
        [attr.y2]="line.y2"
        stroke="black"
        stroke-with="2"
      />
      }
    </svg>
  `,
})
export class QuestionsLineComponent {
  constructor() {}
  selectedQuestion: any = null;
  selectedAnswer: any = null;
  lines: any[] = [];
  items = [1, 2, 3, 4, 5];
  questions = [
    { id: 1, text: 'HTTP' },
    { id: 2, text: 'DHCP' },
    { id: 3, text: 'DNS' },
    { id: 4, text: 'SMPT' },
    { id: 5, text: 'FTP' },
  ];

  answers = [
    { id: 1, text: 'Envío de correo electrónico' },
    { id: 2, text: 'Resolución de nombres de dominio.' },
    { id: 3, text: 'Transferencia de archivos.' },
    { id: 4, text: 'Transferencia de páginas web.' },
    { id: 5, text: 'Asignación automática de direcciones IP' },
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
