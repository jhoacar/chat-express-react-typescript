import io from 'socket.io-client';

const server: string = import.meta.env.VITE_WEBSOCKET_SERVER || '';
const socket = io(server, {
  path: '/api/websocket',
});

export default socket;
