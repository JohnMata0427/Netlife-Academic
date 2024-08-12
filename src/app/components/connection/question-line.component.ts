import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-question-line',
  standalone: true,
  template: `
    <div class="space-x-40 mt-4 ml-4">
      <div>
        <ul #questionList class="flex flex-col gap-y-2 select-none">
          @for (question of questions; track $index) {
            <li
              (click)="selectQuestion($index)"
              class="hover:bg-greenlight/50 rounded-lg p-1"
            >
              <strong>{{ $index + 1 }}.</strong>
              <span class="ml-4 mr-2">{{ question }}</span>
            </li>
          }
        </ul>
      </div>
      <div>
        <ul #answerList class="flex flex-col gap-y-2 select-none">
          @for (answer of answers; track $index) {
            <li
              (click)="selectAnswer($index)"
              class="hover:bg-greenlight/50 rounded-lg p-1"
            >
              <span class="ml-2">{{ answer }}</span>
            </li>
          }
        </ul>
      </div>

      <svg
        class="absolute top-0 left-0 w-full h-full pointer-events-none stroke-[4px]"
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
