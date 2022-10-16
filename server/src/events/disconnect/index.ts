import colors from 'colors/safe';
import { Socket } from 'socket.io';
import PeerUser from '@models/sql/peer';

export default async function disconnect(this: Socket) {
  const { address, issued } = this.handshake;

  console.log(
    colors.red(
      `Destroying connection from ${address} (${this.id}) - ${new Date(
        issued,
      )}`,
    ),
  );
  const { id: socketID } = this;

  let users: any[] = [];
  try {
    await PeerUser.destroy({ where: { socketID } });

    users = await PeerUser.findAll({
      raw: true,
    });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    this.broadcast.emit('update', users);
  }
}
