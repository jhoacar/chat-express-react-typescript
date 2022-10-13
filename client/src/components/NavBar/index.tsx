/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import {
  Navbar, MobileNav, Button, IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTER } from 'router/paths';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
        <Link to={LOGIN}>Login</Link>
      </Button>
      <Button variant="gradient" size="lg" className="mb-2">
        <Link to={REGISTER}>Register</Link>
      </Button>
    </>
  );

  return (
    <Navbar className="max-w-none shadow-none rounded-none py-4 bg-gray-400 dark:bg-gray-800">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h1 className="flex gap-4">
          <img className="w-10 h-10" src="/icon.svg" alt="icon" />
          <Link
            className="mr-4 cursor-pointer py-1.5 font-normal"
            to="/"
          >
            Chat WebRTC
          </Link>
        </h1>
        <div className="hidden lg:flex gap-6">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars4Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="mt-4">
          <hr />
        </div>
        <div className="mt-8 flex flex-col gap-1">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

export default NavBar;
