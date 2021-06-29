import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentityService } from '../../services/identity.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <section class="column">
        <section class="row center">
          <app-logo></app-logo>
        </section>
        <section class="row center">
          <input pInputText formControlName="username" placeholder="username" type="text">
        </section>
        <section class="row center">
          <input pInputText formControlName="password" placeholder="password" type="password">
        </section>
        <section class="row center">
          <a id="register-link" [routerLink]="['/register']">register</a>
        </section>
        <section class="row center">
          <button pButton [disabled]="form.invalid" label="login" type="submit"></button>
        </section>
      </section>
    </form>
  `,
  styles: [`
    :host {
      form {
        height: 400px;
        #register-link {
          font-size: smaller;
        }
      }
      @media (max-width: 500px) {
        width: 90vw;
      }
      @media (min-width: 501px) {
        width: 50vw;
      }
    }
  `]
})
export class LoginComponent {

  form = this.formBuilder.group({
    username: this.formBuilder.control(
      '',
      { validators: [ Validators.minLength(4) ], updateOn: 'change' }
    ),
    password: this.formBuilder.control(
      '',
      { validators: [ Validators.minLength(4) ], updateOn: 'change' }
    )
  });

  constructor(
    private readonly service: IdentityService,
    private readonly formBuilder: FormBuilder
  ) { }

  onSubmit() {
    const { username, password } = this.form.value;
    this.service.login(username, password);
  }

}
