import {Component, OnInit} from '@angular/core';
import {ConnectivityService} from './services/connectivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBackside = true;
  connected = false;
  title = 'wachmonitor';

  constructor(private connectivityService: ConnectivityService) {
  }


  toggle() {
    this.showBackside = !this.showBackside;
  }

  ngOnInit(): void {
    this.connectivityService.isConnected().subscribe((connected) => {
      this.connected = connected;
    });
  }
}
