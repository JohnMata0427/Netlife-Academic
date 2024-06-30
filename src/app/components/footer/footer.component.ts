import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-black flex flex-col items-center px-10 pb-10 pt-20">
      <div class="flex flex-col items-center gap-12 md:flex-row md:gap-24 md:items-start">
        <div>
          <img class="h-16" src="logo.jpg" alt="Netlife Logo" />
        </div>
        <div class="flex flex-col">
          <div>
          <ul class="flex gap-3 pb-4">
            <li>
              <a href="https://www.instagram.com/netlife_ecuador">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/netlife.ecuador">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/netlife-ecuador/">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://x.com/netlifeecuador">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/x.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/NetlifeEcuador">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/youtube.svg" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@netlifeecuador">
                <img class="h-9 hover:bg-[#9ca3af] p-1 rounded transition-all" src="social-media/tiktok.svg" alt="TikTok" />
              </a>
            </li>
          </ul>
          </div>
          <div class="flex flex-col md:items-start items-center">
            <a class="text-white hover:text-[#ec7434] transition-all" href="/">Inicio</a>
            <a class="text-white hover:text-[#ec7434] transition-all" href="/mi-perfil">Perfil</a>
            <a class="text-white hover:text-[#ec7434] transition-all" href="/mis-cursos">Cursos</a>
            <a class="text-white hover:text-[#ec7434] transition-all" href="/mis-certificados">Certificados</a>
          </div>
        </div>
        <div>
          <div class="flex flex-col md:items-start items-center">
            <h3 class="text-white font-bold pb-4">Atencion al Cliente y Ventas</h3>
            <a class="text-white hover:text-[#ec7434] transition-all" href="tel:1800-638-543">Fijo nacional <br> 1800-638-543</a>
            <a  class="text-white hover:text-[#ec7434] transition-all pb-4" href="mailto:info@netlife.net.ec">infonetlife.net.ec</a>
          </div>
          <div class="flex flex-col md:items-start items-center">
            <h3 class="text-white font-bold pb-4">Otros Serivicios</h3>
            <a class="text-white hover:text-[#ec7434] transition-all" href="">Netlife Defense</a>
            <a class="text-white hover:text-[#ec7434] transition-all" href="">Netlife Assistence</a>
          </div>
        </div>
        <div class="flex flex-col md:items-start items-center">
          <h3 class="text-white font-bold pb-4" >Ayuda</h3>
          <a class="text-white hover:text-[#ec7434] transition-all" href="">Politicas de Privacidad</a>
          <a class="text-white hover:text-[#ec7434] transition-all" href="">Terminos y Condiciones</a>
          <a class="text-white hover:text-[#ec7434] transition-all" href="">Preguntas</a>
        </div>
      </div>
      <div>
        <p class="text-[#9CA3AF] font-bold pt-12">Copyrigth &copy; 2024 Netlife</p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
