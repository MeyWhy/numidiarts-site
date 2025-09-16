import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
//TODO might add a stack daisy ui
function Presentation() {
  return (
    <div className='bg-gray-200 pt-24 pb-16'>
      <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
          <Image src='/images/quisommesnous.jpg'
          alt='image'
          width={400}
          height={400}
          className='object-contain rounded-2xl'/>
        </div>
        <div className='p-6'>
            <h1 className='text-base font-bold text-red-700'>Qui sommes-nous?</h1>
      <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>Numidi Arts,<br/>Plus qu&apos;une association</h1>
<div className="border-t-4 border-red-700 my-4 w-1/4 "></div>
      <p className='mt-4 text-gray-600 text-sm font-medium leading-6'></p>
    <Link href='/about/#more' className='btn btn-outline border-red-700 hover:bg-red-700 hover:text-white mt-8 transition-all duration-200'>En savoir plus &rarr;</Link>
        </div>
      </div>
    </div>
  )
}

export default Presentation
