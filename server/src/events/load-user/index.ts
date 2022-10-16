import { Socket } from 'socket.io';
import color from 'colors/safe';
import { Op } from 'sequelize';
import SQLite from '@models/sql/sessions';

export default async function loadUser(this: Socket, data: any) {
  const { id } = data;
  const { id: socketID } = this;

  console.log(color.blue(`Adding new peer user - ${id}`));

  let users: any[] = [];

  try {
    await SQLite.update(
      { peerID: id },
      {
        where: {
          socketID,
        },
      },
    );

    this.broadcast.emit('new-user', id);

    users = await SQLite.findAll({
      raw: true,
      where: {
        socketID: {
          [Op.not]: socketID,
        },
      },
    });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    this.emit('peer-users', users);
  }
}