import { Socket } from 'socket.io';

export default function disconnectUser(this: Socket, data: any) {
  const { address, issued } = this.handshake;
  console.log(
    `User (${address} - ${new Date(
      issued,
    )}) sent a new user to disconnect: \n`,
    data,
  );
  this.broadcast.emit('disconnect-user', data);
}
