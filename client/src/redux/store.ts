import { configureStore } from '@reduxjs/toolkit';
import { Auth } from '@/models';
import { authSlice } from './states/auth';
import { connectionSlice } from './states/connection';

export interface AppStore {
  session: Auth
}

export default configureStore<AppStore>({
  reducer: {
    session: authSlice.reducer,
    connection: connectionSlice.reducer,
  },
});
