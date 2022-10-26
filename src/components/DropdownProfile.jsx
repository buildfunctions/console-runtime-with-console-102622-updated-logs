import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';

import UserAvatar from '../images/favicon.svg';
import TealRocketLogo from './Logos/TealRocketLogo';
import NavBarItem from './NavBarItem';
import { useUser } from '@auth0/nextjs-auth0';


function DropdownProfile({
  align
}) {

  const { user, isLoading } = useUser();
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <Image className="w-8 h-8 rounded" src={UserAvatar} width="32" height="32" alt="User" /> */}
        <TealRocketLogo />
        {/* <Image className="w-10 h-10 rounded cursor-pointer hover:bg-pink-200" src={TealRocket} alt="TealRocket" /> */}
        <div className="flex items-center truncate">
          {/* <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">Acme Inc.</span> */}   
          
          <span className="text-lg font-medium whitespace-nowrap text-indigo-100 hover:text-indigo-50 hover:text-gray-300 ml-2 border-1 border-white">projectmikey</span>
          
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>

        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-gray-200 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800 text-4xl">Settings</div>
             {/* Badge */}
              <div className="flex flex-shrink-0 ml-2">
                <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 mt-1 rounded">PRO</span>
              </div>
          </div>
          <ul className="mt-2">

          <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
           
           {/* not working */}
            {user && (
              <a
                href={`/api/auth/logout`}
                className="mt-4 btn-sm bg-gray-500"
                   
              >
                Sign out
              </a>
            )}
          </ul>
        
        </div>
      </Transition>
    </div>
  )
}

export default DropdownProfile;

const AnchorLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <a href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
      </NavBarItem>
    </a>
  );
};
