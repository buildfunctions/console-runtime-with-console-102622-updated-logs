import React from 'react'
import TealRocket from '../../images/teal-rocket.svg'
import Image from 'next/image'
function TealRocketLogo() {
  return (
    <div>
        <Image className="w-10 h-10 rounded cursor-pointer" src={TealRocket} width="35" height="35" alt="Teal Rocket Logo" />
    </div>
  )
}

export default TealRocketLogo