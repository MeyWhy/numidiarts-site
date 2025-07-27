import React from 'react'
import Image from 'next/image';

function ValeursCard({image, title}) {
  return (
    <div>
      <Image src={image} alt={title} width={80} height={80} className='object-contain mx-auto'/>
      <h1 className='text-center text-lg mt-5 bg-5 font-semibold text-gray-800'>{title}</h1>
    </div>
  )
}

export default ValeursCard
