import React from 'react'
import Image from 'next/image'

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
            src="/images/affichetest.jpg"
            alt="affiche"
            className="sm:w-[100%] sm:h-auto object-cover rounded-lg"
          />
          
        </figure>

        <div className="card-body w-full sm:w-1/2">
          <h2 className="card-title">Les journées du cinéma Ciné Cirta</h2>
          <p className='text-gray-500'>13 Juillet - 16 Juillet 2024</p>
          <p className='text-red-700'>Cinémathèque Ennasr</p>
          <p>
            Première : à 15h00 "Fleur du désert" court-métrage du réalisateur Osama Ben Hussein.
            Le film sera suivi d'une discussion en présence du réalisateur. La deuxième projection :
            à 17h30 "Les murs du château des sept" Long-métrage du réalisateur Ahmed Rachedi.
            Le film sera suivi d'une discussion en l'absence du réalisateur qui s'est excusé.
            L'invitation est ouverte à tous les amateurs du septième art.
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-white hover:bg-red-300">&rarr;</button>
          </div>
        </div>
      </div>

      <div className='h-8'></div>
    </div>
  )
}

export default NextEvent
