import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  standalone: false,
  styleUrl: './page-not-found-component.css',
  templateUrl: './page-not-found-component.html',
})
export class PageNotFoundComponent {
  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  }
}
