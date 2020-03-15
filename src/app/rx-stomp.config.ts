import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import {environment} from '../environments/environment';

export const rxStompConfig: InjectableRxStompConfig = {
  brokerURL: environment.api,
  heartbeatOutgoing: 20000,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
