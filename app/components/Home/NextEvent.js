import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/utils/basePath'
function NextEvent() {
  return (
    <div className='w-full sm:w-1/2 mx-auto px-4 relative'>
      <div className='h-8'></div>

      <div className="relative card card-sm card-side bg-base-100 shadow-lg flex flex-col lg:flex-row">
        
      <div className="absolute -top-2 -right-4 z-10">
          <span className="bg-red-200 text-red-500 text-xs font-medium px-3 py-2 rounded-sm shadow-sm select-none">
            Prochain Événement
          </span>
        </div>

        <figure className="p-4 flex justify-center sm:justify-start">
          
          <Image
            width={250}
            height={250}
            src={withBase("/images/affiches/nextev.jpg")}
            alt="affiche prochain evenement"
            className="w-[250px] sm:w-[250px] sm:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-[1.02]"
          />
          
        </figure>

        <div className="card-body w-full lg:w-1/2 ">
          <h2 className="card-title">Ciné-Cirta: Cinéma et Mémoire - Constantine au cœur du cinéma</h2>
          <p className='text-gray-500'>29 Décembre 2025 - 31 Décembre 2025</p>
          <p className='text-red-700 text-sm'>Maison de la Culture Malek Haddad, Constantine</p>
          <p className='text-base'>4ème Edition de l&apos;évènement Ciné-Cirta: Cinéma et Mémoire avec comme thème Constantine au cœur du cinéma. Au programme, des projections de films et des ateliers assurés par des professionels et des passionnés autour des métiers du cinéma. Entrée libre ouverte à tous les amoureux du 7ᵉ art, ainsi qu$&apos;à toutes les citoyennes et tous les citoyens de Constantine.
            Pour plus d&apos;informations visitez notre  
            <a className='text-base' href='https://www.facebook.com/share/p/1S8zuVadoK/'> page facebook</a>
          </p>
          
          <div className="card-actions justify-end">
            <Link href='/events' className="btn bg-white text-black hover:bg-red-300 dark:bg-white dark:text-black dark:hover:bg-red-300">&rarr;</Link>
          </div>
        </div>
      </div>

      <div className='h-8'></div>
    </div>
  )
}

export default NextEvent
