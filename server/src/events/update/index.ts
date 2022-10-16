import { Socket } from 'socket.io';
import color from 'colors/safe';
import PeerUser from '@models/sql/peer';

export default async function update(this: Socket, data: any) {
  console.log(color.blue('Adding new peer user'), data);

  const { socketID, peerID } = data;
  let users: any[] = [];
  try {
    await PeerUser.update({ peerID }, { where: { socketID } });

    users = await PeerUser.findAll({
      raw: true,
    });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    this.emit('update', users);
    this.broadcast.emit('update', users);
  }
}
