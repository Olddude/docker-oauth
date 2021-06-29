import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div class="error-code">401</div>
    <div class="error-message">Authorization Required</div>
    <a [routerLink]="['/login']">you can login here</a>
  `,
  styles: [`
    :host {
      text-align: center;
      .error-code {
        color: #4CAF50;
        font-size: 4rem;
      }
      .error-message {
        font-size: 2rem;
      }
    }
  `]
})
export class UnauthorizedComponent {
}
