import 'dotenv/config';
import { createServer } from 'https';
// import open from 'open';
import server, { app } from '@boot';
import './certs';
import { initialization } from '@boot/database';
import { port as serverPort, securePort } from '@config/server';
import { AddressInfo, Socket } from 'net';
import { readFileSync } from 'fs';
import { join } from 'path';

server.listen(serverPort, function (this: Socket) {
  initialization();
  const information = this.address() as AddressInfo;
  // open(`http://localhost:${serverPort}`);
  console.log(`Server on http://localhost:${information.port}`);
});

const options = {
  key: readFileSync(join(__dirname, 'certs', 'key.pem')),
  cert: readFileSync(join(__dirname, 'certs', 'cert.pem')),
};

const secureApp = createServer(options, app);

secureApp.listen(securePort, () => {
  console.log(`Server listening on https://localhost:${securePort}`);
});
