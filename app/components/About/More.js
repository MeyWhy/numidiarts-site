import React from 'react'
import Image from 'next/image'
import { withBase } from '@/utils/basePath'
//TODO add more history here
function More() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
 
        <div className="w-full md:w-1/2 space-y-6 text-left md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Notre Histoire</h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Depuis sa création, l&apos;association <strong>Numidi Arts</strong> s&apos;engage à promouvoir la culture, l&apos;art, et la solidarité à Constantine. 
            Animée par une équipe de passionnés, elle organise régulièrement des événements qui rassemblent, émeuvent et inspirent — des ateliers pour enfants, 
            des projections-débats, des cafés littéraires, des journées solidaires et bien plus encore.
          </p>
          <p className="text-base sm:text-lg text-gray-600 ">
            Notre but est simple : </p>
             <ul className='list-disc sm:text-lg text-base px-7'> <li>Promouvoir l&apos;acte théâtral </li> <li>Réconcilier les gens avec la culture </li> <li>Dynamiser la vie dans les quartiers</li></ul> 
         
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="stack stack-start w-48 sm:w-64 md:w-72 lg:w-80">
            <div className="border-base-content card bg-base-100 border text-center">
              <div className="card-body p-0">
                <Image src={withBase("/images/hero.jpg")} width={400} height={400}  alt="Event 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="border-base-content card bg-base-100 border text-center">
              <div className="card-body p-0">
                <Image src={withBase("/images/quisommesnous.jpg")} width={400} height={400} alt="Event 2" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="border-base-content card bg-base-100 border text-center">
              <div className="card-body p-0">
                <Image src={withBase("/images/hero.jpg")} width={400} height={400} alt="Event 3" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
