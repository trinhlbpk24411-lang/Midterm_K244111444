import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration-component/registration-component';
import { LoginComponent } from './login-component/login-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

const routes: Routes = [
  // 1. Trang chủ
  { path: '', children: [] },

  // 2. Các chức năng
  { path: 'Registration', component: RegistrationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'course-register', component: RegistrationComponent },
  { path: 'course-reactive-register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  // 3. Page not Found
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
