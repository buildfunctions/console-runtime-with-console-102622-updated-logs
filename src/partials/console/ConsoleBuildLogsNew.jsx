import React from 'react';
import Image from 'next/image';
import CustomLink from '../../components/CustomLink';
import PortalLogo from '../../components/Logos/PortalLogo'
import ButtonLink from '../../components/Links/ButtonLink';

function ConsoleNavigation() {
  return (
    <div className="md:pl-3 w-full md:w-60 mb-8 md:mb-0">
      <div className="md:sticky md:top-16 md:h-[calc(100vh-64px)] md:overflow-x-hidden md:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          <div className="flex justify-between items-center md:block">
            {/* Title */}
            <header className="sm:hidden mb-6">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Console 
              </h1>
              {/* Badge */}
              <div className="flex flex-shrink-0 ml-2">
                <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 mt-1 rounded">PRO</span>
              </div>
            </header>

           
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
                      Your project has been initialized successfully... The initial checks have began...
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      {/* <div className="flex -space-x-3 -ml-0.5">
                        <Link href="/logs/#1">log link</Link>
                        timestamp
                      </div> */}
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                    
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 2 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 2:</div>
                    <div className="text-sm mb-0">
                      <a className="font-medium text-slate-800" href="#0">
                      Initial checks have passed... Preparing a sandbox environment for additional checks...
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      {/* <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div> */}
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 3 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 3:</div>
                    <div className="text-sm mb-0">
                      <a className="font-medium text-slate-800" href="#0">
                        All tests have passed... preparing to build functions...
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      {/* <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div> */}
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>
                {/* Event 4 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Stage 4:</div>
                    <div className="text-sm mb-0">
                      <a className="font-medium text-slate-800" href="#0">
                        Your build was successful...  Please wait as the system mounts your API endpoint...
                      </a>
                    </div>
                  {/* Avatars */}
                  <div className="flex items-center space-x-2">
                      {/* <div className="flex -space-x-3 -ml-0.5">
                        <div className="flex -space-x-3 -ml-0.5">
                          <Link href="/logs/#1">log link</Link>
                          timestamp
                        </div>
                      </div> */}
                      <div className="text-xs font-medium text-slate-400 italic">✔️</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                </li>

                 {/* Event 5 */}
                 <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" />
                    <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" />
                    
                    <div className="text-sm mb-0">
                      <a className="font-medium text-slate-800" href="#0">
                        Your function has been cached to the file system...  Your projects generated URL is ...
                      </a>
                      <div id="message" className="mt-1 md:pr-2 y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white text-md text-center pr-5 pt-2 pb-2">
                        
                        <a className="pl-2" href="localhost:3000/api/function-test">
                          http://localhost:3000/api/json/test
                        </a>
                      </div>
                    </div><div className="text-xs font-medium uppercase text-rose-300 mb-0.5 mt-1">success</div>


                      <div className="mt-1 pr-5">
                        <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none mb-2">View all logs</button>
                      </div>
                    </div>
                  </li>
                </ul>
                  <div>
                      <form className="max-w-xl mx-auto bg-gray-400 bg-opacity-90 rounded">
                      
                        {/* <div id="message" className="y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white text-md text-center pr-5 pt-2 pb-2">
                        
                          <a href="localhost:3000/api/function-test">
                            http://localhost:3000/api/json/test
                          </a>
                        </div> */}

                        <h1 className="text-center text-xl mb-0 mt-0 pr-5 text-white">Endpoint preview</h1>

                        <div id="message" className="y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white pl-2 text-md text-center">
                          <span className="md:ml-14 flex flex-row justify-center">
                            <iframe className="bg-gray-400" src="http://localhost:3000/api/json/test" />
                          </span>
                          {/* <a className="bg-black flex flex-row justify-center pr-5" href="localhost:3000/api/function-test">
                            Deployment options
                          </a> */}
                        </div>
                        <div className="flex flex-row justify-center pr-5 pt-2 pb-2 bg-black">
                          <a className="bg-black flex flex-row justify-center pl-3" href="localhost:3000/api/function-test">
                            Deployment options
                          </a>
                        </div>


                      </form>
                    </div>
                    {/* Avatars */}
                   
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    {/* <div className="absolute top-0 -bottom-0 left-0.5 ml-px w-0.5 bg-slate-200" /> */}
                    {/* <div className="absolute top-0 left-0 ml- w-2 h-2 rounded-full bg-slate-400" /> */}
                  </div>
                
                

              {/* <div className="mt-1">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View all logs</button>
              </div> */}
            </div>
            

            {/* Block 2 */}

            {/* <div>


                  <form className="max-w-xl mx-auto bg-gray-900 bg-opacity-90 rounded">
                  
                    <div id="message" className="y-scrollbar-hidden rounded form-text area w-full bg-black border border-teal-500 text-white dark:text-white text-md text-center pt-4 pb-4">
                     
                      <a href="localhost:3000/api/function-test">
                        http://localhost:3000/api/json/test
                      </a>
                    </div>

                    <h1 className="text-center text-xl mb-0 mt-2 text-white">Endpoint preview</h1>

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
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsoleNavigation;
