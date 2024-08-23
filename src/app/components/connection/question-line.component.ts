import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-question-line',
  standalone: true,
  template: `
    <div class="ml-4 mt-4 flex gap-40">
      <ul #questionList class="flex select-none flex-col gap-2">
        @for (question of questions; track $index) {
          <li
            (click)="selectQuestion($index)"
            class="rounded-lg p-1 hover:bg-greenlight/50"
          >
            <strong>{{ $index + 1 }}.</strong>
            <span class="ml-4 mr-2">{{ question }}</span>
          </li>
        }
      </ul>
      <ul #answerList class="flex select-none flex-col gap-2">
        @for (answer of answers; track $index) {
          <li
            (click)="selectAnswer($index)"
            class="rounded-lg p-1 hover:bg-greenlight/50"
          >
            <span class="ml-2">{{ answer }}</span>
          </li>
        }
      </ul>

      <svg
        class="pointer-events-none absolute left-0 top-0 h-full w-full stroke-[4px]"
      >
        @for (line of lines; track $index) {
          <line
            [attr.x1]="line.x1"
            [attr.y1]="line.y1"
            [attr.x2]="line.x2"
            [attr.y2]="line.y2"
            stroke="#72C234"
          />
        }
      </svg>
    </div>
  `,
})
export class QuestionsLineComponent {
  constructor() {}
  selectedQuestion: any = null;
  selectedAnswer: any = null;
  lines: any[] = [];
  answersSelected: any[] = [];

  @Input() questions!: string[];
  @Input() answers!: string[];

  @ViewChild('questionList', { static: true }) questionList!: ElementRef;
  @ViewChild('answerList', { static: true }) answerList!: ElementRef;

  selectQuestion(question: any) {
    this.questionList.nativeElement.children[question].classList.add(
      'bg-greenlight',
    );
    this.selectedQuestion = question + 1;
    this.checkSelection();
  }

  selectAnswer(answer: any) {
    this.answerList.nativeElement.children[answer].classList.add(
      'bg-greenlight',
    );
    this.selectedAnswer = answer + 1;
    this.checkSelection();
  }

  checkSelection() {
    if (this.selectedQuestion && this.selectedAnswer) {
      const questionElement =
        this.questionList.nativeElement.children[this.selectedQuestion - 1];
      const answerElement =
        this.answerList.nativeElement.children[this.selectedAnswer - 1];

      const questionRect = questionElement.getBoundingClientRect();
      const answerRect = answerElement.getBoundingClientRect();

      const x1 = questionRect.right;
      const y1 = questionRect.top + questionRect.height / 2;
      const x2 = answerRect.left;
      const y2 = answerRect.top + answerRect.height / 2;

      this.lines.push({ x1, y1, x2, y2 });

      console.log(this.lines);

      this.selectedQuestion = null;
      this.selectedAnswer = null;
      questionElement.classList.remove('bg-greenlight');
      answerElement.classList.remove('bg-greenlight');
    }
  }
}
