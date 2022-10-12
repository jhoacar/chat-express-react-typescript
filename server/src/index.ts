import 'dotenv/config';
// import open from 'open';
import app from '@boot';
import { initialization } from '@boot/database';
import { port as serverPort } from '@config/server';
import { port as peerPort } from '@config/peer';
import { PeerServer } from 'peer';

app.listen(serverPort, () => {
  initialization();
  // open(`http://localhost:${serverPort}`);
  console.log(`Server on http://localhost:${serverPort}`);
});

PeerServer(
  {
    port: peerPort as number,
  },
  () => {
    console.log(`Peer Server on http://localhost:${peerPort}`);
  },
);
