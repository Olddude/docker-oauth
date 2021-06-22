import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" stroke="#4CAF50" fill="white"/>
      <circle cx="15" cy="15" r="10" stroke="#4CAF50" fill="white"/>
    </svg>
  `,
  styles: [`
    svg {
      height: 200px;
    }
  `]
})
export class LogoComponent {
}
