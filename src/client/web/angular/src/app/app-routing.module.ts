import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityGuard } from './identity/guards/identity.guard';
import { UnauthorizedComponent } from './identity/views/unauthorized/unauthorized.component';
import { LoginComponent } from './identity/views/login/login.component';
import { RegisterComponent } from './identity/views/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: 'post',
    canActivate: [IdentityGuard],
    loadChildren: () => import('./post/post.module')
      .then(m => m.PostModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
