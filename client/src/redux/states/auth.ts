import { createSlice } from '@reduxjs/toolkit';
import { Auth } from '@/models';
import { getToken, removeToken, setToken } from '@/utils/token';

export const authInitalState: Auth = {
  authenticated: !!getToken()?.length,
  token: getToken() as String,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitalState,
  reducers: {
    login: (state, action) => {
      setToken(action.payload);
      return {
        authenticated: true,
        token: action.payload,
      };
    },
    logout: () => {
      removeToken();
      return {
        authenticated: false,
        token: '',
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
