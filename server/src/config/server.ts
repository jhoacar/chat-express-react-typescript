export const port = process.env.PORT;
export const sqliteFile = process.env.SQLITE_FILE || 'sessions.db';
export const sessionSecret = process.env.SESSION_SECRET || 'secret';

export default {
  port,
  sqliteFile,
  sessionSecret,
};
