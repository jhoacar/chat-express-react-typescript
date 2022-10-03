import express from 'express';
import morgan from 'morgan';
import { PeerServer } from 'peer';
import router from '@routes';

const app = express();

app.use(morgan('combined'));
/**
 * We use PeerServer() for WebRTC connections
 */
app.use('/peer', PeerServer());
app.use(router);

export default app;
