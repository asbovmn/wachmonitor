import { Injectable } from '@angular/core';
import { RxStompService, StompState } from '@stomp/ng2-stompjs';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor(private rxStompService: RxStompService) { }

  isConnected(): Observable<boolean> {
    return this.rxStompService.connectionState$.pipe(map(state => {
      return StompState[state] === 'TRYING';
    }));
  }
}
