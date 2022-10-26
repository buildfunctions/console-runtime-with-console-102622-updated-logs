import React from 'react';

import UserImage01 from '../../images/avatar-01.jpg';
import UserImage02 from '../../images/avatar-02.jpg';
import UserImage03 from '../../images/avatar-03.jpg';
import UserImage04 from '../../images/avatar-04.jpg';
import UserImage05 from '../../images/avatar-05.jpg';
import UserImage06 from '../../images/avatar-06.jpg';

import ButtonLink from '../../components/Links/ButtonLink';
import Link from 'next/link';

import styles from "../../styles/console-input.module.css";
function ForumRightContent() {
  return (
    <div className="w-full hidden xl:block xl:w-72">
      <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          {/* Button */}
          <div className="mb-6">
            <ButtonLink href="/new" className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">New function</ButtonLink>
          </div>

          {/* Blocks */}
          <div className="space-y-2">

            {/* Block 1 */}
            <div className="bg-slate-50 p-1 rounded border border-slate-200">
              <ul>
                {/* Event 1 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 1:</div>
                    <div className="text-sm mb-0">
                      <a className="font-medium text-slate-800" href="#0">
                      Your project has been initialized successfully... please wait while we perform the initial checks... The entire process may take a couple of minutes...
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Link href="/logs/#1">log link</Link>
                        timestamp
                      </div>
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                    
                    <div className="text-xs font-medium uppercase text-rose-300 mb-0.5">success</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        Initial checks passed... Preparing to build functions in a sandbox...
                      </a>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 2 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 2:</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                      Sandbox functions were built successfully... Preparing final checks...
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div>
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 3 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 3:</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        message
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div>
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 4 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 4:</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800" href="#0">
                        message
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div>
                      <div className="text-xs font-medium text-slate-400 italic">❌</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-1 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-1 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View all logs</button>
              </div>
            </div>

            {/* Block 2 */}

            <div>


                  <form className="max-w-xl mx-auto bg-gray-900 bg-opacity-90 rounded">
                  
                    <div id="message" className="y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white text-md text-center pt-4 pb-4">
                     
                      <a href="localhost:3000/api/function-test">
                        http://localhost:3000/api/json/test
                      </a>
                    </div>

                    <h1 className="text-center text-xl mb-2 mt-2 text-white">Endpoint preview</h1>

                    <div id="message" className="y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white pl-2 text-md text-center">
                      <span className="flex flex-row justify-center">
                        <iframe className="bg-gray-400" src="http://localhost:3000/api/json/test" />
                      </span>
                      <a href="localhost:3000/api/function-test">
                        Deployment options
                      </a>
                    </div>
                    <div className="flex flex-row justify-center pt-4 pb-4">
                      <ButtonLink href="/view">Deploy to production</ButtonLink>
                    </div>


                  </form>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default ForumRightContent;
