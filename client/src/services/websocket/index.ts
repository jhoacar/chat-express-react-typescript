import io from 'socket.io-client';

const server: string = import.meta.env.VITE_SERVER || '';
const socket = io(server);

export default socket;
