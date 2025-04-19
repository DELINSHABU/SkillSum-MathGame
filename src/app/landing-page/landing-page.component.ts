import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  template: `
  <div>
    <h2>This website help you to improve your math side</h2>
    <button (click)="navigateToMainPage()">Let's Start</button>
  </div>
  `,
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) { }
  
    navigateToMainPage() {
      this.router.navigate(['/mainpage']);
    }

}
