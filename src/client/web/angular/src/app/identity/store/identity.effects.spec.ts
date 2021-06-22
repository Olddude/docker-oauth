import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IdentityEffects } from './identity.effects';

describe('IdentityEffects', () => {
  let actions$: Observable<any>;
  let effects: IdentityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IdentityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(IdentityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
