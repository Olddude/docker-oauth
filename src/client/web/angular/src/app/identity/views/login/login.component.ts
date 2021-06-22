import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { IdentityService } from '../../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control(
      '',
      {
        validators: [
          Validators.minLength(8),
          Validators.maxLength(50)
        ],
        updateOn: 'change'
      }
    ),
    password: this.formBuilder.control(
      '',
      {
        validators: [
          Validators.minLength(8),
          Validators.maxLength(50)
        ],
        updateOn: 'change'
      }
    )
  });

  constructor(
    private readonly service: IdentityService,
    private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(form: AbstractControl) {
    const username = form.value.username;
    const password = form.value.password;
    await this.service.login(username, password).toPromise();
  }

}
