import {
  ArrowLeftCircleIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';
import {
  ChatBubbleBottomCenterIcon,
  LinkIcon,
  GlobeAltIcon,
  Bars3Icon,
  // ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME, LOGIN, REGISTER } from '@/router/paths';
import useConnection from '@/hooks/useConection';

function Bar() {
  const { socketID, peerID } = useConnection();

  const [open, setOpen] = useState(false);

  const MenusGuest = [
    {
      title: 'Home',
      icon: <HomeIcon className="h-6 w-6" />,
      href: HOME,
      gap: false,
    },
    {
      title: 'Login',
      icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />,
      href: LOGIN,
      gap: false,
    },
    {
      title: 'Register',
      icon: <TableCellsIcon className="h-6 w-6" />,
      href: REGISTER,
      gap: false,
    },
    {
      title: 'Socket',
      help: socketID,
      icon: (
        <GlobeAltIcon
          title={socketID ? 'Connected' : 'Disconnected'}
          className={`h-6 w-6 ${
            socketID ? 'text-blue-600' : 'text-red-600'
          }`}
        />
      ),
      href: '#',
      gap: false,
    },
    {
      title: 'Peer',
      help: peerID,
      icon: (
        <LinkIcon
          title={peerID ? 'Connected' : 'Disconnected'}
          className={`h-6 w-6 ${
            peerID ? 'text-blue-600' : 'text-red-600'
          }`}
        />
      ),
      href: '#',
      gap: false,
    },
  ];

  return (
    <nav
      className={`fixed
                  z-10 
                  top-0
                  right-0
                  left-0
                  m-2
                  mt-0
                  p-4
                  shadow-2xl
                  rounded-lg
                  border-solid
                  border-2
                  border-transparent
                  bg-white dark:bg-gray-900
                  dark:border-gray-700
                  lg:static 
                  lg:h-full
                  lg:w-auto
                  lg:p-0
                  lg:m-0
                  lg:shadow-none
                        `}
    >
      <div
        className={` 
                flex flex-wrap 
                justify-between 
                items-center
                duration-300
                w-full
                lg:relative
                lg:flex-col
                lg:justify-start
                lg:h-full
                lg:pt-8
                ${open ? 'lg:w-40' : 'lg:w-24'}
                `}
      >
        <button
          className={`
                            absolute
                            z-10 
                            cursor-pointer 
                            -right-3 
                            top-9 w-7 
                            border-dark-purple
                            border-2 
                            rounded-full
                            hidden  
                            lg:block
                            ${!open && 'rotate-180'}
                            `}
          onClick={() => setOpen(!open)}
        >
          <ArrowLeftCircleIcon />
        </button>
        <button
          className={`
                    cursor-pointer 
                    flex lg:flex-col 
                    gap-4 
                    justify-center 
                    items-center 
                    ${open ? '' : 'lg:p-4'} 
                    lg:border-b lg:border-gray-400
                    `}
          onClick={() => setOpen(!open)}
        >
          <ChatBubbleBottomCenterIcon
            className={`
                        ${socketID ? 'text-blue-600' : 'text-red-600'}
                        ${open ? 'rotate-[360deg]' : ''}
                        h-10 w-10 
                        cursor-pointer duration-500
                        `}
          />
          <h1
            className={`
                        origin-left 
                        font-medium 
                        text-xl 
                        duration-200
                        ${open ? '' : 'lg:hidden'}
                        `}
          >
            <Link to={HOME}>Chat WebRTC</Link>
          </h1>
        </button>
        <div
          className={`inline-flex 
                                items-center
                                text-sm 
                                text-gray-500 
                                rounded-lg 
                                lg:hidden 
                                hover:bg-gray-100 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-gray-200 
                                dark:text-gray-400 
                                dark:hover:bg-gray-700 
                                dark:focus:ring-gray-600
                                `}
        >
          <Bars3Icon
            className="h-10 w-10 p-2.5 border rounded border-gray-400 mb-1 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`
                    ${open ? '' : 'hidden'} 
                    w-full
                    lg:block lg:w-auto  
                    `}
        >
          <ul
            className={`
                        flex 
                        flex-col 
                        p-4 
                        mt-4 lg:mt-0
                        bg-gray-100 dark:bg-gray-800 lg:bg-white lg:dark:bg-gray-900
                        rounded-lg 
                        border lg:border-0
                        border-gray-100 dark:border-gray-700
                        lg:text-sm 
                        lg:font-medium
                        lg:p-0
                        lg:pt-6
                        `}
          >
            {MenusGuest?.map((Menu, index) => (
              <li
                key={Menu.title}
                className={`bg-white hover:bg-gray-50 border rounded border-gray-400 mb-1
                ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                  index === 0 && 'bg-light-white'
                } `}
              >
                <Link
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4"
                  to={Menu.href || '/'}
                >
                  {Menu.icon}
                  <span
                    title={Menu.help}
                    className={`
                                            origin-left 
                                            duration-200
                                            ${open ? '' : 'hidden'}
                                            `}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Bar;
