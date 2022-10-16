import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import {
  connectWebSocket,
  disconnectWebSocket,
  connectPeer,
  disconnectPeer,
  addNewMember,
  changeMembers,
} from '@/redux';

import socket from '@/services/websocket';
import peer from '@/services/peer';

export default function useConection() {
  const dispatch = useDispatch();
  const webSocketConnected = useSelector(
    (state: any) => state.connection.websocket,
  );
  const peerID = useSelector((state: any) => state.connection.peerID);
  const members = useSelector((state: any) => state.connection.members);

  useEffect(() => {
    socket.on('connect', () => {
      toast.success('Server Connected');
      dispatch(connectWebSocket());
    });
    socket.on('disconnect', () => {
      toast.error('Server Disconnected');
      dispatch(disconnectWebSocket());
    });
    socket.on('peer-users', (users: any[]) => {
      const newMembers = users
        .map((user) => user.peerID)
        .filter((member) => member !== peerID);
      dispatch(changeMembers(newMembers));
    });

    socket.on('new-user', (id: string) => {
      dispatch(addNewMember(id));
    });

    peer.on('open', (id) => {
      toast.success(`Peer Connected - ${id}`);
      socket.emit('load-user', { id });
      dispatch(connectPeer(id));
    });
    peer.on('close', () => {
      toast.error('Peer disconnected');
      socket.emit('disconnect');
      dispatch(disconnectPeer());
    });
    peer.on('error', (error) => {
      toast.error(error.message);
      socket.emit('disconnect');
      dispatch(disconnectPeer());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return { webSocketConnected, peerID, members };
}
