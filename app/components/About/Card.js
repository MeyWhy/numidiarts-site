'use client'

import Image from 'next/image'
import Link from 'next/link'

const Card = ({ image, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row w-2/4 min-h-[350px] p-6 rounded-xl mx-auto">

      <figure className="w-full sm:w-[40%] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={500}
          height={350}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </figure>

      <div className="card-body w-full sm:w-[60%] px-6 py-4 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-base text-gray-700 mb-4">{description}</p>
       
      </div>
    </div>
  )
}

export default Card
