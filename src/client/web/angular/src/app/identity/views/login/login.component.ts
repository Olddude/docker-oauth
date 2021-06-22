import { Component } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { IdentityService } from '../../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control(''),
    password: this.formBuilder.control('')
  });

  constructor(
    private readonly service: IdentityService,
    private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(form: AbstractControl) {
    const model = form.value;
    const username = model.username;
    const password = model.password;
    await this.service.login(username, password).toPromise();
  }

}
