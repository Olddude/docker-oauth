import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { selectData } from '../identity/store/identity.selectors';

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<any>,
  ) { }

  fetch() {
    const url = `${environment.postServer}/post`;
    return this.store.select(selectData).pipe(
      switchMap(identity => this.http.get(url, {
        headers: {
          Authorization: `Bearer ${identity.access_token}`
        }
      }))
    );
  }

}
