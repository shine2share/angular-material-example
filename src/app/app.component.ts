import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="" style="font-weight: bold; font-size:20px;margin-top: 100px; margin-left: 100px;">Root</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
