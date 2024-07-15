import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-black flex flex-col items-center mt-28">
      <p class="text-[#9CA3AF] text-sm py-3">Copyrigth &copy; 2024 Netlife</p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
