import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-black flex flex-col items-center">
      <p class="text-[#9CA3AF] text-xs py-3">Copyrigth &copy; 2024 Netlife Academic</p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
