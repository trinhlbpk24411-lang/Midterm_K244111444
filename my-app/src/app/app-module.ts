import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { RegistrationComponent } from './registration-component/registration-component';
import { LoginComponent } from './login-component/login-component';

@NgModule({
  declarations: [App, Home, PageNotFoundComponent, RegistrationComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
