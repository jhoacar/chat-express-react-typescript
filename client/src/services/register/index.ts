import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER || '';
const API_SERVER = `${SERVER}/api/v1`;

type RegisterError = { error?: string };
type RegisterComplete = { registered?: boolean };

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<RegisterError & RegisterComplete> {
  if (!name || !email || !password) {
    return { error: 'Name, Email and Password are required' };
  }

  const response = await axios.post(`${API_SERVER}/users`, {
    name,
    email,
    password,
  });

  if (!response.data.body) {
    return { error: 'Failed the register' };
  }

  return { registered: true };
}
