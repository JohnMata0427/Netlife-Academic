import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header.component';
import { FooterComponent } from '@components/footer.component';

@Component({
  selector: 'app-user-layout',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header-component />
    <main class="min-h-screen">
      <ng-content></ng-content>
    </main>
    <app-footer-component />
  `,
})
export class UserLayout {}
