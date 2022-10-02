import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const server: string = import.meta.env.VITE_SERVER || '';
const socket = io(server);

function Guest() {
  const [isConnected, setIsConnected] = useState<Boolean>(socket.connected);
  const [lastPong, setLastPong] = useState<string | null>(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(() => new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  };

  return (
    <div>
      <p>
        Connected:
        {' '}
        { `${isConnected}` }
      </p>
      <p>
        Last pong:
        {' '}
        { lastPong || '-' }
      </p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
}

export default Guest;
