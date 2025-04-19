import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule],
  template: `
    <div>
      <section class="timeSection">
        <h2>Time: {{timeLeft}}</h2>
      </section>
      <section class="QuestionSection">
        <div>
          <h1>10</h1> 
        </div>
        <div>
          <h1>+</h1> 
        </div>
        <div>
          <h1>11</h1> 
        </div>
        <div>
          <h1>=</h1> 
        </div>
      </section>
      <section class="AnswerSection">
        <div>
          <h1>21</h1> 
        </div>
        <div>
          <h1>22</h1> 
        </div>
        <div>
          <h1>23</h1> 
        </div>
        <div>
          <h1>24</h1> 
        </div>
      </section>

    </div>
  `,
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  timeLeft: number = 10; // 60 seconds 
  // for test it's 10 seconds
  private timer: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if(this.timer) {
      clearInterval(this.timer);
    }
  }

  private startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
        this.navigateToScorePage();
      }
    }, 1000); // Update every second
  }

  navigateToScorePage() {
    this.router.navigate(['/scorepage']);
  }

}
