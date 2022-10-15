/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftCircleIcon,
  ArrowRightOnRectangleIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  FolderIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  TableCellsIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  ChatBubbleBottomCenterIcon,
  LinkIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HOME, LOGIN, REGISTER } from '@/router/paths';
import socket from '@/services/websocket';
import peer from '@/services/peer';
import {
  getWebSocketConnection,
  removeWebSocketConnection,
  setWebSocketConnection,
  getPeerConnection,
  setPeerConnection,
  removePeerConnection,
} from '@/utils/connection';

function SideBar() {
  const [open, setOpen] = useState(false);
  const [webSocketConnected, setWebSocketConnected] = useState(
    getWebSocketConnection(),
  );
  const [peerID, setPeerID] = useState(getPeerConnection());
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      toast.success('Server Connected');
      setWebSocketConnection();
      setWebSocketConnected(true);
    });
    socket.on('disconnect', () => {
      toast.error('Server Disconnected');
      removeWebSocketConnection();
      setWebSocketConnected(false);
    });
    socket.on('connect-user', ({ id }) => {
      setMembers(() => [...members, id]);
    });
    socket.on('disconnect-user', ({ id }) => {
      setMembers(() => members.filter((member) => member !== id));
    });
    peer.on('open', (id) => {
      toast.success(`Peer Connected - ${id}`);
      socket.emit('connect-user', { id });
      setPeerConnection(id);
      setPeerID(id);
    });
    peer.on('close', () => {
      toast.error('Peer disconnected');
      socket.emit('disconnect-user', { peerID });
      removePeerConnection();
      setPeerID('');
    });
    peer.on('error', (error) => {
      toast.error(error.message);
      socket.emit('disconnect-user', { peerID });
      removePeerConnection();
      setPeerID('');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const MenusAuth = [
    { title: 'Dashboard', icon: <ChartBarIcon className="h-6 w-6" /> },
    {
      title: 'Inbox',
      icon: <ChatBubbleBottomCenterIcon className="h-6 w-6" />,
    },
    {
      title: 'Accounts',
      icon: <UserCircleIcon className="h-6 w-6" />,
      gap: true,
    },
    { title: 'Schedule ', icon: <CalendarDaysIcon className="h-6 w-6" /> },
    {
      title: 'Search',
      icon: <MagnifyingGlassCircleIcon className="h-6 w-6" />,
    },
    {
      title: 'Analytics',
      icon: <ChartBarSquareIcon className="h-6 w-6" />,
    },
    {
      title: 'Files ',
      icon: <FolderIcon className="h-6 w-6" />,
      gap: true,
    },
    {
      title: 'Setting',
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
    },
  ];

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
      title: 'WebSocket',
      icon: (
        <GlobeAltIcon
          title={webSocketConnected ? 'Connected' : 'Disconnected'}
          className={`h-6 w-6 ${
            webSocketConnected ? 'text-blue-600' : 'text-red-600'
          }`}
        />
      ),
      href: '#',
      gap: false,
    },
    {
      title: 'PeerSocket',
      icon: (
        <LinkIcon
          title={peerID || 'Disconnected'}
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
    <div
      className={` ${
        open ? 'w-40' : 'w-20 '
      } hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-5 h-full pt-8 relative duration-300`}
    >
      <ArrowLeftCircleIcon
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <div
        className="cursor-pointer items-center border-b border-gray-400"
        onClick={() => setOpen(!open)}
      >
        <ChatBubbleBottomCenterIcon
          className={`${
            (webSocketConnected && 'text-blue-600')
                        || 'text-red-600'
          } text-sky-400 h-10 w-10 cursor-pointer duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`origin-left font-medium text-xl duration-200 ${
            !open && 'scale-0'
          }`}
        >
          <Link to={HOME}>Chat WebRTC</Link>
        </h1>
      </div>
      <ul className="flex flex-col pt-6">
        {MenusGuest.map((Menu, index) => (
          <li
            key={index}
            className={`border rounded border-gray-400 mb-1
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
              index === 0 && 'bg-light-white'
            } `}
          >
            {Menu.href !== undefined && (
            <Link
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4"
              to={Menu.href}
            >
              {Menu.icon}
              <span
                className={`${
                  !open && 'hidden'
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </Link>
            )}

            {Menu.href === undefined && (
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4">
              {Menu.icon}
              <span
                className={`${
                  !open && 'hidden'
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </div>
            )}
          </li>
        ))}
        {members?.map((member) => (
          <li
            key={member}
            className="border rounded border-gray-400 mb-1 mt-2"
          >
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4">
              <ChatBubbleBottomCenterTextIcon
                title={member}
                className="h-6 w-6 text-blue-600"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;
