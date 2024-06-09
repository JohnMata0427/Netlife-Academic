import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CourseComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Netlife';
}
