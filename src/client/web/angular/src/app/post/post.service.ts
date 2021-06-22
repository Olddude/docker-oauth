import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetch() {
    const url = `${environment.postServer}/post`;
    return this.http.get(url);
  }

}
