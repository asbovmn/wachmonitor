import { Injectable } from '@angular/core';
import {RxStompService} from '@stomp/ng2-stompjs';
import {merge, Observable} from 'rxjs';
import {Status} from '../models/status';
import {first, map, mergeAll} from 'rxjs/operators';
import {Message} from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private rxStompService: RxStompService) { }

  getAndWatchStatus(callname: string): Observable<Status> {
    const callnameBase64 = btoa(callname);

    const getObservable = this.rxStompService.watch('/topic/status/' + callnameBase64 + '/get').pipe(first());
    const watchObservable = this.rxStompService.watch('/topic/status/' + callnameBase64);

    const observable = merge(getObservable, watchObservable).pipe(map((message: Message) => {
      return JSON.parse(message.body) as Status;
    }));

    return observable;
  }
}
