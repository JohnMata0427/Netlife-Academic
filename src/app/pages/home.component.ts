import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CourseComponent } from '../components/course/course.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CourseComponent, FooterComponent, RouterOutlet],
  template: `
        <router-outlet />
        <app-header />
            <img class="w-full" src="banner.png" alt="Netlife Banner" />
            <section class="pt-8 pb-14 bg-[#D4D4D4]">
            <h1 class="pl-16 text-3xl pb-2 font-['Rubik_One']">MIS CURSOS</h1>
            <p class="pl-16 pb-7">
                ¡Recuerda seguir adelante con tus cursos pendientes! ¡Cada lección que
                completas es un paso más hacia alcanzar tus metas!
            </p>
            <div class="pl-5 flex gap-x-6 items-center">
                <svg
                width="20"
                viewBox="0 0 28 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    id="Vector"
                    d="M22.7453 0.910264L1.11121 22.6662C0.762686 23.0169 0.482921 23.4519 0.291115 23.9414C0.0993089 24.4309 0 24.9633 0 25.5021C0 26.0408 0.0993089 26.5732 0.291115 27.0627C0.482921 27.5522 0.762686 27.9872 1.11121 28.3379L22.7453 50.0938C24.8103 52.1701 28 50.4487 28 47.258V3.73988C28 0.549169 24.8103 -1.17226 22.7453 0.910264Z"
                    fill="black"
                />
                </svg>
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="5"
                src="courses/logica.png"
                />
                <app-course
                title="Análisis de Datos"
                teacher="Vanessita"
                duration="8"
                rating="3.1"
                src="courses/analisis.png"
                />
                <app-course
                title="Bases de Datos SQL"
                teacher="Vanessita"
                duration="3"
                rating="4.2"
                src="courses/sql.png"
                />
                <app-course
                title="Google Analytics"
                teacher="Vanessita"
                duration="12"
                rating="3.6"
                src="courses/google-analytics.png"
                />
                <app-course
                title="Google Analytics"
                teacher="Vanessita"
                duration="12"
                rating="3.6"
                src="courses/google-analytics.png"
                />
                <svg width="20" viewBox="0 0 28 51" fill="none">
                <path
                    d="M5.25468 50.0897L26.8888 28.3338C27.2373 27.9831 27.5171 27.5481 27.7089 27.0586C27.9007 26.5691 28 26.0367 28 25.4979C28 24.9592 27.9007 24.4268 27.7089 23.9373C27.5171 23.4478 27.2373 23.0128 26.8888 22.6621L5.25468 0.906161C3.18968 -1.17013 0 0.551292 0 3.742V47.2601C0 50.4508 3.18968 52.1723 5.25468 50.0897Z"
                    fill="black"
                />
                </svg>
            </div>
            </section>
            <section class="py-8">
            <h1 class="pl-16 text-3xl pb-2 font-['Rubik_One']">CURSOS NUEVOS</h1>
            <p class="pl-16 pb-7">¡Abre las puertas a nuevas oportunidades!</p>
            <div class="pl-5 flex gap-x-6 items-center">
                <svg
                width="20"
                viewBox="0 0 28 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    id="Vector"
                    d="M22.7453 0.910264L1.11121 22.6662C0.762686 23.0169 0.482921 23.4519 0.291115 23.9414C0.0993089 24.4309 0 24.9633 0 25.5021C0 26.0408 0.0993089 26.5732 0.291115 27.0627C0.482921 27.5522 0.762686 27.9872 1.11121 28.3379L22.7453 50.0938C24.8103 52.1701 28 50.4487 28 47.258V3.73988C28 0.549169 24.8103 -1.17226 22.7453 0.910264Z"
                    fill="black"
                />
                </svg>
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <svg width="20" viewBox="0 0 28 51" fill="none">
                <path
                    d="M5.25468 50.0897L26.8888 28.3338C27.2373 27.9831 27.5171 27.5481 27.7089 27.0586C27.9007 26.5691 28 26.0367 28 25.4979C28 24.9592 27.9007 24.4268 27.7089 23.9373C27.5171 23.4478 27.2373 23.0128 26.8888 22.6621L5.25468 0.906161C3.18968 -1.17013 0 0.551292 0 3.742V47.2601C0 50.4508 3.18968 52.1723 5.25468 50.0897Z"
                    fill="black"
                />
                </svg>
            </div>
            </section>
            <section class="pt-4 pb-16">
            <h1 class="pl-16 text-3xl pb-2 font-['Rubik_One']">CURSOS POPULARES</h1>
            <p class="pl-16 pb-7">¡Abre las puertas a nuevas oportunidades!</p>
            <div class="pl-5 flex gap-x-6 items-center">
                <svg
                width="20"
                viewBox="0 0 28 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    id="Vector"
                    d="M22.7453 0.910264L1.11121 22.6662C0.762686 23.0169 0.482921 23.4519 0.291115 23.9414C0.0993089 24.4309 0 24.9633 0 25.5021C0 26.0408 0.0993089 26.5732 0.291115 27.0627C0.482921 27.5522 0.762686 27.9872 1.11121 28.3379L22.7453 50.0938C24.8103 52.1701 28 50.4487 28 47.258V3.73988C28 0.549169 24.8103 -1.17226 22.7453 0.910264Z"
                    fill="black"
                />
                </svg>
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <app-course
                title="Lógica de Programación"
                teacher="Vanessita"
                duration="10"
                rating="4.5"
                src="courses/logica.png"
                />
                <svg width="20" viewBox="0 0 28 51" fill="none">
                <path
                    d="M5.25468 50.0897L26.8888 28.3338C27.2373 27.9831 27.5171 27.5481 27.7089 27.0586C27.9007 26.5691 28 26.0367 28 25.4979C28 24.9592 27.9007 24.4268 27.7089 23.9373C27.5171 23.4478 27.2373 23.0128 26.8888 22.6621L5.25468 0.906161C3.18968 -1.17013 0 0.551292 0 3.742V47.2601C0 50.4508 3.18968 52.1723 5.25468 50.0897Z"
                    fill="black"
                />
                </svg>
            </div>
            </section>
            <app-footer />
`
})
export class HomeComponent {
}