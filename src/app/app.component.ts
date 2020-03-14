import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBackside = false;
  title = 'wachmonitor';

  toggle() {
    this.showBackside = !this.showBackside;
  }
}
