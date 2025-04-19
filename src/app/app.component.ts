import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SkillSum-MathGame';
}
