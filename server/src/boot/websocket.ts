import { Server } from 'socket.io';
import colors from 'colors/safe';
import { readdirSync } from 'fs';
import { dirname as eventDirname } from '@events';

const io = new Server({
  cors: {
    origin: '*',
  },
  path: '/api/websocket',
});

io.on('connection', (socket) => {
  const { address, issued } = socket.handshake;

  console.log(
    colors.green(`New connection from ${address} - ${new Date(issued)}`),
  );

  /**
     * We use a dynamic import for all
     * subfolders in events folder
     */
  readdirSync(`${eventDirname}`, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((file) => import(`${eventDirname}/${file.name}`)
      .then((module: any) => {
        socket.on(`${file.name}`, module.default);
      })
      .catch((error: Error) => {
        throw new Error(
          `An error has ocurred importing ${file.name}: ${error.message}`,
        );
      }));
});

export default io;
