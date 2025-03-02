import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule, LandingPageComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miva';
  constructor(private router: Router){}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Réinitialiser le scroll en haut de la page à chaque changement de route
        window.scrollTo(0, 0);
      }
    });
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const shadow = document.getElementById('cursor-shadow');
    if (shadow) {
      shadow.style.left = `${event.clientX}px`;
      shadow.style.top = `${event.clientY}px`;
    }
  }
}
