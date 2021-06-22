import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class IdentityService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetch() {
    return this.http.get(environment.identityServer);
  }

  login(username: string, password: string) {
    const url = `${environment.identityServer}/login`;
    return this.http.post(url, { username, password });
  }

}
