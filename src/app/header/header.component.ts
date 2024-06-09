import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <header class="bg-black py-4">
    <nav class="flex items-center">
      <div class="flex items-center w-full">
      <a class="px-7" href="/">
        <img class="h-9" src="logo.jpg" alt="Netlife Logo">
      </a>
      <div class="flex">
        <a class="text-white hover:text-[#ec7434] transition-all mr-10" href="/">Inicio</a>
        <a class="text-white hover:text-[#ec7434] transition-all mr-10" href="/mi-perfil">Perfil</a>
        <a class="text-white hover:text-[#ec7434] transition-all mr-10" href="/mis-cursos">Cursos</a>
        <a class="text-white hover:text-[#ec7434] transition-all" href="/mis-certificados">Certificados</a>
      </div>
      </div>
      <div class="flex justify-end items-center w-full">
      <div class="flex justify-end items-center mr-4">
        <input class="w-96 py-1 px-3 rounded-lg" type="text" placeholder="Buscar Clases">
        <button class="absolute mr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
        </svg>
        </button>
      </div>
      <button>
        <svg class="size-7" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      @if (isLoggedIn) {
        <img class="size-8 rounded-full mr-4 ml-2" src="https://github.com/{{ username }}.png" alt="User {{ username }}" (click)="greet()">
      } @else {
        <button class="bg-[#ec7434] text-white px-2 mr-4 ml-2" (click)="isLoggedIn = true">Sign Up</button>
      }
      </div>
    </nav>
  </header>
  `,
})
export class HeaderComponent {
  username = 'JohnMata0427';
  isLoggedIn = false;

  greet = () => {
    alert('Hello, ' + this.username);
  }
}