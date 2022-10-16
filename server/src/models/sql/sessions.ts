import { DataTypes } from 'sequelize';
import { sqlite } from '@config/sql/connection';

const schema = {
  peerID: {
    type: DataTypes.STRING,
  },
  socketID: {
    type: DataTypes.STRING,
  },
};

const Session = sqlite.define('session', schema, {
  tableName: 'sessions',
});
(async () => {
  console.log('Dropping table');
  await Session.drop();
  await Session.sync();
})();

export default Session;
