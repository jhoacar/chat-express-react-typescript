import io, { Socket } from 'socket.io-client';

const server: string = import.meta.env.VITE_WEBSOCKET_SERVER || '';
const socket = io(server);

const events:any = {};
const emitters:any = {};

export const createSocketEvent = () => new Proxy(events, {

  get: (target, prop:string) => {
    console.log(`Added a handler to ${prop}`);
    return (callback: (...args:any[])=>void) => {
      socket.on(prop, callback);
    };
  },
});

export const createSocketEmitter = () => new Proxy(emitters, {

  get: (target, prop:string) => {
    console.log(`Add a handler to ${prop}`);
    return (...data: any[]) => {
      socket.emit(prop, data);
    };
  },
});

export default class WebSocketService {
  events = ['connect', 'disconnect', 'new-user', 'bye-user'];

  socket: Socket;

  constructor() {
    this.socket = socket;
  }

  listener(handleEvent: (eventName:string, data:any)=>void) {
    this.events.forEach((eventName) => {
      this.socket.on(eventName, (data: any) => {
        handleEvent(eventName, data);
      });
    });
  }

  joinRoom(data: any) {
    this.socket.emit('join', data);
  }
}
