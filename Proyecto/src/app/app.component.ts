import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
  
    constructor(private router: Router) {}
  
    esPaginaRaiz(): boolean {
      return this.router.url === '/';
    }
  
}
