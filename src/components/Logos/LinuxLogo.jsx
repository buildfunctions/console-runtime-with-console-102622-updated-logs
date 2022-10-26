import React from 'react'

import Image from 'next/image'

const LinuxLogo = () => {
  const width = 75
  const height = 75
  return <Image width={width} height={height} src='/src/images/st-logo-transparent.svg' alt='Linux Logo' />
}

export default LinuxLogo
