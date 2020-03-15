import {Component, OnInit} from '@angular/core';
import {Status} from '../../models/status';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';
import {first} from 'rxjs/operators';
import {ConnectivityService} from '../../services/connectivity.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public time: Date = new Date();
  public connected = false;

  public fahrzeugRows = [
    {
      title: 'Erstversorgungstrupps',
      fahrzeuge: ['81/16-1', '81/16-2', '81/16-3', '81/16-4', '81/16-5', '81/16-6']
    },
    {
      title: 'Rettungsmittel',
      fahrzeuge: ['81/83-1', '81/89-1', '81/82-1']
    },
    {
      title: 'Einsatzleitung',
      fahrzeuge: ['81/10-4']
    }
  ];

  constructor(private rxStompService: RxStompService, private connectivityService: ConnectivityService) {
  }

  ngOnInit(): void {
    this.connectivityService.isConnected().subscribe((connected) => {
      this.connected = connected;
    });

    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
