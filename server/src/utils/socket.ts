import { NextFunction, Request, Response } from 'express';
import { Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';

type NextFunctionSocketIO = (err?: ExtendedError | undefined) => void;

type ExpressMiddleware = (req: Request, res: Response, next: NextFunction) => void;

type SocketIOMiddleware = (socket: Socket, next: NextFunctionSocketIO) => void;

export function wrapper(expressMiddleware: ExpressMiddleware) : SocketIOMiddleware {
  function socketMiddleware(socket:Socket, next: NextFunctionSocketIO) {
    expressMiddleware(socket.request as Request, {} as Response, next as NextFunction);
  }
  return socketMiddleware;
}
