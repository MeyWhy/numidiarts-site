

'use client'
import React from 'react'
import { useState } from 'react'
import medias from '../data/images.json'

const categories = ['All categories', 'Shoes', 'Bags', 'Electronics', 'Gaming']

function Page() {
    const [selected, setSelected] = useState('All categories')

  const filtered = selected === 'All categories'
    ? medias
    : medias.filter(item => item.category === selected)

  return (
    <div className="px-4 md:px-8">
      {/* Filtres */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full border transition-all
              ${selected === cat
                ? 'text-blue-700 border-blue-600 bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                : 'text-gray-900 border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <div key={idx}>
            {item.type === 'images' ? (
              <img
                src={item.url}
                alt={item.title}
                className="h-auto max-w-full rounded-lg"
              />
            ) : (
              <video
                controls
                className="h-auto max-w-full rounded-lg"
              >
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
