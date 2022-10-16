import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import {
  connectWebSocket,
  disconnectWebSocket,
  connectPeer,
  disconnectPeer,
  updateMembers,
} from '@/redux';

import socket from '@/services/websocket';
import peer from '@/services/peer';
import { AppStore } from '@/redux/store';

export default function useConection() {
  const dispatch = useDispatch();
  const socketID = useSelector((state: AppStore) => state.connection.socketID);
  const peerID = useSelector((state: AppStore) => state.connection.peerID);
  const members = useSelector((state: AppStore) => state.connection.members);

  const handlePeerDisconected = (error: any) => {
    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.error('Peer disconnected');
    }
    dispatch(disconnectPeer());
  };

  const handlePeerConnected = (newPeerID: string) => {
    toast.success(`Peer Connected - ${newPeerID}`);

    socket.emit('update', {
      socketID: socket.id,
      peerID: newPeerID,
    });

    dispatch(connectPeer(newPeerID));
  };

  const handleWebSocketConnected = () => {
    toast.success('Server Connected');
    dispatch(connectWebSocket(socket.id));
  };
  const handleWebSocketDisconnected = () => {
    toast.error('Server Disconnected');
    dispatch(disconnectWebSocket());
  };

  const handleUpdateMembers = (data: any) => {
    let newMembers = [];
    if (Array.isArray(data)) {
      newMembers = data
        .filter((member) => member?.socketID !== socket.id)
        .map((member) => member.peerID)
        .filter((member) => member);
    }
    dispatch(updateMembers(newMembers));
  };

  useEffect(() => {
    socket.on('connect', handleWebSocketConnected);
    socket.on('disconnect', handleWebSocketDisconnected);

    socket.on('update', handleUpdateMembers);

    peer.on('open', handlePeerConnected);

    peer.on('close', () => handlePeerDisconected(null));
    peer.on('error', handlePeerDisconected);

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return { socketID, peerID, members };
}
