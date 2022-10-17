import { useState } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { Layout } from '@/layouts';
import LoginImage from '@/assets/images/login.svg';

function Login() {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={LoginImage} className="w-full" alt="Phone" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6 flex gap-4 text-gray-700 bg-white border border-solid border-gray-300 rounded">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  className="w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-none transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="mx-4"
                  onClick={() => { setShow(!show); }}
                >
                  {show && <EyeSlashIcon className="h-6 w-6" />}
                  {!show && <EyeIcon className="h-6 w-6" />}
                </button>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <label
                    className="cursor-pointer form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                Sign in with Google
              </button>
              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: '#4285f4' }}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >

                {/* <!-- Google --> */}
                <svg className="w-3.5 h-3.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
