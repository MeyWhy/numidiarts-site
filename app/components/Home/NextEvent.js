import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/utils/basePath'
function NextEvent() {
  return (
    <div className='w-full sm:w-1/2 mx-auto px-4 relative'>
      <div className='h-8'></div>

      <div className="relative card card-sm card-side bg-base-100 shadow-lg flex flex-col sm:flex-row">
        
      <div className="absolute -top-2 -right-4 z-10">
          <span className="bg-red-200 text-red-500 text-xs font-medium px-3 py-2 rounded-sm shadow-sm select-none">
            Prochain Événement
          </span>
        </div>

        <figure className="p-4 flex justify-center sm:justify-start">
          
          <Image
            width={160}
            height={160}
            src={withBase("/images/affiches/nextev.jpg")}
            alt="affiche"
            className="sm:w-[100%] sm:h-auto object-cover rounded-lg"
          />
          
        </figure>

        <div className="card-body w-full sm:w-1/2">
          <h2 className="card-title">4ème Edition Ciné-Cirta, Cinéma & Mémoire</h2>
          <p className='text-gray-500'>26 Octobre - 31 Octobre 2025</p>
          <p className='text-red-700'>Constantine</p>
          <p>
           Cette édition de Ciné-Cirta, Cinéma & Mémoire mettra à l&apos;honneur le cinéma amateur algérien à travers un programme riche et varié avec des projections, hommages, conférences et ateliers, avec pour objectif de préserver et valoriser ce patrimoine tout en encourageant les jeunes à la pratique cinématographique.
          </p>
          <div className="card-actions justify-end">
            <Link href='/events' className="btn bg-white hover:bg-red-300">&rarr;</Link>
          </div>
        </div>
      </div>

      <div className='h-8'></div>
    </div>
  )
}

export default NextEvent
