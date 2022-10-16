/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  getWebSocketConnection,
  removeWebSocketConnection,
  setWebSocketConnection,
  getPeerConnection,
  setPeerConnection,
  removePeerConnection,
} from '@/utils/connection';

import { Connection } from '@/models/connection';

export const connectionInitialState: Connection = {
  websocket: getWebSocketConnection(),
  peerID: getPeerConnection(),
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: connectionInitialState,
  reducers: {
    connectPeer: (state, action) => {
      setPeerConnection(action.payload);
      state.peerID = action.payload;
      return state;
    },
    disconnectPeer: (state) => {
      removePeerConnection();
      state.peerID = '';
      return state;
    },
    connectWebSocket: (state) => {
      setWebSocketConnection();
      state.websocket = true;
      return state;
    },
    disconnectWebSocket: (state) => {
      removeWebSocketConnection();
      state.websocket = false;
      return state;
    },
    addNewMember: (state, action) => {
      state.members?.push(action.payload);
      console.log('New user: ', action.payload);
      return state;
    },
    changeMembers: (state, action) => {
      state.members = action.payload?.map(
        (id: string) => id !== state.peerID,
      );
      console.log('Members: ', action.payload);
      return state;
    },
  },
});

export const {
  connectPeer,
  disconnectPeer,
  connectWebSocket,
  disconnectWebSocket,
  addNewMember,
  changeMembers,
} = connectionSlice.actions;
