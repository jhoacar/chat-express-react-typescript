import Peer from 'peerjs';

const host: string = import.meta.env.VITE_PEER_HOST || window.location.hostname;
const port: number = import.meta.env.VITE_PEER_PORT || window.location.port;

const peer = new Peer({
  host,
  port,
  debug: 1,
  path: '/api/peer',
});

export default peer;
