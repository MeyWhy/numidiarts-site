import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CommissionCard({ cardkey, image, title, description }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
      <figure>
        <Image
          src={image}
          alt={title}
          width={330}
          height={330}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold dark:text-gray-200 text-gray-800">{title}</h2>
        <p className="text-sm dark:text-gray-100 text-gray-600">{description}</p>
        <div className="card-actions mt-4">
          <Link href={`/about/#commissions`} className="btn btn-sm text-white bg-red-400 rounded-3xl hover:bg-red-600">
           Découvrir &gt;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CommissionCard
