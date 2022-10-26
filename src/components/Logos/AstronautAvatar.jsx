import React from 'react'
import Image from 'next/image';

import AstronautAvatar from '../../images/astronaut-avatar.svg'

function PortalLogo() {
  return (
    <div>
        <Image className="w-10 h-10 rounded cursor-pointer hover:bg-pink-200" src={AstronautAvatar} alt="AstronautAvatar" />
    </div>
  )
}

export default PortalLogo
