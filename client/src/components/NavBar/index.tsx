/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <>
      <Button variant="gradient" size="lg" className="mb-2">
        <Link to="/login">Login</Link>
      </Button>
      <Button variant="gradient" size="lg" className="mb-2">
        <Link to="/register">Register</Link>
      </Button>
    </>
  );

  return (
    <Navbar className="max-w-none rounded-none py-8">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h1 className="mr-4 cursor-pointer py-1.5 font-normal">
          <Link to="/">Chat WebRTC</Link>
        </h1>
        <div className="hidden lg:flex gap-6">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="mt-4">
          <hr />
        </div>
        <div className="mt-8 flex flex-col gap-1">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavBar;
