/* eslint-disable no-param-reassign */
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
      console.log('Here: ', action.payload);
      setToken(action.payload);
      state.authenticated = true;
      state.token = action.payload;
      return state;
    },
    logout: (state) => {
      removeToken();
      state.authenticated = false;
      state.token = '';
      return state;
    },
  },
});

export const { login, logout } = authSlice.actions;
