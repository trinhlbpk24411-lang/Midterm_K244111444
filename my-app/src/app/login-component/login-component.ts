import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  // Tạo Form Model cho Login
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Thông tin đăng nhập:', this.loginForm.value);
      alert('Xử lý đăng nhập:\n' + JSON.stringify(this.loginForm.value, null, 2));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
