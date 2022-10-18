import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER || '';
const API_SERVER = `${SERVER}/api/v1`;

export type LoginError = { error?: string };
export type LoginResult = { token?: string };
export type LoginValidate = { authenticated?: boolean };

export async function login(
  email: string,
  password: string,
): Promise<LoginResult & LoginError> {
  if (!email || !password) {
    return { error: 'Email and Password are required' };
  }

  const response = await axios.post(`${API_SERVER}/auth/login`, {
    email,
    password,
  });

  if (!response.data.body) {
    return { error: 'Failed authentication' };
  }

  if (!response.data.body.token) {
    return { error: 'Token is missed' };
  }

  return {
    token: response.data.body.token as string,
  };
}

export async function validateToken(
  token: string,
): Promise<LoginValidate & LoginError> {
  if (!token) {
    return { error: 'Token is required' };
  }
  const response = await axios.post(
    `${SERVER}/auth/validate`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );

  if (!response.data.body) {
    return { error: 'Failed authentication' };
  }

  return { authenticated: true };
}
