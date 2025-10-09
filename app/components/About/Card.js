'use client'

import Image from 'next/image'

const Card = ({ image, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row w-full max-w-3xl rounded-xl overflow-hidden mx-auto">
      <figure className="w-full sm:w-[40%]">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-56 sm:h-full object-cover object-top"
          priority
        />
      </figure>

      <div className="flex flex-col justify-center p-4 sm:p-6 w-full sm:w-[60%]">
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
