// import Link from 'next/link';
import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ConsoleButton from '../components/Buttons/ConsoleButton';
import styles from "../styles/header.module.css"

import { useUser } from '@auth0/nextjs-auth0';
// import { signIn, signOut, useSession } from "next-auth/react"

import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import UserAvatar from '../images/favicon.svg';
// import TealRocketLogo from './Logos/TealRocketLogo';

import ButtonLink from '../components/Links/ButtonLink';
import { Link } from 'react-router-dom';

function Header({
  sidebarOpen,
  setSidebarOpen,
  projectsSidebarOpen,
  setProjectsSidebarOpen,
  // dropdownprofile
  align
}) {
  // const { data: session, status } = useSession()
  const loading = status === "loading"
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  // auth0
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  // dropdownprofile
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
    <header className="sticky top-0 border-b border-slate-200 z-30 bg-gray-200 bg-opacity-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="23" height="3" />
                <rect x="4" y="11" width="23" height="3" />
                <rect x="4" y="17" width="23" height="3" />
              </svg>
            </button>

            <div className="space-y-2">
              <div className="flex flex-grow justify-center">
                <h3 className="md-hidden uppercase hover:text-white font-semibold pl-6 pt-3 my-0 text-gray-50">
                  <Link href="/">
                    <span className="flex flex-col justify-center lg:hidden xl:block border border-solid pl-1 pr-1 pt-1 pb-1 cursor-pointer text-black">Buildfunctions.com</span>
                  </Link>
                </h3>
              </div>
            </div>

            <span className="leading-tight ml-6">
              <ConsoleButton />
            </span>

          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div className={styles.signedInStatus}>
              <p
              >
                {!isLoading && !user && (
                  <>
                    {/* <span className={styles.notSignedInText}>
                      You are not signed in
                    </span> */}
                    <a
                      href={`/api/auth/login`}
                      className="mt-4 btn-sm bg-gray-500"
                    // onClick={(e) => {
                    //   e.preventDefault()
                    //   signIn()
                    // }}
                    >
                      Sign in
                    </a>


                  </>
                )}
                {user && (
                  <a
                      href={`/api/auth/logout`}
                      className="mt-4 btn-sm bg-gray-500"
                    // onClick={(e) => {
                    //   e.preventDefault()
                    //   signIn()
                    // }}
                  >
                      Sign out
                  </a>
                )}
              </p>
            </div>

            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <span>
              <div className="relative inline-flex">

                <button
                  ref={trigger}
                  className="inline-flex justify-center items-center group"
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  <div className="flex items-center truncate">

                    {user && (
                      <>
                        {user.picture && (
                          <div className="mr-4">
                            <span
                              style={{ backgroundImage: `url('${user.picture}')` }}
                              className={styles.avatar}
                            />
                          </div>
                        )}


                        <span>
                          <small>Signed in as</small>
                          <br />
                          <strong className="font-medium text-slate-800 text-xl">{user.nickname ?? user.name}</strong>
                        </span>

                        <span className="ml-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>

                      </>
                    )}

                  </div>
                </button>

                <Transition
                  className={`origin-top-right z-10 absolute top-full min-w-44 bg-gray-200 bg-opacity-50 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
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

                      <div className="font-medium text-slate-800 text-4xl">projectmikey</div>
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

                      <li>
                        <Link
                          className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex flex-row justify-center mb-2"
                          to="/signin"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          Sign Out
                        </Link>
                      </li>
                    </ul>

                  </div>
                </Transition>
              </div>
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;