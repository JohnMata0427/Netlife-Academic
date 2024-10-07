import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header.component';
import { CourseInfoComponent } from '@components/course-info.component';
import { FooterComponent } from '@components/footer.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [HeaderComponent, CourseInfoComponent, FooterComponent],
  template: `
    <app-header-component />
    <main class="min-h-screen">
      <ng-content></ng-content>
    </main>
    <app-footer-component />
  `,
})
export class UserLayout {}
