'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import events from '../data/events.json'
import { withBase } from '@/utils/basePath'
function Page() {
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(events.length / itemsPerPage)

  const currentEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className='px-4'>
      <hr className="w-full h-px mt-8 mb-5 bg-gray-100 border-0 dark:bg-gray-700" />
      <h2 className='text-3xl font-semibold text-center mb-10 sm:px-5'>Nos Evènements</h2>
      
      <ul className="list bg-base-100 mt-10 space-y-6">
        {currentEvents.map((event, index) => (
          <li key={index}>
            <div className="card bg-base-100 shadow-[0_0_10px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row mx-auto max-w-3xl">
              <figure className="w-full sm:w-1/3 p-4 flex justify-center">
                <Image
                  width={130}
                  height={130}
                  src={withBase(event.image)}
                  alt="affiche"
                  className='w-[130px] h-auto object-contain'
                />
              </figure>
              <div className="card-body w-full px-4 pt-0 sm:pt-4">
                <h2 className="card-title text-lg sm:text-xl">{event.title}</h2>
                <p className='text-gray-500 text-sm sm:text-md'>{event.date}</p>
                <p className='text-red-700 text-base sm:text-lg'>{event.location}</p>
                <p className='text-sm text-justify'>{event.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center flex-wrap gap-2 mt-8">
        <button
          className="btn btn-sm dark:bg-gray-200 bg-gray-200"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Précédent
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${currentPage === i + 1 ? 'bg-red-500 text-white' : 'dark:text-gray-800 bg-gray-200'}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-sm bg-gray-200 dark:text-gray-800"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Suivant
        </button>
      </div>
      <div className='h-8'></div>
    </div>
  )
}

export default Page
