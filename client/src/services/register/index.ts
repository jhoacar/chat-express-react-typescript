import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER || '/api/v1';

export async function login(name: string, email: string, password: string) {
  if (!name || !email || !password) {
    throw new Error('Name, Email and Password are required');
  }

  const response = await axios.post(`${SERVER}/users`, {
    name,
    email,
    password,
  });

  if (!response.data.body) {
    throw new Error('Failed the register');
  }

  return true;
}
