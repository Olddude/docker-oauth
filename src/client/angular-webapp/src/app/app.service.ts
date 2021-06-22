import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetch() {
    return this.http.get(environment.appServer);
  }

}
