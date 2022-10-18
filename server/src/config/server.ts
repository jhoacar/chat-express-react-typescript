export const port = process.env.PORT;
export const securePort = process.env.PORT_HTTPS || 8443;
export const sqliteFile = process.env.SQLITE_FILE || 'sessions.db';
export const sessionSecret = process.env.SESSION_SECRET || 'secret';

export default {
  port,
  securePort,
  sqliteFile,
  sessionSecret,
};
