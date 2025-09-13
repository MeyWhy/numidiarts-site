'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import medias from '../data/images.json'

const categories = [
  'Cinéma',
  'Lecture',
  'Kermesse',
  'Nature',
  'Musique',
  'Bénévolat',
  'Théâtre',
  'Evenements'
]

function Page() {
  const [selected, setSelected] = useState('Cinéma')

  const filtered =
    selected === ''
      ? medias
      : medias.filter(item => item.commission === selected)

  return (
    <div className='px-4 md:px-8'>
      <div className='flex items-center justify-center py-4 md:py-8 flex-wrap'>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full border transition-all
              ${
                selected === cat
                  ? 'text-blue-700 border-blue-600 bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                  : 'text-gray-900 border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='columns-1 sm:columns-2 md:columns-3 gap-4'>
        {filtered.map((item, idx) => (
          <div key={idx} className='mb-4 break-inside-avoid relative group'>
            {item.type === 'images' ? (
              <>
                <Image
                width={400}
                height={400}
                unoptimized
                  src={item.url}
                  alt={item.title}
                  className='w-full rounded-lg transition duration-300 group-hover:blur-sm'
                />
                <div className='absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300'>
                  {item.title}
                </div>
              </>
            ) : (
              <video controls className='w-full rounded-lg'>
                <source src={item.url} type='video/mp4' />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
