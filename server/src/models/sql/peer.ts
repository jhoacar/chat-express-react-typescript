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

const PeerUser = sqlite.define('PeerUser', schema, {
  tableName: 'PeerUsers',
});
(async () => {
  console.log('Dropping table');
  try {
    await PeerUser.drop();
    await PeerUser.sync();
  } catch (error: any) {
    console.log(error.message);
  }
})();

export default PeerUser;
