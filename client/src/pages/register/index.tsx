/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { BaseSyntheticEvent, FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Layout } from '@/layouts';
import GmailIcon from '@/assets/images/gmail.svg';
import { register } from '@/services/register';
import { HOME, LOGIN } from '@/router';
import Input from '@/components/Input';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (errorPassword) {
      return toast.error('Please confirm correctly your password');
    }
    return register(name, email, password).then((result) => {
      if (result.error) {
        toast.error(result.error);
      }
    }).catch((error:any) => {
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
              Create an Account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event:BaseSyntheticEvent) => setName(event.target.value)}
                  placeholder="name"
                  required
                />
              </div>
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
                <div className="flex">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event:BaseSyntheticEvent) => setPassword(event.target.value)}
                    placeholder="••••••••"
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
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                  {' '}
                  {errorPassword && (
                  <span className="text-red-500">
                    *
                    {' '}
                    password mismatch
                  </span>
                  )}
                </label>
                <div className="flex">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(event:BaseSyntheticEvent) => {
                      setErrorPassword(event.target.value !== password);
                      setConfirmPassword(event.target.value);
                    }}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="mx-4"
                    onClick={() => { setShowConfirmPassword(!showConfirmPassword); }}
                  >
                    {showConfirmPassword && <EyeSlashIcon className="h-6 w-6" />}
                    {!showConfirmPassword && <EyeIcon className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the
                    {' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
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
                Create an account
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
                Sign up with Google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                {' '}
                <Link
                  to={LOGIN}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
