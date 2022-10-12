import Peer from 'peerjs';

const host: string = import.meta.env.VITE_PEER_HOST || 'localhost';
const port: number = parseInt(import.meta.env.VITE_PEER_PORT || '9000');

export default class PeerService {
  peer: Peer;

  constructor() {
    this.peer = new Peer({
      host,
      port,
    });
  }
}
