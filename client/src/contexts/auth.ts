import { createContext, Dispatch } from 'react';
import { getToken } from 'utils/token';

export type AuthContextType = {
  auth: boolean
  setAuth: Dispatch<boolean> | null
};

export const defaultContext: AuthContextType = {
  auth: getToken() !== null,
  setAuth: null,
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export default AuthContext;
