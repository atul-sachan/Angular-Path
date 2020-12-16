import { UserReducer } from './user-store/user.reducer';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { Store, StoreModule } from '@ngrx/store';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', UserReducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
