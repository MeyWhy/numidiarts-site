'use client'

import Image from 'next/image'

const Card = ({ image, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row w-full max-w-3xl min-h-[300px] p-4 sm:p-6 rounded-xl mx-auto">
      <figure className="w-full sm:w-[40%] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={500}
          height={350}
          className="w-full h-[200px] sm:h-[300px] object-cover rounded-sm"
        />
      </figure>

      <div className="card-body w-full sm:w-[60%] px-2 sm:px-6 py-4 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-2">{description}</p>
      </div>
    </div>
  )
}

export default Card
