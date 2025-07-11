import React from 'react'
import Image from 'next/image'
function NextEvent() {
  return (
    <div className='w-1/2 mx-auto'>
    <div className="card card-sm card-side bg-base-100 shadow-lg">
  <figure className="p-4">
    <Image
    width={130}
    height={130}
      src="/affichetest.jpg"
      alt="affiche" />
  </figure>
  <div className="card-body w-1/2">
    <h2 className="card-title">Les journées du cinéma Ciné Cirta</h2>
    <p className='text-gray-500'>13 Juillet - 16 Juillet 2024</p>
    <p className='text-red-700'>Cinémathèque Ennasr</p>
    <p>Première : à 15h00 "Fleur du désert" court-métrage du réalisateur Osama Ben Hussein.  Le film sera suivi d'une discussion en présence du réalisateur.La deuxième projection : à 17h30 "Les murs du château des sept" Long-métrage du réalisateur Ahmed Rachedi.  Le film sera suivi d'une discussion en l'absence du  qui s'est excusé de ne pas pouvoir assister à cet événement. L'invitation est ouverte à tous les amateurs du septième art et à tous les citoyens de Constantine. </p>
    <div className="card-actions justify-end">
      <button className="btn bg-white hover:bg-red-300">&rarr;</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default NextEvent
