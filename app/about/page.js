import React from 'react'
import Image from 'next/image'
import Presentation from '../components/Home/Presentation'
import Valeurs from '../components/About/Valeurs'
import Carousel from '../components/About/Carousel'
import More from '../components/About/More'

function AboutUsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src="/images/_MG_3660.jpg"
          alt="Numidi Art Hero"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 brightness-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
             Les zinzins de la culture, semeurs d'art.
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Découvrez notre histoire, nos missions, et ce qui nous anime au quotidien.
          </p>
        </div>
      </section>

     
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Presentation />
        </div>
      </section>

      <section id='more' className='py-0 px-6'>
      <div className='max-w-5xl mx-auto'>
        <More/>
      </div>
      </section>

    

      <section id='commissions' className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Nos commissions</h2>
        <Carousel/>
        </div>
      </section>

      
      <section id='valeurs' className="py-16 bg-red-50 px-6">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Nos valeurs</h2>
         <Valeurs/>
        </div>
      </section>

  
      <section className="py-20 bg-red-200 text-center">
        <h3 className="text-2xl font-semibold mb-4">Envie de nous rejoindre ?</h3>
        <p className="text-gray-700 mb-8">Participez à nos événements et devenez membre de l&apos;association !</p>
        <a href='https://forms.gle/FPAPyQxFeCnZxiFbA' className='mt-6 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg
    bg-red-700 text-white rounded-lg font-medium border-2 border-red-700
    shadow-none hover:bg-transparent hover:text-red-700 transition-[box-shadow,color]  duration-500 ease-in-out
    focus:outline-none focus:ring-0'>
          Rejoignez-nous
        </a>
      </section>

    </div>
  )
}

export default AboutUsPage
