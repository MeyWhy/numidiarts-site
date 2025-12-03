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
          <h2 className="card-title">Projection - Le Sang des Loups de Amar Sifodil</h2>
          <p className='text-gray-500'>29 Novembre 2025 - 14h00</p>
          <p className='text-red-700 text-sm'>Musée du cinéma Constantine (Cinémathèque), Salle Ennasser</p>
          <p className='text-base'>Projection du film « Le Sang des Loups », du réalisatuer algérien Amar Sifodil, produit en 2017 par Yahia Mezahm et l&apos;AARC. À l&apos;occasion d&apos;une rencontre cinéphile organisée par la commission des Zinzins du Cinéma de l&apos;Association Numidia Arts, en partenariat avec le Musée du Cinéma de Constantine. Rendez-vous le samedi, à la Cinémathèque de Constantine - Salle Ennasser, pour retrouver le public passionné de cinéma et contribuer à dynamiser la scène cinématographique dans la wilaya. Entrée libre ouverte à tous les amoureux du 7ᵉ art, ainsi qu&apos;à toutes les citoyennes et tous les citoyens de Constantine.

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
