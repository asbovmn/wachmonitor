import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const rxStompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://localhost:8080/websocket',
  heartbeatOutgoing: 20000,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
