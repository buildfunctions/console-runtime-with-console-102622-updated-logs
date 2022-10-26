import React from 'react';
import Image from 'next/image';
import CustomLink from '../../components/CustomLink';
import PortalLogo from '../../components/Logos/PortalLogo'
import ButtonLink from '../../components/Links/ButtonLink';

function NewLeftContent() {
  return (
    <div className="w-full md:w-60 mb-8 md:mb-0">
      <div className="md:sticky md:top-16 md:h-[calc(100vh-64px)] md:overflow-x-hidden md:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          <div className="flex justify-between items-center md:block">
            {/* Title */}
            <header className="mb-6">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Console 
              </h1>
              {/* Badge */}
              <div className="flex flex-shrink-0 ml-2">
                <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 mt-1 rounded">PRO</span>
              </div>
            </header>

             {/* Button */}
             <div className="xl:hidden mb-6">
              <ButtonLink href="/new" className="btn md:w-full bg-indigo-500 hover:bg-indigo-600 text-white">New function</ButtonLink>
            </div>
          </div>

          {/* CustomLinks */}
          <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-4 md:space-y-3 -mx-4">
            {/* Group 1 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-3 md:sr-only">Menu</div>
              <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
              {/*               
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="/console">
                    <svg className="w-4 h-4 shrink-0 fill-current text-indigo-500 mr-2" viewBox="0 0 16 16">
                      <path d="M10 16h4c.6 0 1-.4 1-.998V6.016c0-.3-.1-.6-.4-.8L8.6.226c-.4-.3-.9-.3-1.3 0l-6 4.992c-.2.2-.3.5-.3.799v8.986C1 15.6 1.4 16 2 16h4c.6 0 1-.4 1-.998v-2.996h2v2.996c0 .599.4.998 1 .998Zm-4-5.99c-.6 0-1 .399-1 .998v2.995H3V6.515L8 2.32l5 4.194v7.488h-2v-2.995c0-.6-.4-.999-1-.999H6Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50"></span>
                  </CustomLink>
                </li> */}

                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-gray-200" href="/console/functions">
                    <svg className="w-4 h-4 shrink-0 fill-current text-indigo-500 mr-2" viewBox="0 0 16 16">
                      <path d="M10 16h4c.6 0 1-.4 1-.998V6.016c0-.3-.1-.6-.4-.8L8.6.226c-.4-.3-.9-.3-1.3 0l-6 4.992c-.2.2-.3.5-.3.799v8.986C1 15.6 1.4 16 2 16h4c.6 0 1-.4 1-.998v-2.996h2v2.996c0 .599.4.998 1 .998Zm-4-5.99c-.6 0-1 .399-1 .998v2.995H3V6.515L8 2.32l5 4.194v7.488h-2v-2.995c0-.6-.4-.999-1-.999H6Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-500">Functions</span>
                  </CustomLink>
                </li>

                {/* <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="/console/status">
                    <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16">
                      <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50">Status</span>
                  </CustomLink>
                </li> */}

                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="/console/successful">
                    <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16">
                      <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50">Successful</span>
                  </CustomLink>
                </li>
                
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="/console/failed">
                    <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16">
                      <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50">Failed</span>
                  </CustomLink>
                </li>

                
              </ul>
            </div>
            {/* Group 2 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-3">Languages</div>
              <ul className="flex flex-nowrap md:block mr-3 md:mr-0">

                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-black" href="/console">
                    <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-3" viewBox="0 0 12 12">
                      <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50 ">Shell</span>
                  </CustomLink>
                </li>

                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap">
                    <svg className="w-3 h-3 shrink-0 fill-current text-rose-500 mr-3" viewBox="0 0 12 12">
                      <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50">JavaScript # coming soon</span>
                  </CustomLink>
                </li>

                {/* Group 3 */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-3">Access</div>
                  <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
                    <li className="mr-0.5 md:mr-0 md:mb-0.5">
                      <CustomLink className="flex items-center px-2.5 py-2 rounded whitespace-nowrap"href="/tokens">
                        <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-3" viewBox="0 0 12 12">
                          <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12Z" />
                        </svg>
                        <span className="text-sm font-medium text-indigo-100 hover:text-indigo-50">Tokens</span>
                      </CustomLink>
                    </li>
                  </ul>
                </div>
                {/*  */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLeftContent;