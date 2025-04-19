import { Component } from '@angular/core';

@Component({
  selector: 'app-score-page',
  imports: [],
  template: `
    <section>
      <h2>Score Page</h2>
      <div class="scoreSection">
        <h1>Questions Answered</h1>
        <h1>Correct Answers </h1>
        <h1>Wrong Answers </h1>
        <h1>Average Response Time </h1>
      </div>
      <div class="buttonSection">
        <!-- <button (click)="navigateToMainPage()">Play Again</button> -->
        <!-- <button (click)="navigateToLandingPage()">Exit</button> -->
      </div>
  </section>
  `,
  styleUrl: './score-page.component.css'
})
export class ScorePageComponent {

}
