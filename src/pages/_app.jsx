import '../css/style.css';

import { Router } from 'react-router-dom';
import { createMemoryHistory  } from 'history';
import { ThemeProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import ProgressBar from '@badrap/bar-of-progress'
import Aos from 'aos'
import Head from 'next/head'
import { useRouter } from 'next/router'

import HelpfulLinksSection from '../components/RenderTextLine/HelpfulLinksSection'
import Hero from '../components/Hero'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { UserProvider } from '@auth0/nextjs-auth0';
import { useTimeoutFn } from 'react-use'

import Pattern from '../components/Svg/Pattern'

import { Keyframes, Frame } from '../../lib/react-keyframes'
import styles from '../styles//render-text-line.module.css'

// import { SessionProvider } from "next-auth/react"

import Header from '../partials/Header';

if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
  window.requestIdleCallback = (fn) => setTimeout(fn, 1);
  window.cancelIdleCallback = (e) => clearTimeout(e);
}

const history = createMemoryHistory();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [transactionPanelOpen, setTransactionPanelOpen] = useState(true);

  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true))
  
  const [buildfunctionsCurrentVersion, setBuildfunctionsCurrentVersion] = useState(
    'v1.0.1'
  )

  const [systemStatus, setSystemStatus] = React.useState('| All systems good. |')
  const [usefulLinksDescription, setUsefulLinksDescription] = useState(
    'Here are some useful links to get started.'
  )
  const [count, setCount] = useState(0)
  const [text, setText] = React.useState('')
  const [response, setResponse] = useState(null)
  // for the subheader
  const [lineCount, setLineCount] = useState(0)

  const renderLine = (text) => {
    const frames = []

    // starting frame
    frames.push(
      <Frame duration={sleepDuration} key={`${text}-first`}>
        <Line />
      </Frame>
    )

    // typing out the line
    for (let i = 0; i < text.length; i++) {
      const isLastLetter = i === text.length - 1
      const duration = isLastLetter ? sleepDuration : getTypingDuration()
      frames.push(
        <Frame duration={duration} key={`${text}-${i}`}>
          <Line text={text.slice(0, i + 1)} />
        </Frame>
      )
    }

    // ending frame
    frames.push(
      <Frame key={`${text}-last`}>
        <Line text={text} noCaret />
      </Frame>
    )

    return (
      <Keyframes component='p' onEnd={() => setLineCount((c) => c + 1)}>
        {frames}
      </Keyframes>
    )
  }
  const NAVBAR_LINKS = [
    {
      name: 'News',
      href: '/docs'
    },
    {
      name: 'Status',
      href: '/billing'
    },
    {
      name: 'Resources',
      href: '/examples'
    },
    {
      name: 'Version',
      href: '/pricing'
    }
  ]

  const { user } = pageProps;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div suppressHydrationWarning>
      <Router {...{ history }}>
        {typeof window === 'undefined' ? null : 
        (
          <>
            <UserProvider user={user}>
              {/* <SessionProvider session={session}> */}
                <ThemeProvider defaultTheme='dark' attribute='class'>
                  <SWRConfig
                    value={{
                      refreshInterval: 40000,
                      revalidateOnFocus: false,
                      fetcher: (path, init) => fetch(path, init).then((res) => res.json()),
                    }}
                  >
                    <AppLayout
                      deployButton={{
                        env: [
                          'UPSTASH_REST_API_DOMAIN',
                          'UPSTASH_REST_API_TOKEN',
                          'API_KEYS_JWT_SECRET_KEY',
                        ],
                      }}
                    >

                      
                      <div className='relative'>
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <div className='h-full'>
                          <div className='flex flex-col mx-auto bg-primary text-primary'>
                            
                            <div className=''>
                              <span className='sr-only'>Close main menu</span>
                              
                              <div className='flex flex-row justify-start sm:tracking-normal md:ml-10 md:flex md:flex-row md:space-x-5 lg:space-x-10 hover:text-rose-300'>
                                
                                <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                                    <span className="flex flex-row justify-end cursor-pointer">
                                      <XIcon className='hover:text-teal-200 h-3 w-3' aria-hidden='true' />
                                    </span>
                                  </button>
                                
                                {NAVBAR_LINKS.map((item) => (
                                  <a key={item.name} href={item.href} className='font-medium text-gray-500 hover:text-rose-300'>
                                    {item.name}
                                  </a>
                                ))}
                                  
                              </div>
                            
                            </div>
                          </div>
                        </div>
                        <div className='border-t border-gray-200'>
                          <Transition
                            as={Fragment}
                            show={!isShowing}
                            enter="transform transition duration-[400ms]"
                            enterFrom="opacity-0 rotate-[-120deg] scale-50"
                            enterTo="opacity-100 rotate-0 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100 "
                            leaveTo="opacity-0 scale-95 "
                          >

                            <div className='relative overflow-hidden'>
                              <Pattern />
                              <div className='flex flex-row justify-center ml-10 mr-10 sm:ml-7 sm:mr-7'>
                                <div className='text-center pt-14'>
                                  <div className='p-3 mb-3 mt-3 border border-purple-100 rounded md:rounded-lg md:mb-4 bg-gray-800 dark:bg-gray-800 dark:border-teal-800'>
                                    <div className='mb-2 flex flex-row justify-center ' style={{ aspectRatio: '720 / 139' }}>
                                      <Image src='/hosting-bg.png' width='720' height='239' className='max-w-full' alt='hosting-bg' />
                                    </div>
                                    <div className='flex flex-col justify-center text-center'>
                                      <p className='text-gray-600 justify-center flex-row text-center'>
                                        <b>Status: </b>
                                        <span className='text-white pl-2'> {systemStatus}</span>
                                      
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Transition>
                        </div>


                        <div className='border-t border-gray-200'>
                          <Transition
                            as={Fragment}
                            show={!isShowing}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                          >
                          <div className='bg-primary mx-auto px-4 ml-10 mr-10 sm:ml-2 sm:mr-2'>
                              {/* Top area: Blocks */}
                              <span className='text-lg'>
                                <div className="text-teal-200">{renderLine(`Current version: ${buildfunctionsCurrentVersion}`)}</div>
                              </span>
                              <div className='flex flex-grow justify-between scrollbar-x-hidden overflow-auto sm:overflow-x-auto sm:grid-cols-12 gap-6 py-2 md:py-2 border-t border-gray-200 bg-primary'>
                                {/* 2nd block */}

                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer  text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Why buildfunctions?
                                  </h6>
                                </div>

                                {/* 2nd block */}
                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Getting started
                                  </h6>
                                </div>

                                {/* 3rd block */}
                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Functions overview
                                  </h6>
                                </div>

                                {/* 4th block */}
                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Supported languages
                                  </h6>
                                </div>

                                {/* 5th block */}
                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Importing files
                                  </h6>
                                </div>

                                {/* 5th block */}
                                <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Building API&apos;s
                                  </h6>
                                </div>

                                  {/* 6th block */}
                                  <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                                  <h6 className='cursor-pointer text-gray-200 hover:text-red-400 font-medium mb-2'>
                                    Connecting
                                  </h6>
                                </div>
                                
                              </div>

                              {/* Bottom area */}
                              <div className='md:flex md:items-center md:justify-between border-t border-gray-700'></div>
                            </div>
                          </Transition>
                        </div>
                      </div>

                      <Component {...pageProps} />
                      
                      {/* <TransactionPanel transactionPanelOpen={transactionPanelOpen} setTransactionPanelOpen={setTransactionPanelOpen} /> */}
                    </AppLayout>
                  </SWRConfig>
                </ThemeProvider>
              {/* </SessionProvider> */}
            </UserProvider>
          </>
        )
      }
      </Router>
    </div>
  );
}

const sleepDuration = 500
const getTypingDuration = () => 80 + 80 * (Math.random() - 0.5)

const Line = ({ text, noPrompt = false, noCaret = false }) => (
  <>
    {!noPrompt && <span></span>}
    {text}
    {!noCaret && <span className={styles.caret} />}
  </>
)

function AppLayout({ children }) {


  return (
    <>
      {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      {/* <div className="flex h-screen overflow-hidden"> */}
        
      {/* Sidebar */}
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {/* Content area */}
        {/* <div className="flex flex-col max-w-7xl flex-1 overflow-y-auto overflow-x-hidden"> */}
          <div className="max-h-full h-full bg-[#424242] px-6 py-4 scrollbar-custom overflow-y-auto">
            {children}
          </div>
        {/* <TransactionPanel transactionPanelOpen={transactionPanelOpen} setTransactionPanelOpen={setTransactionPanelOpen} />  */}
        {/* </div> */}
      {/* </div> */}
    </>
  )
}
