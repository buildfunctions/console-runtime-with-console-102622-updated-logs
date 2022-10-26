import React from 'react'
import PlanetImage from '../../images/planet.svg'
import Image from 'next/image'
function PlanetLogo() {
  return (
    <div>
        <Image className="w-10 h-10 rounded cursor-pointer" src={PlanetImage} width="35" height="35" alt="Planet Image" />
    </div>
  )
}

export default PlanetLogo