import React from 'react'
import Image from 'next/image'

function PortalLogo() {
  return (
    <div>
        <Image className="w-10 h-10 rounded cursor-pointer hover:bg-pink-200" src='/src/images/updated-portal.svg' width="35" height="35" alt="Portal Image" />
    </div>
  )
}

export default PortalLogo
