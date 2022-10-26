import React, { Fragment } from 'react'
import Image from 'next/image'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Pattern from '../Svg/Pattern'

import AccountDropdown from './AccountDropdown'

const NAVBAR_LINKS = [
  {
    name: 'Billing',
    href: '/billing'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Documentation',
    href: '/docs'
  },
  {
    name: 'Logs',
    href: '/logs'
  },
  {
    name: 'Examples',
    href: '/examples'
  },
  {
    name: 'Upgrading',
    href: '/pricing'
  }
]

export default function Hero() {
  const [systemStatus, setSystemStatus] = React.useState('| All systems good. |')
  return (
    <div className='bg-black'>
      <div className='relative overflow-hidden'>
        <Pattern />
        <div className='relative pt-4 sm:pt-6 pb-16 sm:pb-24'>
          <Popover>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <nav className='relative md:flex items-center justify-between md:justify-between' aria-label='Global'>
                <div className='flex items-center'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <div className='flex items-center md:hidden'>
                     
                      <Popover.Button className='ml-4 bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='justify-center hidden md:ml-10 md:flex md:flex-row md:justify-center md:space-x-5 lg:space-x-10 hover:text-rose-300'>
                  {NAVBAR_LINKS.map((item) => (
                    <a key={item.name} href={item.href} className='font-medium text-gray-500 hover:text-rose-300'>
                      {item.name}
                    </a>
                  ))}
                  
                </div>
                <div className='hidden md:relative md:flex md:items-center md:justify-end w-20'>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel focus className='absolute z-10 top-0 inset-x-0 p-2 transition origin-top-right md:hidden'>
                <div className='rounded-lg shadow-md bg-white ring-1 ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex justify-between'>
                    <div className='pt-1'>
                      <Image
                        className='border border-shadowed rounded h-8 w-auto bg-transparent'
                        src='https://sts-token-card.vercel.app'
                        alt='Buildfunctions.com'
                        height={100}
                        width={150}
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-200'>
                        <span className='sr-only'>Close main menu</span>
                        <XIcon className='h-3 w-3' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {NAVBAR_LINKS.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
                    ))}
                   
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className='flex flex-row justify-center ml-10 mr-10 sm:ml-7 sm:mr-7'>
            <div className='text-center pt-14'>
              {/* <h1 className="tracking-tight font-extrabold text-gray-900">
                <span className="block text-4xl sm:text-6xl md:text-6xl">
                  Serving Tokens
                </span>
                <span className="block text-teal-500 mt-2 text-3xl sm:text-5xl md:text-5xl">
                  bash script demo
                </span>
              </h1> */}
              <div className='p-3 mb-3 mt-3 border border-purple-100 rounded md:rounded-lg md:mb-4 bg-gray-800 dark:bg-gray-800 dark:border-teal-800'>
                <div className='mb-2 flex flex-row justify-center ' style={{ aspectRatio: '720 / 139' }}>
                  <Image src='/hosting-bg.png' width='720' height='239' className='max-w-full' alt='hosting-bg' />
                </div>
                <div className='flex flex-col justify-center text-center'>
                  <p className='text-white justify-center flex-row text-center'>
                    <b>Status: </b>
                    <span className='text-gray-600 pl-2'> {systemStatus}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
