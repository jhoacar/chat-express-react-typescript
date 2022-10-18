import { createServer } from 'http';
import app from '@boot/app';
import websocket from '@boot/websocket';
import { ExpressPeerServer } from 'peer';
import router from '@routes';

const server = createServer(app);

const peer = ExpressPeerServer(server, {
  proxied: true,
  path: '/api/peer',
  allow_discovery: true,
});

websocket.attach(server);

app.use(peer);

app.use(router);

export { app };
export default server;
