import express from 'express';
// import morgan from 'morgan';
import router from '@routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

// app.use(morgan('combined'));
app.use(router);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connecion', (socket: Socket) => {
  const { address, issued } = socket.handshake;

  console.log(`New connection from ${address} - ${new Date(issued)}`);

  socket.on('join', (data) => {
    console.log('User connected send: ', data);
  });
});

export default server;
