import { useState, useEffect } from 'react';
import socket from '@services/websocket';

function Guest() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState('');
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', (data) => {
      setLastPong(JSON.stringify(data));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping', { message: 'Hello from client' });
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
