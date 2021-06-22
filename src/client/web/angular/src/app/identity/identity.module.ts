import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { LogoComponent } from './components/logo/logo.component';
import { StoreModule } from '@ngrx/store';
import { identityFeatureKey, reducer } from './store/identity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IdentityEffects } from './store/identity.effects';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    StoreModule.forFeature(identityFeatureKey, reducer),
    EffectsModule.forFeature([IdentityEffects])
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class IdentityModule { }
