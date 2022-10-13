import 'dotenv/config';
// import open from 'open';
import app from '@boot';
import { initialization } from '@boot/database';
import { port as serverPort } from '@config/server';
import { port as peerPort } from '@config/peer';
import { PeerServer } from 'peer';
import { AddressInfo, Socket } from 'net';

app.listen(serverPort, function (this: Socket) {
  initialization();
  const information = this.address() as AddressInfo;
  // open(`http://localhost:${serverPort}`);
  console.log(`Server on http://localhost:${information.port}`);
});

PeerServer(
  {
    port: peerPort as number,
  },
  () => {
    console.log(`Peer Server on http://localhost:${peerPort}`);
  },
);
