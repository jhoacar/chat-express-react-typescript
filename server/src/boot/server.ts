import { createServer } from 'http';
import app from '@boot/app';
import websocket from '@boot/websocket';

const server = createServer(app);
websocket.attach(server);

export default server;
