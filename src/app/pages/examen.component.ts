import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { CustomButtonComponent } from "../components/custom-button.component";
import { QuestionsComponent } from "../components/connection/questions.component";
import { QuestionsSelectComponent } from "../components/connection/questionsSelect.component";

@Component({
  standalone: true,
  selector: 'app-examen',
  imports: [NgClass, CustomButtonComponent, QuestionsComponent, QuestionsSelectComponent],
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
      <hr class="mb-7 mt-12 mx-16 border-8 border-[#D9D9D9] rounded-lg" />
      <section class="flex md:flex-row flex-col justify-between mx-16 gap-7 ">
        <div class="flex flex-col gap-y-4 md:w-1/4 ">
          <div class="flex justify-center gap-x-4">
            <div class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg w-1/2">
              <h2 class="font-bold">Pregunta</h2>
              <span>1/5</span>
            </div>
            <div class="bg-[#faab00] flex flex-col items-center p-4 rounded-lg  w-1/2">
              <h3 class="font-bold">Puntuación</h3>
              <span>0/5</span>
            </div>
          </div>
          <div
            class="bg-[#f0000b] text-white flex justify-center items-center rounded-lg p-2 gap-x-2"
          >
            <span >Tiempo restante:</span>
            <strong> <span id="minutos">10</span>:<span id="segundos">00</span> </strong>
          </div>
        </div>
        <div  class="flex flex-col  md:w-4/5 items-end">
          <div class="border border-[#a5a5a5] p-4 rounded-lg flex flex-col gap-y-4 w-full">
            <h2>1. Elige las siguientes métricas de cada protocolo de enrutamiento dinámico</h2>


            <div class="gap-4 flex flex-col">
              <div class="flex gap-4 items-center cursor-pointer">
                <strong>OSPF</strong>
                <app-questions-select class="w-full"></app-questions-select>
              </div>
  
              <div (click)="opcionSeleccionada=2" [ngClass]="{'bg-[#72C234]':opcionSeleccionada==2 , ' hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 2}" class="items-center flex   py-1 pr-1  rounded-[10px] ">
              <strong class="px-2">B</strong>
                <div class="rounded-[10px] bg-white p-2 w-full">
                  <input hidden type="radio" name="question1" value="2" id="question1-2" />
                  <label for="question1-2">Ancho de banda</label>
  
                </div>
              </div>
              <div (click)="opcionSeleccionada=3" [ngClass]="{'bg-[#72C234]':opcionSeleccionada==3 , 'hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 3}" class="items-center flex py-1 pr-1  rounded-[10px] ">
              <strong class="px-2">C</strong>
                <div class="rounded-[10px] bg-white p-2 w-full">
                  <input hidden type="radio" name="question1" value="3" id="question1-3" />
                  <label for="question1-3">Retardo</label>
                </div>
              </div>
              <div (click)="opcionSeleccionada=4" [ngClass]="{'bg-[#72C234]':opcionSeleccionada==4 , 'hover:bg-[#C5EAA9] bg-[#D9D9D9]': opcionSeleccionada != 4}"  class="items-center flex   py-1 pr-1  rounded-[10px] ">
              <strong class="px-2">D</strong>
                <div class="rounded-[10px] bg-white p-2 w-full">
                  <input hidden type="radio" name="question1" value="3" id="question1-3" />
                  <label for="question1-3">Ninguna de las anteriores</label>
                </div>
              </div>
            </div>
            
          </div>
          <app-custom-button [text]="'Siguiente'" [color]="'orangelight'" [hoverColor]="'white'" [moreStyles]="'mt-6 w-[210px] justify-center text-black' " (click)="router.navigate(['/examen'],{queryParams:{pregunta:numeroPregunta+1}})"></app-custom-button>
        </div>
      </section>
    </main>
  `,
})
export class ExamenComponent {
  constructor(public router: Router) {

  }
  opcionSeleccionada=0;
  numeroPregunta=1;
  respuestaSeleccionada=" ";
  booleanoRespuesta=false;
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
}
