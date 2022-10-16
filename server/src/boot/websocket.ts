import { Server } from 'socket.io';
import colors from 'colors/safe';
import { readdirSync } from 'fs';
import { dirname as eventDirname } from '@events';
import SQLite from '@models/sql/peer';

const io = new Server({
  cors: {
    origin: '*',
  },
  path: '/api/websocket',
});

io.on('connection', async (socket) => {
  const { address, issued } = socket.handshake;

  /**
     * We save the new user connected
     */
  try {
    await SQLite.create({
      peerID: '',
      socketID: socket.id,
    });
  } catch (error: any) {
    console.log(error.message);
  }

  console.log(
    colors.green(
      `New connection from ${address} (${socket.id}) - ${new Date(
        issued,
      )}`,
    ),
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
