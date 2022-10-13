import axios from 'axios';
import { setToken } from 'utils/token';

const SERVER = import.meta.env.VITE_SERVER || '/api/v1';

export async function login(email: string, password: string) {
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  const response = await axios.post(`${SERVER}/auth/login`, {
    email,
    password,
  });

  if (!response.data.body) {
    throw new Error('Failed authentication');
  }

  setToken(response.data.body.token);

  return true;
}

export async function validateToken(token: string) {
  if (!token) {
    throw new Error('Token is required');
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
    throw new Error('Failed authentication');
  }

  return true;
}
