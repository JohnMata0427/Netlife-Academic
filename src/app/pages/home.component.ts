import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CourseInfoComponent, FooterComponent, RouterOutlet],
  template: `
        <router-outlet />
        <app-header />
`
})
export class HomeComponent {
}