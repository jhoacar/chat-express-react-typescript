import { Options, Sequelize } from 'sequelize';
import { uri } from '@config/database';
import { sqliteFile } from '@config/server';
import { resolve } from 'path';

const options: Options = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
};

const sequelize = new Sequelize(uri, options);
const sqliteURI = `sqlite://${resolve(`${__dirname}/../../${sqliteFile}`)}`;
const sqliteOptions: Options = {
  logging: false,
};

export const sqlite = new Sequelize(sqliteURI, sqliteOptions);

export const connection = async () => {
  await sequelize.authenticate();
};

export const sqliteConnection = async () => {
  await sequelize.authenticate();
};

export default sequelize;
