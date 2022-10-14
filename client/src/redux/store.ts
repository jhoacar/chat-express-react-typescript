import { configureStore } from '@reduxjs/toolkit';
import { Auth } from '@/models';
import { authSlice } from './states/auth';

export interface AppStore {
  session: Auth
}

export default configureStore<AppStore>({
  reducer: {
    session: authSlice.reducer,
  },
});
