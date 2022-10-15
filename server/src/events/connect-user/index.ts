import { Socket } from 'socket.io';

export default function connectUser(this: Socket, data: any) {
  const { address, issued } = this.handshake;
  console.log(
    `User (${address} - ${new Date(issued)}) sent a new user: \n`,
    data,
  );
  this.broadcast.emit('connect-user', data);
}
