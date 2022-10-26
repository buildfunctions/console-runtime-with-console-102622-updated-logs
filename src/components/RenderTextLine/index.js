import React, { useState } from 'react'

import styles from '../styles/render-text-line.module.css'

import Link from 'next/link'

import { Keyframes, Frame } from '../../../lib/react-keyframes'

import { projectName } from '/pages/index'

export default function RenderTextLine({ projectName }) {
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
    <div>
      <span className='text-secondary'>API Route:</span>
      <span className='text-lg'>
        <div className={styles.body}>{renderLine('https://buildfunctions.com/api/projectmikey/${projectName}')}</div>
      </span>
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
