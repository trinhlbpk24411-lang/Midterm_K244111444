import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  standalone: false,
  styleUrl: './registration-component.css',
  templateUrl: './registration-component.html',
})
export class RegistrationComponent {
  // Tạo Form Model bằng FormGroup và FormControl
  courseForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    course: new FormControl('', [Validators.required]),
    shift: new FormControl('sang'),
    agree: new FormControl(true, [Validators.requiredTrue]),
  });

  // Getters tiện lợi để binding và kiểm tra lỗi trong HTML an toàn
  get fullName() {
    return this.courseForm.get('fullName');
  }

  get email() {
    return this.courseForm.get('email');
  }

  get phone() {
    return this.courseForm.get('phone');
  }

  get course() {
    return this.courseForm.get('course');
  }

  get shift() {
    return this.courseForm.get('shift');
  }

  get agree() {
    return this.courseForm.get('agree');
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Dữ liệu khóa học:', this.courseForm.value);
      alert('Đăng ký thành công:\n' + JSON.stringify(this.courseForm.value, null, 2));
    } else {
      this.courseForm.markAllAsTouched();
    }
  }

  setDefaultValues(): void {
    this.courseForm.patchValue({
      fullName: 'Trần Duy Thanh',
      email: 'thanhtd@uel.edu.vn',
      phone: '0909123456',
      course: 'angular',
      shift: 'sang',
      agree: true,
    });
  }
}
