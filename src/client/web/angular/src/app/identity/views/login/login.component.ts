import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentityService } from '../../services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.formBuilder.group({
    username: this.formBuilder.control(
      '',
      {
        validators: [
          Validators.minLength(4)
        ],
        updateOn: 'change'
      }
    ),
    password: this.formBuilder.control(
      '',
      {
        validators: [
          Validators.minLength(4)
        ],
        updateOn: 'change'
      }
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
