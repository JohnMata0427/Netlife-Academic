import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black flex flex-col items-center">
      <p class="text-gray-400 font-bold text-xs py-3">
        Copyrigth &copy; 2024 Netlife Academic
      </p>
    </footer>
  `,
})
export class FooterComponent {}
