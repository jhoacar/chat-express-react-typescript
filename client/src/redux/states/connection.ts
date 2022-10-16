/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  getPeerID,
  getWebSocketID,
  removePeerID,
  removeWebSocketID,
  setPeerID,
  setWebSocketID,
} from '@/utils/connection';

import { Connection } from '@/models/connection';

export const connectionInitialState: Connection = {
  socketID: getWebSocketID(),
  peerID: getPeerID(),
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: connectionInitialState,
  reducers: {
    connectPeer: (state, action) => {
      setPeerID(action.payload);
      state.peerID = action.payload;
      return state;
    },
    disconnectPeer: (state) => {
      removePeerID();
      state.peerID = '';
      return state;
    },
    connectWebSocket: (state, action) => {
      setWebSocketID(action.payload);
      state.socketID = action.payload;
      return state;
    },
    disconnectWebSocket: (state) => {
      removeWebSocketID();
      state.socketID = '';
      return state;
    },
    updateMembers: (state, action) => {
      state.members = action.payload;
      return state;
    },
  },
});

export const {
  connectPeer,
  disconnectPeer,
  connectWebSocket,
  disconnectWebSocket,
  updateMembers,
} = connectionSlice.actions;
