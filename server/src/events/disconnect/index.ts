import colors from 'colors/safe';
import SQLite from '@models/sql/sessions';
import { Socket } from 'socket.io';

/**
 * We remove from SQLite the user disconnected
 */

export default async function disconnect(this: Socket) {
  const { address, issued } = this.handshake;

  console.log(
    colors.red(
      `Destroying connection from ${address} (${this.id}) - ${new Date(
        issued,
      )}`,
    ),
  );

  await SQLite.destroy({
    where: {
      socketID: this.id,
    },
  });

  const users = await SQLite.findAll({
    raw: true,
  });

  this.broadcast.emit('peer-users', users);
}
