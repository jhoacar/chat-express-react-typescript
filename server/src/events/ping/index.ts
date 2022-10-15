import { Socket } from 'socket.io';

export default function ping(this: Socket, data: any) {
  const { address, issued } = this.handshake;
  console.log(`User (${address} - ${new Date(issued)}) sent a ping: \n`, data);
  this.emit('pong', { message: 'Hello from server' });
}
