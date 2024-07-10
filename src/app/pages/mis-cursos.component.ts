import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { CourseInfoComponent } from '../components/course-info.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [HeaderComponent, CourseInfoComponent, FooterComponent, RouterOutlet],
  template: `
        <router-outlet />
        <app-header />
        <main>
            <div class="relative mt-10">
                <img class="w-80 h-auto" src="title-layout.png" alt="Cursos" />
                <h1 class="absolute top-2 left-16 text-white font-semibold">Cursos</h1>
            </div>
            <p class="pl-16 my-4 text-sm">Información sobre los cursos que estás tomando o que tomaste.</p>
            <section class="pl-16">
                <h2 class="text-[#ec7434] font-extrabold">EN PROCESO</h2>
                <div class="mt-4 flex gap-8">
                    <app-course-info id="redes-de-computadoras" title="Redes de Computadoras" teacher="Ivonne Maldonado" duration="120" rating="5" src="courses/sql.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                </div>
            </section>
            <section class="pl-16 mt-4">
                <h2 class="text-[#ec7434] font-extrabold">COMPLETADOS</h2>
                <div class="mt-4 flex gap-8">
                    <app-course-info title="Redes de Computadoras" teacher="Ivonne Maldonado" duration="120" rating="5" src="courses/java.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/google-analytics.png"/>
                </div>
            </section>
            <section class="pl-16 my-4">
                <h2 class="text-[#ec7434] font-extrabold">CURSOS RECOMENDADOS PARA TI</h2>
                <div class="mt-4 flex gap-8">
                    <app-course-info title="Redes de Computadoras" teacher="Ivonne Maldonado" duration="120" rating="5" src="courses/sql.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                    <app-course-info title="Analisis de Datos" teacher="Ivonne Maldonado" duration="200" rating="4" src="courses/analisis.png"/>
                </div>
            </section>
        </main>
        <app-footer />
    `,
})
export class MisCursosComponent {
}