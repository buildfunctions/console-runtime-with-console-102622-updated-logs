import React, { useState } from 'react'

import Link from 'next/link'

import { Keyframes, Frame } from '../../../lib/react-keyframes'
import styles from '../../styles/render-text-line.module.css'

export default function HelpfulLinksSection() {
  const [buildfunctionsCurrentVersion, setBuildfunctionsCurrentVersion] = useState(
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

  return (
    <div className='bg-primary mx-auto px-4 ml-10 mr-10 sm:ml-2 sm:mr-2'>
      {/* Top area: Blocks */}
      <span className='text-lg'>
        <div className={styles.body}>{renderLine(`${buildfunctionsCurrentVersion}`)}</div>
      </span>
      <div className='flex flex-grow justify-between scrollbar-x-hidden overflow-auto sm:overflow-x-auto sm:grid-cols-12 gap-6 py-2 md:py-2 border-t border-gray-200 bg-primary'>
        {/* 2nd block */}

        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Why buildfunctions?
          </h6>
        </div>

        {/* 2nd block */}
        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Getting started
          </h6>
        </div>

        {/* 3rd block */}
        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Functions overview
          </h6>
        </div>

        {/* 4th block */}
        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Supported languages
          </h6>
        </div>

        {/* 5th block */}
        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Importing files
          </h6>
        </div>

        {/* 5th block */}
        <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Building API&apos;s
          </h6>
        </div>

          {/* 6th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
          <h6 className='cursor-pointer hover:text-indigo-50 text-gray-200 hover:text-red-400 font-medium mb-2'>
            Connecting
          </h6>
        </div>
      </div>

      {/* Bottom area */}
      <div className='md:flex md:items-center md:justify-between border-t border-gray-700'></div>
    </div>
  )
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
