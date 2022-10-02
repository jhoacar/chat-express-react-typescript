import express from 'express';
// import morgan from 'morgan';
import router from '@routes';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

// app.use(morgan('combined'));
app.use(router);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connecion', (socket) => {
  const { address, issued } = socket.handshake;

  console.log(`New connection from ${address} - ${new Date(issued)}`);

  socket.on('join', (data: any) => {
    console.log(`User (${address} - ${new Date(issued)}) connected send: \n`, data);

    const { roomName } = data;
    socket.join(roomName);
    socket.to(roomName).broadcast.emit('new-user', data);

    socket.on('disconnect', () => {
      socket.to(roomName).broadcast.emit('bye-user', data);
    });
  });
});

export default server;
