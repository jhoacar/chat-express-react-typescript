/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { driver, SQL, MONGO } from '@config/database';

let library: string = '';

switch (driver) {
  case SQL:
    library = '../config/sql';
    break;
  case MONGO:
    library = '../config/mongo';
    break;
  default:
    throw new Error(
      `Must be specified DB_DRIVER environment variable, and can be: ${SQL}, ${MONGO}, not ${driver}`,
    );
}

export const { initialization } = require(library);
