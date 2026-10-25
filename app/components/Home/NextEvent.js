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
            src={withBase("/images/affiches/nextev.png")}
            alt="affiche prochain evenement"
            className="w-[250px] sm:w-[250px] sm:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-[1.02]"
          />
          
        </figure>

        <div className="card-body w-full lg:w-1/2 ">
          <h2 className="card-title">5e édition des Journées Ciné-Cirta « Cinéma et Mémoire »</h2>
          <p className='text-gray-500'>31 Octobre - 4 Novembre 2026</p>
          <p className='text-red-700 text-sm'>Palais de la Culture Malek Haddad Constantine, l&apos;UP</p>
          <p className='text-sm'>Ils étaient amateurs... mais leur passion pour le cinéma était immense. Du 31 octobre au 4 novembre 2026, Constantine accueillera la cinquième édition des Journées Ciné-Cirta « Cinéma et Mémoire », placée sous le slogan « Le cinéma amateur, l&apos;autre mémoire du cinéma algérien ». Cinq jours de projections cinématographiques, de rencontres, de témoignages, d&apos;ateliers et de conférences pour redécouvrir des films, des visages et des parcours qui ont marqué notre mémoire cinématographique. Cinéastes et amoureux du septième art, jeunes et moins jeunes, citoyennes et citoyens de Constantine, nous vous invitons à venir nombreux participer à ce voyage passionnant entre cinéma et mémoire. Ces cinéastes ont, eux aussi, contribué à écrire l&apos;histoire du cinéma algérien. Événement organisé par l&apos;association culturelle NumidiArts, avec le soutien du ministère de la Culture et des Arts.</p>
          
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
