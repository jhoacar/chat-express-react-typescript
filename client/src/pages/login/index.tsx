/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  FormEventHandler, useState, BaseSyntheticEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Layout } from '@/layouts';
import { login } from '@/services/auth';
import { login as loginAction } from '@/redux/states';
import GmailIcon from '@/assets/images/gmail.svg';
import { HOME, LOGIN } from '@/router';
import Input from '@/components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      <div
        className={`
      flex flex-col 
      items-center 
      justify-center 
      p-6
      w-full
      max-w-lg
      `}
      >
        <Link
          to={HOME}
          className={`
        flex 
        items-center 
        mb-6 text-2xl 
        font-semibold 
        text-gray-900 
        dark:text-white
        `}
        >
          <img className="w-8 h-8 mr-2" src="/icon.svg" alt="icon" />
          Chat WebRTC
        </Link>
        <div className={`
        w-full
        bg-white 
        rounded-lg 
        shadow 
        dark:border 
        md:mt-0 
        xl:p-0 
        dark:bg-gray-800 dark:border-gray-700
        `}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event:BaseSyntheticEvent) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className={`
                flex
                px-3 py-2 
                bg-gray-50 
                border 
                shadow-sm 
                border-slate-300 
                placeholder-slate-400 
                disabled:bg-slate-50 
                disabled:text-slate-500 
                disabled:border-slate-200 
                focus:outline-none 
                focus:border-blue-500 
                focus:ring-blue-500 
                block 
                w-full 
                rounded-md
                sm:text-sm 
                focus:ring-1 
                focus:invalid:border-blue-500 
                focus:invalid:ring-blue-500 
                disabled:shadow-none
                `}
                >
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event:BaseSyntheticEvent) => setPassword(event.target.value)}
                    placeholder={showPassword ? '1234' : '••••'}
                    required
                  />
                  <button
                    type="button"
                    className="mx-4"
                    onClick={() => { setShowPassword(!showPassword); }}
                  >
                    {showPassword && <EyeSlashIcon className="h-6 w-6" />}
                    {!showPassword && <EyeIcon className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className={`
              w-full 
              text-white 
              bg-blue-600 
              hover:bg-blue-700 
              focus:ring-4 
              focus:outline-none 
              focus:ring-primary-300 
              font-medium 
              rounded-lg 
              text-sm 
              px-5 py-2.5 
              text-center 
              dark:bg-primary-600 
              dark:hover:bg-primary-700 
              dark:focus:ring-primary-800
              `}
              >
                Sign In
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">
                  or
                </p>
              </div>
              <button
                type="button"
                className={`
                w-full 
                flex items-center justify-center 
                text-black 
                bg-gray-100 hover:bg-gray-200 
                focus:ring-4 
                focus:outline-none 
                focus:ring-gray-300 
                font-medium rounded-lg 
                text-sm 
                px-5 py-2.5 
                text-center 
                inline-flex 
                items-center 
                dark:focus:ring-gray-300 
                mr-2 mb-2
                `}
              >
                <img
                  className="mr-2 -ml-1 w-4 h-4"
                  src={GmailIcon}
                  alt="gmail"
                />
                Sign in with Google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account yet?
                {' '}
                <Link
                  to={LOGIN}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>

  );
}

export default Login;
