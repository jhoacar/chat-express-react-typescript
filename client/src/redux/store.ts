import { configureStore } from '@reduxjs/toolkit';
import { Auth } from '@/models';
import { authSlice } from './states/auth';
import { connectionSlice } from './states/connection';
import { Connection } from '@/models/connection';

export interface AppStore {
  session: Auth
  connection: Connection
}

export const store = configureStore<AppStore>({
  reducer: {
    session: authSlice.reducer,
    connection: connectionSlice.reducer,
  },
});

export default store;
