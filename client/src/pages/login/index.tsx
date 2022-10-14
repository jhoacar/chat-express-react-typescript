import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Layout } from '@/layouts';
import { login } from '@/services/auth';
import { login as loginAction } from '@/redux/states';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    login(email, password)
      .then((result) => {
        if (result.error) {
          toast.error(result.error);
        } else {
          dispatch(loginAction(result.token));
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('An error has ocurred in the server');
      });
  };

  return (
    <Layout>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Type your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type your password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
