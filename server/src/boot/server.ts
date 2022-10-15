import { createServer } from 'http';
import app from '@boot/app';
import websocket from '@boot/websocket';
import { ExpressPeerServer } from 'peer';

import { getVersion } from '@utils/package';

const server = createServer(app);

const peer = ExpressPeerServer(server, {
  proxied: true,
  path: `/api/v${getVersion({ minimal: true })}/peer`,
});

websocket.attach(server);

app.use(peer);

export default server;
