import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="mt-20 flex flex-col items-center bg-black">
      <p class="py-3 text-xs font-bold text-gray-400">
        Copyrigth &copy; 2024 Netlife Academic
      </p>
    </footer>
  `,
})
export class FooterComponent {}
