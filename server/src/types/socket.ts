import { Request } from 'express';
import { IncomingMessage } from 'http';
import { Socket as BaseSocket } from 'socket.io';

export interface Socket extends BaseSocket {
  request: IncomingMessage & Request
}
