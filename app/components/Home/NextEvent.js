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
          <h2 className="card-title">Rencontre Littéraire - Lectures Avec Hosni Kitouni</h2>
          <p className='text-gray-500'>08 Novembre 2025 - 14h</p>
          <p className='text-red-700 text-sm'>Salle du défunt artiste Abdelhamid Habbati, au Théâtre Régional de Constantine « Mohamed Tahar Fergani ».</p>
          <p className='text-base'>Une Rencontre littéraire interactive « Lectures », célébrant le parcours du chercheur et historien Hosni Kitouni, à travers la mise en lumière de ses contributions scientifiques, littéraires et académiques majeures. En célébration du 71ᵉ anniversaire du déclenchement de la glorieuse Guerre de Libération nationale. L&apos;invitation est ouverte au public, amateurs de littérature, de lecture et d&apos;écriture, soyez au rendez-vous !

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
