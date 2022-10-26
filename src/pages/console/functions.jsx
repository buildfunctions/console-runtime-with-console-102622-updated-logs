import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ConsoleHomeLeftContent from '../../partials/console/ConsoleHomeLeftContent';
import FunctionEntries from '../../partials/console/FunctionEntries';
import ForumRightContent from '../../partials/community/ForumRightContent';
import Avatar from '../../images/user-40-02.jpg';

// import { Link } from 'react-router-dom';

import UserAvatar from '../../images/user-avatar-32.png';
import UserImage01 from '../../images/user-32-01.jpg';
import UserImage02 from '../../images/user-32-02.jpg';
import UserImage03 from '../../images/user-32-03.jpg';
import UserImage04 from '../../images/user-32-04.jpg';
import UserImage05 from '../../images/user-32-05.jpg';
import UserImage06 from '../../images/user-32-06.jpg';
import UserImage07 from '../../images/user-32-07.jpg';
import Demo from '../../models/Demo'
import dbConnect from '../../../lib/dbConnect'
import ButtonLink from '../../components/Links/ButtonLink';

export async function getServerSideProps() {

  await dbConnect()

  /* find all the data in our database */
  const result = await Demo.find({})
  const demos = result.map((doc) => {
    const demo = doc.toObject()
    demo._id = demo._id.toString()
    return demo
  })

  return { props: { demos: demos } }
}

function FunctionsPage({ demos }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">

            <div className="xl:flex">

              {/* Left + Middle content */}
              <div className="md:flex flex-1">

                {/* Left content */}
                <ConsoleHomeLeftContent />

                {/* Middle content */}
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:py-8">

                    {/* Buttons group */}
                    <div className="mb-4">
                      <div className="w-full flex flex-wrap -space-x-px">
                        {/* <button className="btn grow bg-white border-slate-200 text-indigo-500 rounded-none first:rounded-l last:rounded-r">Input</button> */}
                        <button className="btn grow bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r">Config</button>
                        <button className="btn grow bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r">Metrics</button>
                      </div>
                    </div>

                    {/* Forum Entries */}
                    <div className="space-y-2">
                      {/* <FunctionEntries /> */}
                      {demos && demos.map((demo) => (
                        <article key={demo._id} className="bg-amber-50 shadow-md rounded border border-amber-300  p-5">
                          <div className="flex flex-start space-x-4">
                            {/* Content */}
                            <div className="grow">
                              {/* Title */}
                              <p className="font-semibold text-slate-800 mb-2">{demo._id}</p>
                              <p className="font-semibold text-slate-800 mb-2">{demo.function_name}</p>
                            </div>
                            {/* Footer */}
                            <footer className="flex flex-wrap text-sm">
                              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15.686 5.708 10.291.313c-.4-.4-.999-.4-1.399 0s-.4 1 0 1.399l.6.6-6.794 3.696-1-1C1.299 4.61.7 4.61.3 5.009c-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 14.001 2 15.4l3.696-3.697L9.692 15.7c.5.5 1.199.2 1.398 0 .4-.4.4-1 0-1.4l-.999-.998 3.697-6.695.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499Zm-7.193 6.095L4.196 7.507l6.695-3.697 1.298 1.299-3.696 6.694Z" />
                                    </svg>
                                    {demos && demos.map((demo) => (
                                      <div key={demo._id}>
                                        <p>{demo.function_name}</p>
                                      </div>
                                    ))}
                                  </div>
                                </a>
                              </div>
                              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                                <span className="text-slate-500">Preview</span>
                              </div>
                              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                                <span className="text-slate-500">500 req / 60 sec</span>
                              </div>
                              <span className='ml-4'>
                                <ButtonLink href="/view">View</ButtonLink>
                              </span>
                              <span className='ml-4'>
                                <ButtonLink href="/edit">Edit</ButtonLink>
                              </span>

                            </footer>

                          </div>
                          {/* Upvote button */}
                          <div className="shrink-0">
                            <button className="text-xs font-semibold text-center h-12 w-12 border border-indigo-400 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100">
                              <svg className="inline-flex fill-indigo-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path d="m0 6 6-6 6 6z" />
                              </svg>
                              <div>499</div>
                            </button>
                          </div>
                      </article>
                    ))}

                    {/* Post 2 */}
                  </div>

                  {/* Pagination */}
                  <div className="mt-6 text-right">
                    <nav className="inline-flex" role="navigation" aria-label="Navigation">
                      <ul className="flex justify-center">
                        <li className="ml-3 first:ml-0">
                          <a className="btn bg-white border-slate-200 text-slate-300 cursor-not-allowed" href="#0" disabled>&lt;- Previous</a>
                        </li>
                        <li className="ml-3 first:ml-0">
                          <a className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500" href="#0">Next -&gt;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                </div>
              </div>

            </div>

            {/* Right content */}
            <ForumRightContent />

          </div>

      </div>
    </main>

      </div >
    </div >
  );
}

export default FunctionsPage;