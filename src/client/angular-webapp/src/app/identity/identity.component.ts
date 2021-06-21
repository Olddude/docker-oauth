import { Component } from '@angular/core';
import { IdentityService } from './identity.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent {

  data$ = this.service.fetch();

  constructor(
    private readonly service: IdentityService
  ) { }

}
